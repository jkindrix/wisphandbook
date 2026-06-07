---
title: "Stage 0: Foundations"
description: Should you start a WISP at all? Feasibility, economics, and the honest no-go cases.
sidebar:
  order: 1
stage: foundations
lastReviewed: 2026-06-07
depth: overview
jurisdiction: universal
equipmentCited: true
---

Before you buy a single radio, you owe yourself an honest answer to one
question: **does a WISP make sense here, now, for you?** This stage exists to
help you answer it — including the cases where the answer is no.

Everything below is overview-depth: enough to make the go/no-go decision and
know what you're walking into. Later stages go deeper on each piece.

## What a WISP actually is

A [WISP](/reference/glossary/#rf-and-wireless) — wireless internet service
provider — delivers internet over fixed radio links instead of wires. The shape
of the business is simple to describe:

1. You buy a large internet connection where fiber is available (your
   **upstream**).
2. You carry it to a high place — a tower, grain silo, water tank, or tall
   rooftop — over fiber or a point-to-point radio link (**backhaul**).
3. Sector antennas at that high site broadcast to small radios mounted on your
   customers' roofs (**CPE**), each aimed back at your site with clear line of
   sight.
4. Customers pay you monthly. You keep the network alive.

That's the whole machine. Every stage of this handbook is just that machine
getting bigger and more reliable.

What it is *economically*: a capital-intensive local infrastructure business
with recurring revenue. You spend money up front on radios, mounting, and
install labor; you earn it back over years of $50–100/month subscriptions. The
business lives or dies on three numbers: how many homes can see your sites
(**coverage**), what fraction sign up (**take rate**), and how long they stay
(**churn**).

## The honest economics

A rough sketch of the unit math, with mid-2026 ballpark figures — validate
every number against your own market before trusting it:

- **Revenue per customer:** $50–100/month for typical rural service tiers.
- **Cost to add a customer:** roughly $300–700 all-in — an outdoor CPE radio
  (the workhorse class runs $50–110 street price), a router, mounting
  hardware, and the install labor (your time, at first). Industry-wide, the
  average cost to connect a fixed-wireless customer is
  [**under $500** — against roughly $4,500 to connect a fiber subscriber](https://www.nexttv.com/blog/fixed-wireless-101-what-rivals-need-to-know),
  which is the whole reason WISPs exist. At those numbers, each customer pays back their
  connection cost in well under a year.
- **Fixed monthly costs that exist whether you have 1 customer or 100:**
  upstream bandwidth (commonly $500–1,500/month for a dedicated gigabit-class
  connection, more in remote areas), site rent, insurance, software, fuel.
- **The implication:** there's a customer count below which you lose money
  every month, *forever*. Run the arithmetic for your own costs — fixed
  monthly costs divided by per-customer margin — and you'll usually land
  somewhere between 15 and 50 customers to break even on a lean single-site
  start. Experienced operators use a blunter planning floor: **a site that
  can't realistically reach ~50 customers isn't worth building.** That
  spreadsheet is the single most important document you will ever create.

When this works: clustered demand (a town, a lake community, a valley of
farms) that existing providers serve badly or not at all, with a defensible
cost or quality advantage, run by someone who can do most of the early work
themselves.

When it doesn't: thin, scattered demand where every customer needs their own
expensive solution; markets where customers are merely *annoyed* with an
incumbent rather than unserved; and anywhere you'd be the third-best option on
day one.

## Know your competition — the part that changed

Most older WISP guides were written when the rural alternative was dial-up
grade DSL or nothing. That world is gone. As of mid-2026, in the United
States, you should assume **three serious competitors exist nearly
everywhere**:

1. **LEO satellite.** Starlink is an option at essentially every address, with
   [median speeds around 100 Mbps](https://broadbandbreakfast.com/wisp-speeds-rising-but-so-are-starlinks-ookla-says/)
   and aggressive pricing — as of mid-2026, US residential plans
   [start around $55/month](https://www.starlink.com/residential), with
   regional "Lite" tiers and promotions lower still. It has no line-of-sight
   requirement, no install dependence on your tower, and a national marketing
   machine.
2. **Carrier fixed wireless.** T-Mobile, Verizon, and AT&T sell home internet
   off their cellular networks at many or most addresses, often at the lowest
   total price in the market. Where they have capacity, they are brutal
   price competition.
3. **Subsidized fiber.** The
   [$42 billion BEAD program](https://www.ntia.gov/funding-programs/high-speed-internet-programs/broadband-equity-access-and-deployment-bead-program)
   finished its planning phase and construction begins in earnest in 2026. Fiber makes up the large
   majority of planned builds. If a funded fiber buildout is coming to your
   target area in the next few years, you will be competing against a
   service that is better than yours, built with someone else's money.
   Check your state broadband office's published award maps — this is
   knowable, not a gamble.

This is not a reason to quit before starting. Roughly 2,000 WISPs serve
millions of Americans, their speeds keep climbing, and a well-run local
operator beats all three competitors on the things they're structurally bad
at: install quality, honest support from a human who lives nearby, low
latency, and service tuned to local terrain. But you must be honest about
which addresses you'd win and why. "Starlink exists" no longer disqualifies a
WISP; "Starlink exists and I have no advantage over it" does.

## Evaluating your area

Four things determine whether a place can support a new WISP. All four are
researchable from your desk before you spend anything:

- **Demand density.** How many homes/businesses are in radio range of
  plausible high sites? The long-standing
  [practitioner rule of thumb](https://startyourownisp.com/posts/location-location-location/):
  you want **~500 visible rooftops within 3–5 miles of a site**, because a
  good-but-realistic take rate is about **10%** — which delivers the ~50
  customers that make a site worth building. A site that can only see 100
  rooftops is a hobby, not a business.
- **Terrain and foliage.** Fixed wireless needs [line of
  sight](/reference/glossary/#rf-and-wireless). Flat and open is easy. Rolling
  hills create shadows; dense tree cover at customer height is the silent
  killer of WISP economics. Study elevation profiles before you fall in love
  with an area.
- **Existing service quality.** Drive it. Talk to people. What do they
  actually have, what do they pay, and what do they complain about?
  Public coverage maps overstate reality; complaints in local Facebook groups
  understate nothing. And start an **interest list** now — names you collect
  while researching are both demand evidence for this stage's math and your
  install queue for [Stage 1](/journey/first-customer/).
- **High places and fiber.** Are there usable elevated sites (existing towers,
  silos, water tanks, buildings) in the right spots — and can you get fiber
  or a clean backhaul path to at least one of them?

## Finding upstream

Your whole network hangs off one purchased connection, so this is a
make-or-break dependency: **where is the nearest fiber you can buy, and what
does it cost?**

- What you're buying is *dedicated* internet access (DIA) or transport to an
  internet exchange — not a residential connection with a "no resale" clause
  in its terms.
- As of mid-2026, gigabit-class DIA commonly runs
  [$500–1,500/month](https://lightyear.ai/resources/dedicated-internet-access-dia-ultimate-pricing-guide)
  at well-served locations, with rural locations often paying a 25–50% premium —
  and if fiber construction is needed to reach your site, the build cost can
  be thousands to tens of thousands up front.
- The distance between "where fiber is cheap" and "where your customers are"
  is what your backhaul links must bridge. Every mile of that gap adds cost
  and failure modes.

If you cannot find a viable upstream within backhaul reach of your target
area, you do not have a WISP — full stop. Settle this before anything else.

## What it costs before customer #1

Ballpark, mid-2026, for a lean single-site start (one rented high site, one
sector, a handful of customers): **$15,000–50,000**. Treat this as the
roughest number on this page — it varies enormously with how much you can do
yourself and what your site costs. It spreads across:

- First high-site equipment: sector antenna/AP, backhaul radios, mounting,
  power — a few thousand dollars with current unlicensed-band gear
- Upstream installation and first months of service
- Site lease (anywhere from free-with-a-handshake to hundreds per month)
- Initial CPE stock, tools, safety gear, ladders, test equipment
- Business formation, insurance (not optional — you're putting people on
  roofs), accounting basics
- **A cash reserve for 6+ months of operating costs** — revenue ramps slowly
  and the fixed costs start on day one

Plus the cost nobody budgets: **your time**. The first year of a bootstrap
WISP is a second job — site hunting, lease negotiation, learning RF, climbing
ladders, and support calls at dinner time.

## The no-go cases

Stop — or pick a different area — if any of these is true:

- **No viable upstream.** No purchasable fiber within economic backhaul reach.
  Nothing else matters until this is solved.
- **A funded fiber overbuild is imminent.** Your state's BEAD awards show
  fiber coming to your exact target addresses within ~2 years.
- **Heavy tree cover at rooftop height** across most of the area, with no
  elevation advantage to shoot over it.
- **Demand is too thin or too scattered** to ever reach your break-even
  customer count from a realistic number of sites.
- **You'd win only on price** against Starlink and carrier FWA, with no
  quality, latency, or service advantage — a price war against competitors
  with national scale is unwinnable.
- **You can't float the first year.** If the startup budget plus the opex
  reserve isn't survivable when revenue comes slower than planned (it will),
  the business dies in month eight — not because the idea was wrong, but
  because the runway was.

None of these makes you wrong to want this. They make *this area, this plan,
or this moment* wrong. Plenty of working WISPs exist because their founder's
first answer was "not here" — and their second answer was better.

## Where this goes next

If your area passes — clustered demand, usable high sites, reachable fiber,
a real advantage over the big three competitors, and survivable runway —
you're ready for [Stage 1: First Customer](/journey/first-customer/): the
RF fundamentals you can't skip, your first site, your first link, and the
moment someone actually pays you.
