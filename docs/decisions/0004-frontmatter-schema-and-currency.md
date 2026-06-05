# ADR-0004: Schema-enforced content currency

**Status:** accepted (2026-06-05)

**Context.** WISP content half-lives vary brutally: physics (decades),
hardware platforms (~2 years), prices and filing deadlines (months). Readers
make real purchasing decisions on this material, so a stale page presented as
current is worse than no page. A reviewed-date promise kept by memory across
hundreds of pages will be broken.

**Decision.** The content collection schema (`src/content.config.ts`) makes
`lastReviewed` (date), `depth`, and `jurisdiction` **required — a page missing
them fails the build**. Optional fields `stage`, `prerequisites`, and
`equipmentCited` support journey structure and currency audits
("every page citing equipment not reviewed in 12 months" is a query, not a
spreadsheet). Dates are rendered visibly on every page with a
"report outdated info" link pre-filling a GitHub issue.

**Consequences.** Authoring a page costs three frontmatter lines. Currency
auditing becomes a build artifact, and readers become the audit workforce.
