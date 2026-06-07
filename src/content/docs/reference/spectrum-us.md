---
title: "US Spectrum for Fixed Wireless"
description: The bands a US WISP can use today — what each is good for, and what coordination it requires.
sidebar:
  order: 10
prev: false
lastReviewed: 2026-06-07
depth: overview
jurisdiction: us-federal
---

The practical menu for a US fixed-wireless operator, as of mid-2026. Power
limits (EIRP), coordination requirements, and band rules are set by the FCC
and change over time — verify current rules before deploying.

| Band | Character | Coordination |
| --- | --- | --- |
| **900 MHz** | Penetrates trees; very little bandwidth; niche NLOS tool | None (unlicensed) |
| **2.4 GHz** | Crowded everywhere; mostly legacy | None (unlicensed) |
| **5 GHz** | The historical WISP workhorse; huge gear ecosystem; increasingly crowded/noisy in served areas | None (unlicensed; DFS rules in some sub-bands) |
| **CBRS (3.55–3.7 GHz)** | 150 MHz of shared mid-band; better propagation than 5 GHz; "lightly licensed" middle ground | SAS subscription required (GAA tier); priority licenses (PALs) auctioned |
| **6 GHz** | 1,200 MHz unlicensed — 850 MHz usable outdoors at standard power; the cleanest sizable spectrum available to a new operator today | AFC required for standard power — automated, commercial services approved by the FCC |
| **60 GHz** | Multi-gigabit capacity; short range (~1–2 km usable); rain fade is real; superb for backhaul and dense clusters | None (unlicensed) |

Notes that matter for a new operator:

- **6 GHz standard power is no longer "coming" — it's here.** The FCC approved
  multiple commercial AFC operators, and standard-power outdoor gear is
  shipping from major fixed-wireless vendors. For a new WISP, starting in
  relatively clean 6 GHz spectrum instead of fighting the 5 GHz noise floor is
  one of the few genuine timing advantages you have over operators who built
  out a decade ago.
- **AFC and SAS are not paperwork burdens to fear.** Both are automated
  database coordinations handled largely by the equipment itself with a
  service subscription — not license applications.
- **EIRP limits differ per band and per use** (point-to-point links generally
  get higher allowances than point-to-multipoint). Your equipment enforces
  most of this, but *you* are the licensee-of-record for compliance.
- Truly licensed spectrum (e.g., 11 GHz PtP microwave links, purchased PALs)
  exists and matters at scale — when it earns its cost is a scaling-stage
  decision, not a day-one one.
