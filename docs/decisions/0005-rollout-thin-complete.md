# ADR-0005: Thin-complete rollout, no published stubs

**Status:** accepted (2026-06-05)

**Context.** The dominant failure mode for solo-authored curriculum sites is
the stub graveyard — sections marked "coming soon" for years (observed in the
wild at startyourownisp.com, this site's closest prior art). The opposite
failure is writing stage 0 exhaustively while the rest of the promise stays
empty.

**Decision.** Ship a **complete-thin skeleton first**: every journey stage
genuinely useful at `overview` depth before launch, then deepen in passes.
**No published page is ever a stub** — unfinished pages carry `draft: true`
(Starlight excludes drafts from production builds). Every page wears a `depth`
badge (`overview | working | comprehensive`) so thinness is declared, not
discovered.

**Consequences.** Launch waits until the skeleton is real. Deepening passes
are shippable increments, prioritized by analytics and reader reports rather
than guesswork.
