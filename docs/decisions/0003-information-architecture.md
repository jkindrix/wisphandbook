# ADR-0003: Journey/Reference split

**Status:** accepted (2026-06-05)

**Context.** WISP knowledge has two shapes: a sequential learning path
(stages from feasibility to operations) and lookup material (RF theory,
hardware landscape, regulatory, business mechanics). Interleaving them is the
classic failure: volatile facts get baked into walkthrough prose, and the
walkthrough rots with them.

**Decision.** Two top-level sections. `/journey/` — sequential stages
(foundations → first-customer → first-ten → scaling → operating), prev/next as
primary navigation. `/reference/` — maintained lookup pages on their own
review cadence. **Journey pages link into reference; reference never links
into journey. One fact lives in one place.** Journey prose says "a sector
radio in this class" and links; it never names a model inline.

**Consequences.** Writing discipline required at every page. In exchange, the
journey stays evergreen and re-walkable while reference pages absorb nearly
all `lastReviewed` churn.
