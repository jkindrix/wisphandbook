// Content audit: stale lastReviewed dates + internal link integrity.
// Dependency-free by design (ADR-0010). Run after `npm run build`:
//   node scripts/audit.mjs
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DOCS = 'src/content/docs';
const DIST = 'dist';
const STALE_DAYS = 180;
const STALE_DAYS_EQUIPMENT = 90; // equipmentCited pages rot faster (ADR-0004)

function walk(dir, ext) {
	return readdirSync(dir).flatMap((name) => {
		const p = join(dir, name);
		return statSync(p).isDirectory() ? walk(p, ext) : ext.some((e) => p.endsWith(e)) ? [p] : [];
	});
}

let problems = 0;

// --- 1. lastReviewed staleness ---
const today = new Date();
for (const file of walk(DOCS, ['.md', '.mdx'])) {
	const src = readFileSync(file, 'utf8');
	const fm = src.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
	const reviewed = fm.match(/^lastReviewed:\s*(\d{4}-\d{2}-\d{2})/m)?.[1];
	if (!reviewed) continue; // schema enforces presence at build; skip non-doc files
	const equipment = /^equipmentCited:\s*true/m.test(fm);
	const ageDays = Math.floor((today - new Date(reviewed)) / 86400000);
	const limit = equipment ? STALE_DAYS_EQUIPMENT : STALE_DAYS;
	if (ageDays > limit) {
		problems++;
		console.log(`STALE  ${file} — reviewed ${reviewed} (${ageDays}d ago, limit ${limit}d${equipment ? ', equipmentCited' : ''})`);
	}
}

// --- 2. internal link integrity (against built output) ---
if (!existsSync(DIST)) {
	console.error('dist/ not found — run `npm run build` first; skipping link check');
} else {
	for (const file of walk(DIST, ['.html'])) {
		const html = readFileSync(file, 'utf8');
		for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) {
			const target = m[1];
			if (target.startsWith('/_astro/') || target.includes('.')) continue;
			const candidate = join(DIST, target, 'index.html');
			const flat = join(DIST, target.replace(/\/$/, '') + '.html');
			if (!existsSync(candidate) && !existsSync(flat)) {
				problems++;
				console.log(`BROKEN ${file} → ${target}`);
			}
		}
	}
}

if (problems === 0) console.log('audit clean: no stale pages, no broken internal links');
process.exit(problems === 0 ? 0 : 1);
