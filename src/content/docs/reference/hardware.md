---
title: "Access Hardware Landscape"
description: The fixed-wireless platform ecosystems a new WISP actually chooses between — names, classes, and indicative street prices.
sidebar:
  order: 20
lastReviewed: 2026-06-07
depth: overview
jurisdiction: universal
equipmentCited: true
---

The journey pages deliberately speak in classes ("a sector AP in the
$500–1,500 range") so they don't rot. This page carries the names and prices —
and is flagged internally for fast re-review, because it *will* rot. Prices
below are US street prices observed mid-2026; treat them as anchors, not
quotes.

Remember the [Stage 1](/journey/first-customer/) discipline this page serves:
**pick one access platform and stay on it.** This page helps you pick once.

## The value workhorses (5 GHz PtMP)

Where most WISPs start, and where the gear economics in
[Stage 0](/journey/foundations/) come from:

- **Ubiquiti** — the airMAX → LTU → Wave lineage. Massive ecosystem, lowest
  CPE prices (the LiteBeam-class workhorse runs
  [$65](https://store.ui.com/us/en/products/litebeam-5ac)), management via
  UISP (see [software](/reference/software/)). Current-generation Wave PtMP
  APs run around [$499](https://www.hostifi.com/blog/ubiquiti-puts-the-first-wave-mlo-ap-on-sale).
  The default choice for bootstrap operators on price and learning resources.
- **Cambium Networks ePMP** — the other half of the small-WISP duopoly.
  Stronger interference tolerance by reputation (GPS sync is standard
  practice), APs around [$349 on recurring promos](https://blog.streakwave.com/act-fast-epmp-3000-now-available-for-349-or-less)
  plus sector antenna, Force-series subscriber modules ~$100–160. Cambium's
  [new-WISP starter kits](https://www.winncom.com/en/promotions/324) bundle
  an AP with a dozen subscriber modules and include engineering consultation
  hours — for a first site, the included engineer time is worth more than the
  discount.
- **Mimosa (Radisys)** — the third name you'll meet (A5/B5 series); a smaller
  ecosystem than the two above. Fine gear; pick it deliberately, not by
  default.

## 6 GHz standard-power (the clean-spectrum play)

The [spectrum timing advantage](/reference/spectrum-us/) has shipping gear —
with a cost nuance the hype skips:

- **Cambium ePMP 4600** — 6 GHz AP, 4×4 MU-MIMO, around
  [$1,499](https://www.ispsupplies.com/Cambium-Networks-C068940A122B); paired
  **Force 4600** subscriber modules around
  [$569](https://www.ispsupplies.com/Cambium-Networks-C068940C122C).
- **The honest math:** 6 GHz subscriber gear currently costs **5–8× the 5 GHz
  workhorse CPE**. Clean spectrum at the AP, but the per-customer connect
  cost from [Stage 0](/journey/foundations/) roughly doubles. The calculus
  favors 6 GHz where 5 GHz noise is genuinely bad or where you're selling
  premium tiers — not automatically everywhere. Expect this gap to narrow as
  volumes grow; that's exactly the kind of claim this page's review date
  exists for.

## 60 GHz mmWave (backhaul and dense clusters)

- **Ubiquiti airFiber 60 / Wave** — the budget standard;
  [$299 per radio](https://store.ui.com/us/en/products/af-60-lr) for the
  long-range model (~$600 a link).
- **Cambium cnWave** — the same class with mesh/distribution options.

## Premium / NLoS class

- **Tarana G1** — a different animal: base-node/remote-node architecture
  engineered for **non-line-of-sight** and interference-dense environments,
  multi-gigabit per sector, sold through
  [distributors](https://www.ispsupplies.com/brands/tarana) with quote-based
  pricing well above the value class. This is funded-operator gear — the
  platform you graduate to when subscriber density justifies it, not where a
  bootstrap starts. Its existence matters at Stage 0 anyway: terrain that's
  impossible for the value class may be merely expensive, not impossible.

## Adjacent ecosystems (know they exist)

- **CBRS/LTE-based platforms** (e.g., Baicells) — a separate cellular-derived
  ecosystem for operators committed to [CBRS](/reference/spectrum-us/);
  different skills, different economics, deliberately out of scope for this
  handbook's bootstrap path.
- **Licensed PtP microwave** (11 GHz and up) — backhaul-only; see the
  [spectrum reference](/reference/spectrum-us/) for when exclusivity earns
  its cost.
