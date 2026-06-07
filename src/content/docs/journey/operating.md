---
title: "Stage 4: Operating"
description: Monitoring, outages, churn, refresh cycles, and the long game — running the network as a mature business.
sidebar:
  order: 5
stage: operating
prerequisites: [journey/scaling]
lastReviewed: 2026-06-07
depth: overview
jurisdiction: universal
equipmentCited: true
---

Stages 0–3 had finish lines. Stage 4 doesn't — operating is the permanent
condition of the business you built. The work changes character: less
building, more keeping; fewer heroics, more systems. The operators who thrive
here are the ones who treat boring as an achievement.

## Monitoring: knowing before your customers do

The operating-stage network earns trust in one specific way: **you call them
before they call you.** That requires monitoring in three layers, each
answering a different question:

1. **Up/down — including the site itself.** Is every radio, router, and power
   system reachable right now? Any monitoring platform (the open-source
   standards, your vendor's management system, or both) does the network half
   well; the half operators under-build is **site health**: UPS battery
   voltage and runtime, PoE status, cabinet temperature, door/tamper, power
   events. In WISP operations, "tower down" is very often *power*, not radio.
2. **Performance** — not "is it up" but "is it good": signal and SNR,
   retransmits, AP airtime utilization, backhaul headroom, latency and loss
   under load. Degradation is the early warning that precedes almost every
   "sudden" failure; a link that's been slowly losing margin for three weeks
   was never actually a surprise.
3. **Trends** — the monthly view: which APs are approaching the capacity
   rules from [Stage 2](/journey/first-ten/), which links eat their fade
   margin every storm season, where the next sector split is coming due.
   This layer is where monitoring stops being operations and becomes
   planning.

Two disciplines matter more than tool choice: **alerts must be actionable**
(an alert channel that cries wolf trains you to ignore the real one — and
that includes dependency suppression: when a backhaul dies, you want one
page, not eighty pages for every CPE behind it), and **someone is always on
call** — formally, with a schedule, even when "someone" is still mostly you.
Informal on-call is how operators burn out.

## Outages and maintenance

Outages stop being emergencies and become procedures:

- **Runbooks for the predictable failures** — power loss at a site, backhaul
  down, upstream flap. Written when calm, followed when not. Your Stage 2
  install documentation and Stage 3 network docs are half the runbook
  already.
- **Maintenance windows, announced and honored.** Customers forgive planned
  3 a.m. work they were told about; they remember unannounced Tuesday-evening
  downtime forever.
- **A status channel** — even a simple status page or text list. During an
  outage, communication does more for retention than the repair speed does.
- **Post-incident notes**, even three sentences. The second occurrence of any
  outage should be faster than the first; that only happens if the first one
  left a trail.

## Churn, ARPU, and the economics of staying alive

The numbers that govern the long game, with what the industry data supports
as of mid-2026:

- **Churn is the WISP superpower.** US broadband overall churns
  [around 1.3% *monthly*](https://www.spglobal.com/market-intelligence/en/news-insights/research/2026/02/us-broadband-monthly-churn-hits-one-point-three-percent);
  [operator surveys](https://www.nexttv.com/blog/fixed-wireless-101-what-rivals-need-to-know)
  consistently report fixed-wireless churn far lower (many operators report
  figures under 1% — survey methodology varies, so treat exact comparisons
  cautiously). The structural reasons: rural
  customers have fewer alternatives, and good local service is genuinely
  sticky. Every retention-friendly habit in this handbook — honest installs,
  proactive monitoring, announced maintenance — is why.
- **Residential ARPU runs $50+** for most operators and has been rising; the
  underappreciated lever is **commercial and institutional customers, where
  ARPU typically exceeds $500/month**. A handful of business circuits,
  schools, or municipal contracts can carry the revenue of a hundred
  residential subscribers — Stage 4 operators actively cultivate them.
- **Upgrades beat acquisition.** Selling a faster tier to an existing happy
  customer costs almost nothing; acquiring a new customer costs hundreds
  (Stage 0's math never went away). Capacity headroom — built per Stage 2's
  rules — is what makes the upgrade tier sellable.

## Equipment refresh: the cost that looks optional

Radios don't last forever, and — more binding in practice — **platforms**
don't: vendors end-of-life product lines, spares dry up, and firmware stops.
Plan on roughly a **5–7 year refresh cycle** for access gear (a planning
convention, not a law — terrain, climate, and platform luck all move it) and
budget it as a standing per-subscriber line item rather than a future
surprise. Three Stage 4 habits:

- **Refresh by sector, not by failure** — replacing a platform generation
  opportunistically during truck rolls beats replacing it during outages.
- **Watch vendor roadmaps** the way you watch weather: an end-of-sale
  announcement on your access platform starts a multi-year migration clock.
- **The one-platform discipline from Stage 1 pays its final dividend here**:
  one migration at a time instead of four.

## Regulatory life at scale

The obligations from [US Regulatory Filings](/reference/filings-us/) continue
on their semiannual rhythm, and accuracy matters more now — your filed
footprint is what subsidy programs use to decide whether your territory is
"served," i.e., whether someone gets paid to overbuild you. Two scale-stage
cautions: **adding voice service changes your regulatory class
substantially** (universal-service contributions and related filings — get
professional advice before launching it), and customer-data protection
obligations grow with subscriber count. Boring, semiannual, and
non-negotiable.

## Expand, consolidate, or sell

Eventually every operator faces the strategic fork, usually more than once:

- **Expansion** is Stage 0 again, somewhere else: each new area gets the same
  feasibility math, the same competition check, the same no-go honesty. The
  discipline that said "not here" before you had customers must survive
  having money.
- **Consolidation** — deepening instead of widening — is underrated: more
  density on existing sites means more revenue over the same fixed costs,
  and it's the cheapest growth available. Sprawl kills more WISPs than
  competition does.
- **Selling** is a real and respectable exit.
  [Rules of thumb in the market](https://dealstream.com/industry-guides/telecom-businesses/rules-of-thumb)
  put small-ISP value in the **hundreds of dollars per subscriber** (commonly
  cited at $300–800 for fixed broadband customers), with multiples rising
  for clean books, low churn, documented networks, and owned infrastructure —
  in other words, **everything this handbook told you to do is also the
  due-diligence checklist.** Larger operators trade on EBITDA multiples,
  where private broadband operators have commanded strong premiums in recent
  years. A network that runs without you is worth dramatically more than a
  hero-dependent one — the bus factor from Stage 3 turns out to be a
  valuation line item.

## The end of the journey, which isn't one

If you've walked all five stages: you evaluated honestly, served one
customer, became a process, became infrastructure, and became an operator.
What remains is the long, quiet compounding of a well-run local utility — and
the deepening of this handbook itself, which (like your network) is
maintained or it is dead. Found something outdated or wrong along your own
journey? Every page has a report link. That's not a footer formality — it's
how this resource stays alive for the operator after you.
