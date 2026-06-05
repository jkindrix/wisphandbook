# ADR-0002: Toolchain — Astro Starlight, stock and core-only

**Status:** accepted (2026-06-05)

**Context.** Hand-rolled HTML dies at ~20 pages. Candidates: Starlight, MkDocs
Material, Hugo, Docusaurus. The deciding factor: this handbook will want
inline interactive calculators (link budget, Fresnel clearance, breakeven
models) at the point of teaching — islands architecture makes that natural;
MkDocs/Hugo make it painful. Starlight also ships Pagefind search, edit links,
and extensible content schemas out of the box.

**Decision.** Astro Starlight. **Stay close to the stock theme. No third-party
Astro plugins** — our needs (Markdown/MDX, Pagefind, bespoke components) are
core-supported, and core is what the Astro team keeps stable. `npx
@astrojs/upgrade` is a quarterly chore.

**Consequences.** We accept npm-ecosystem churn as the cost of MDX +
interactivity. The no-plugins rule is the discipline that keeps that cost low.
If a need appears that seems to require a plugin, the first question is
whether we actually need the feature.
