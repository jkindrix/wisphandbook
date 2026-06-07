# ADR-0006: US-first, with regulatory quarantine

**Status:** accepted (2026-06-05); amended (2026-06-07)

**Amendment (2026-06-07).** Writing the five stages found the workable line,
and it is softer than the original rule. Journey pages remain
`jurisdiction: universal`, and **regulatory obligations and rule detail still
live only in reference** (BDC deadlines → filings-us; band rules →
spectrum-us). But **market facts and explicitly-marked US examples are
permitted in journey prose** — Stage 0's competitive landscape (Starlink
pricing, BEAD overbuild risk) is load-bearing and cannot honestly be written
without them. The `jurisdiction` field therefore marks where *regulatory
detail* lives, not a promise of zero US references. External review
(2026-06-07) correctly flagged the doc/practice divergence; this amendment
resolves it in favor of demonstrated practice.

**Context.** Spectrum rules, filing requirements (BDC), and pole-attachment
law are jurisdiction-specific and form a large fraction of WISP knowledge.
Going international from day one doubles research burden; being implicitly
American while claiming universality is worse than either.

**Decision.** **US-first, declared on the landing page.** Physics and business
fundamentals are written universally. Jurisdiction-dependent content is
quarantined in `/reference/regulatory/` and every page declares
`jurisdiction: universal | us-federal | us-state` in frontmatter. Journey
pages must be `universal` — they link to regulatory reference, never make
inline regulatory claims.

**Consequences.** "Internationalize later" becomes a query over the
`jurisdiction` field instead of an archaeology project. US-specific glossary
entries are marked inline.
