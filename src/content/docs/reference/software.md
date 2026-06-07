---
title: "Billing & Management Software"
description: The platforms that run a WISP's business side — billing, CRM, provisioning, and monitoring — with names and current pricing.
sidebar:
  order: 21
lastReviewed: 2026-06-07
depth: overview
jurisdiction: universal
equipmentCited: true
---

The journey pages say "billing that runs itself" and "a single source of
truth" without naming names. This page names them. Pricing observed mid-2026;
verify with vendors — and note that in this category, the *migration cost*
of changing platforms later dwarfs any subscription price difference, which
is why [Stage 2](/journey/first-ten/) tells you to pick deliberately.

## Where bootstrap operators start (free tiers)

- **UISP** — Ubiquiti's ISP management platform: CRM, billing, network
  monitoring, and device provisioning, **free**. The natural default if your
  access gear is Ubiquiti (one pane for radios and customers); usable
  regardless. The catch is the obvious one: it manages Ubiquiti devices best,
  which quietly deepens platform lock-in — fine if you've embraced the
  one-platform discipline anyway.
- **ISPBox** — entry platform, **free up to ~20 subscribers**; customer/
  ticket management, basic billing, RADIUS. A reasonable way to prove your
  process before paying anyone.

## Where growing operators land (per-subscriber pricing)

- **Splynx** — the common step-up: billing, CRM, inventory, scheduling,
  TR-069 device auto-provisioning, 17+ payment gateways. Starts around
  [€0.60/subscriber/month](https://www.capterra.co.uk/software/220185/splynx),
  declining with scale. At 100 subscribers that's ~€60/month — trivial
  against the admin time it replaces.
- **Sonar** — the premium tier:
  [$1.25/subscriber/month with a **$500/month minimum**](https://www.itqlick.com/sonar/pricing).
  Read that minimum honestly: below ~400 subscribers you're paying
  enterprise rates for headroom you don't need yet. It's a Stage 3–4
  platform, not a Stage 1 purchase.
- **Powercode, Visp, and others** — the long tail of WISP-specific platforms.
  They have happy users; evaluate against the same checklist (recurring
  card/ACH billing, automated suspension, device provisioning, inventory)
  rather than feature-war marketing — much published comparison content is
  vendor-authored.

## The adjacent layer: QoE and monitoring

- **Preseem** — per-subscriber QoE measurement and traffic shaping; the
  source of the [oversubscription benchmarks](/reference/glossary/#network)
  cited in Stage 2. A scale-stage tool.
- **Monitoring proper** — your vendor's management system (UISP, cnMaestro)
  covers layer one; the open-source standards (Zabbix, LibreNMS) cover
  everything with an IP address, free, at the cost of setup time. Stage 4's
  three-layer monitoring framing applies regardless of tool.

## The selection rule

Pick the cheapest thing that does **recurring automatic billing + automated
suspension + customer/infrastructure records in one place**, confirm it can
*export your data*, and move on. Every platform above clears the bar. The
operators who get hurt are the ones who chose nothing and ran on spreadsheets
until customer fifty.
