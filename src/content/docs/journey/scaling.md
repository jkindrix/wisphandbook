---
title: "Stage 3: Scaling"
description: Network redesign, real routing, licensed spectrum, towers, and your first hire — growing past what one person can hold in their head.
sidebar:
  order: 4
stage: scaling
prerequisites: [journey/first-ten]
lastReviewed: 2026-06-06
depth: overview
jurisdiction: universal
equipmentCited: true
---

Every section in this stage describes the same transition wearing different
clothes: things that worked because the network was small — and because the
network was *you* — being rebuilt so they work without those conditions. This
is the stage where a WISP becomes infrastructure.

## Redesigning the network you outgrew

The network that got you to fifty customers is almost certainly a single
flat, bridged network: every device in one broadcast domain, every failure
visible everywhere, every diagnosis a guess. It worked because it was small.
It stops working — suddenly, and usually during a growth spurt — because
broadcast traffic, spanning-tree surprises, and single points of failure all
scale *against* you.

The redesign, at overview depth:

- **Route, don't bridge.** Each tower site becomes its own routed segment
  with its own subnets. A failure at one site stays at one site, and
  troubleshooting starts with "which segment" instead of "which of my 200
  devices."
- **Run a routing protocol** (OSPF is the standard small-ISP choice) so the
  network learns its own topology and reroutes around failures — which only
  pays off if you also build…
- **Redundant paths.** A second backhaul route turns "tower offline, drive
  now" into "tower degraded, fix tomorrow." Rings beat trees; even one
  strategic extra link changes your nights and weekends.
- **Separate management from customers.** Your radios' management interfaces
  on their own protected network, reachable even when customer traffic is
  broken — you cannot fix what you can't reach.

If this paragraph feels early, skip it and bookmark it: the right time to
re-architect is *before* the outage that proves the point.

## Your own IP space and real routing

Up to now you've used whatever IP addresses your upstream lent you. Growth
makes that a liability: change upstream, renumber everything; add a second
upstream for redundancy, impossible. The fix is becoming a real network in
the internet's eyes:

- **An ASN** — your network's identity for [BGP](/reference/glossary/#network)
  routing — plus your own address blocks, from your regional registry. The
  cost is modest: in North America (ARIN), small-operator annual fees run a
  few hundred dollars a year (the smallest tiers are under $300/yr as of
  2026, rising with holdings).
- **IPv4 is the expensive part.** New blocks essentially don't exist; you'll
  buy or lease on the transfer market, and most growing WISPs stretch what
  they have with [CGNAT](/reference/glossary/#network). Budget for this
  reality rather than resenting it.
- **Deploy IPv6 from the redesign onward.** It's free by comparison (registry
  fee waivers for small holders currently sweeten it further), it relieves
  CGNAT pressure, and retrofitting later costs more than doing it now.
- **Multihoming** — a second upstream with BGP — is the end-state that makes
  your network survive any single provider's bad day. It's also the moment
  the Stage 1 phrase "you are an ISP" becomes literally, structurally true.

## Backhaul that deserves the name

Your access layer can tolerate a noisy evening. The links that carry whole
towers cannot. As sites multiply:

- **Buy fiber to a site whenever the math works** — a fiber-fed tower is a
  different class of asset than a radio-fed one.
- **Upgrade critical wireless hops to engineered links**: higher-band,
  higher-capacity radios with real fade-margin engineering — and for the hops
  your business depends on, consider **licensed point-to-point spectrum**
  (Part 101 in the US): an exclusive, interference-protected channel,
  coordinated and licensed per link, with gear and licensing costs meaningfully
  above unlicensed — justified exactly where an outage costs more than the
  difference.
- **Capacity-plan top-down**: every AP's oversubscribed peak rolls up into the
  backhaul; every backhaul rolls up into your upstream. The Stage 2 arithmetic
  doesn't go away — it grows layers.

## Towers: lease first, build when you must

The Stage 1 advice — use existing structures — still holds. At scale, you'll
exhaust the good ones, and the options become commercial tower leases or your
own steel:

- **Leasing commercial tower space** commonly runs from a few hundred dollars
  a month in rural markets to $1,000–2,000+ where demand is high. Watch the
  same lease traps flagged in Stage 1, plus loading studies and insurance
  requirements that come with real towers.
- **Building** is a project, not a purchase: land, zoning and permitting
  (often the hardest part, and intensely local), engineering, foundations,
  and steel. A guyed tower costs substantially less in material than a
  self-supporting one of the same height — commonly cited at 30–50% less —
  but eats far more land. For context, full carrier-class tower builds
  average around $250,000; WISP-class structures come in well under that,
  but "well under a quarter million" is still a decision you make with a
  spreadsheet, not enthusiasm.
- The build-vs-lease crossover is usually **multi-year**: build where you're
  confident of the site's permanence, lease where you're still proving the
  market.

## Spectrum, revisited

The unlicensed posture from [Stage 1](/journey/first-customer/) carried you
here. At scale, interference protection starts being worth money: licensed
PtP for critical backhaul (above), priority tiers in shared bands (in the US,
CBRS PALs), and — still — the 6 GHz standard-power opportunity covered in
[US Spectrum for Fixed Wireless](/reference/spectrum-us/). The strategic
rule: **pay for exclusivity where an outage is expensive; stay unlicensed
where it's cheap.**

## Your first hire

The signals that it's time: installs booked more than two weeks out, support
response slipping, and — the honest one — the realization that you haven't
taken a full day off in a quarter. What operators generally hire first is an
**installer/field tech**, because installs are the most teachable,
checklist-able part of the work — and because the Stage 2 install checklist
you wrote is now a training document.

Three overview-depth realities:

- **You're not hiring help, you're hiring process.** The hire forces the
  documentation, spares organization, and scheduling discipline you've been
  carrying in your head. That's most of the value.
- **Classify employment properly** (employee vs. contractor rules are strict
  and enforcement is real in most jurisdictions) and get workers'
  compensation sorted *before* someone else is on a roof for you — your
  Stage 1 insurance conversation, round two.
- **The bus factor is the real deliverable.** After the first hire plus the
  documentation it forces, the network should survive you taking two weeks
  off. If it can't, that's the actual to-do list.

## Trucks, inventory, and field operations

Brief, because it's logistics rather than mystery: a dedicated (used) work
vehicle stocked as a rolling install kit; spares for every deployed radio
model — the one-platform discipline from Stage 1 is what keeps this
affordable; and inventory tracked in the same system as customers and
infrastructure, because "do we have a spare sector?" should be a lookup, not
an archaeology dig.

## What scaling proves

Stage 3 ends when the network is no longer you: routed and redundant enough
to fail partially instead of totally, addressed and multihomed enough to
outlive any single supplier, staffed and documented enough to run while you
sleep. What it does *while* you sleep — monitoring, outage response, churn,
upgrade cycles, and the long economics of staying alive — is
[Stage 4: Operating](/journey/operating/).
