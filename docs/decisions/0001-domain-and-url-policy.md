# ADR-0001: Domain and URL policy

**Status:** accepted (2026-06-05)

**Context.** URLs are the most irreversible part of a citable reference site:
inbound links, bookmarks, and LLM citations accrue to whatever we launch on,
and restructuring later means permanent link rot. A fun domain (wispy.lol) was
already owned; credibility analysis favored a boring canonical.

**Decision.** Canonical domain is **wisphandbook.com**. wispy.lol and
wisp.jdok.dev become 301 redirects. Slugs are **name-based, never numbered**
(`/journey/first-customer/`, not `/journey/1-first-customer/`) so inserting a
stage never renumbers URLs; sidebar order lives in frontmatter. URL depth ≤ 3.
Any future URL move ships with permanent redirects — cool URIs don't change.

**Consequences.** The sayable alias survives as a redirect at ~$30/yr renewal
(keep-or-lapse decision deferred to renewal). Stage ordering is invisible in
URLs, so the sidebar is the journey map.
