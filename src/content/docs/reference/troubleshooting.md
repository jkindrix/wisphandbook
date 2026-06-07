---
title: "Troubleshooting Field Guide"
description: Symptom-first diagnosis for fixed wireless — one customer, one sector, one site, or everything.
sidebar:
  order: 30
lastReviewed: 2026-06-07
depth: overview
jurisdiction: universal
---

Troubleshooting a WISP is not a list of fixes — it's one repeated question:
**how big is the blast radius?** The answer tells you which layer broke,
because each scope maps to one slice of the network. Everything below hangs
off that triage. (This page is deliberately model-free; it describes the
craft, your vendor's docs describe the buttons.)

| Who's affected? | Suspect layer |
| --- | --- |
| One customer | Their WiFi, their CPE, their cable |
| Several customers, one sector | The AP: interference, saturation, failure |
| Everyone on one site | Power first, then backhaul |
| Everyone everywhere | Upstream, core routing, or your own change |

Three process rules before any of it, all learned expensively by operators:

1. **Check what changed.** Most outages follow a change — yours, a vendor
   firmware push, or the weather. Your billing/infrastructure records and
   maintenance notes (Stage 2) answer "what changed,
   for whom" in seconds.
2. **Change one thing at a time, and write it down.** Two simultaneous fixes
   means you don't know which one worked — or which one broke something else.
3. **Trust baselines over vibes.** "Signal seems low" means nothing;
   "8 dB below the install-day number in the customer record" is a diagnosis.
   This is why Stage 1 made you document installs.

## One customer

The Stage 2 insight does most of the work: **most
single-customer complaints are WiFi, not your network.** The sequence:

1. **Is their radio reachable from your side?** If yes, your network
   delivered; the problem is inside the house. Remote-check their router
   (you own it — that was the point), and have them test *wired* if speeds
   are the complaint: wired-fast-WiFi-slow ends the network conversation.
2. **Compare signal to the install-day baseline.** A link that lost real
   margin since install has a physical story: new foliage between seasons
   (Stage 1's winter-survey trap), a new
   obstruction, a shifted mount, or water where it shouldn't be.
3. **Suspect the cable and connectors before the radio.** Water ingress at
   connectors and failing PoE injectors are
   [the most common hardware failure points](https://lingo-networks.com/fixedwirelesstroubleshooting)
   in fixed wireless — corrosion at the pins degrades both power and data.
   Drip loops and sealed connectors at install time were the vaccine; the
   symptom now is flapping, power cycling, or errors on the customer's port.
4. **Reboot and firmware are legitimate first moves** — inelegant, effective,
   and remote. If a device needs them *repeatedly*, that's a replacement
   ticket, not a routine.

## Several customers, one sector

Blast radius "everyone aimed at the same AP" means the AP or its channel:

- **Saturation or interference?** Check the time pattern. Slow *every evening
  at the same hour* is capacity — revisit the Stage 2 oversubscription
  arithmetic. Slow or erratic at
  *random times* with a rising noise floor is interference — in unlicensed
  spectrum, someone else's new transmitter is allowed to exist, and your
  noise-floor baseline tells you when it arrived.
- **The interference response** is a channel move — survey first, announce a
  maintenance window if customers will blip, and record old/new channel and
  the reason. Chronic interference on a sector is a strategic signal: the
  [cleaner-spectrum option](/reference/spectrum-us/) exists for exactly this.
- **GPS-sync class problems** (sectors interfering with each other on shared
  towers) and a failed AP round out the list — the latter is why
  Stage 3's spares discipline names a spare sector.

## One whole site

Stage 4's monitoring line is the diagnosis order:
**"tower down" is very often power, not radio.**

1. **Power first**: UPS state and battery runtime, PoE status, breaker,
   landlord's electrical work nobody told you about. If your site-health
   monitoring is wired, you already know — that's why it exists.
2. **Backhaul second**: weather across the path is the classic —
   [rain fade](https://lingo-networks.com/fixedwirelesstroubleshooting) on
   high-band links during heavy precipitation is physics, not failure. A
   link that dies in every storm was engineered without enough fade margin;
   the fix is the link budget, not the reboot.
3. **Routing last**: if power and backhaul check out, it's the site's router
   or your redundancy *not* doing its job — which, per
   Stage 3, is information about your topology, not
   just an incident.

## Everything, everywhere

Whole-network outages have a short suspect list: your upstream, your core
router, or **a change you made**. Check your own recent changes first (rule
1), then the upstream's status page and your edge interface. If a single
upstream failure can take you fully dark, Stage 3's
multihoming section was about today.

## When to roll the truck

Remote diagnosis is cheaper than driving — that's most of this page — but
two things justify wheels immediately: **safety-relevant findings** (storm
damage, electrical faults, anything structural) and **a customer-trust
moment** (a new customer's first bad week deserves a visit, not a ticket).
Everything else gets scheduled, batched with the door-hanging round from
Stage 2, because every truck roll should do more than
one job.
