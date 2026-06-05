# ADR-0007: Interactivity ceiling and calculator architecture

**Status:** accepted (2026-06-05); calculators not yet built

**Context.** Inline calculators (link budget, FSPL, Fresnel clearance,
oversubscription, CapEx-per-sub/breakeven) are a core differentiator — readers
otherwise tab out to scattered ad-laden tools. They are also the main vector
for framework churn and copy-pasted-math rot in docs sites.

**Decision.** Interactivity is **client-side only, forever** — no accounts, no
backend, no database; deployment stays a single static container. Calculators
are **vanilla Web Components** (zero framework — Astro hydrates custom
elements natively), each one a self-contained island with no shared
client-side state. All RF/units math lives in **one shared, tested module**
(`src/lib/rf-math` when it exists) that every calculator imports: dBm/mW
conversions and FSPL formulas exist in exactly one place.

**Consequences.** No framework dependency to churn. The constraint is the
feature: anything requiring a backend is out of scope by decision, not
oversight.
