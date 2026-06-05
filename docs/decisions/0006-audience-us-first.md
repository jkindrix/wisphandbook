# ADR-0006: US-first, with regulatory quarantine

**Status:** accepted (2026-06-05)

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
