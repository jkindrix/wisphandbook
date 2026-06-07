---
title: "Stage 2: First Ten"
description: Billing, support, repeatable installs, and capacity — when it stops being a hobby.
sidebar:
  order: 3
stage: first-ten
prerequisites: [journey/first-customer]
lastReviewed: 2026-06-07
depth: overview
jurisdiction: universal
equipmentCited: true
---

Customer one proved the machine works. Customers two through ten prove
something harder: that *you* can become a process instead of a hero. Every
problem in this stage has the same root — things that were fine as one-off
efforts become unsustainable as habits — and the same fix: standardize early,
while standardizing is still cheap.

## Repeatable installs

Your first install took half a day. Your tenth should take ninety minutes.
The difference isn't experience — it's standardization. What operators
converge on, almost universally:

- **One install kit, restocked after every job.** Same CPE model, same router,
  same mounts, same surge protector, same sealant, same crimper. The van (or
  trunk) is a tiny warehouse with a known inventory — never improvising from
  whatever's left over.
- **A written install checklist** — survey confirmation, mount, ground, aim,
  signal thresholds that must be met before you leave ("walk away" numbers),
  speed test, photos, customer walkthrough. Written down even though you're
  the only installer, because in Stage 3 you'll hand it to your first hire,
  and because checklists catch the step you skip when it's cold and getting
  dark.
- **Refuse marginal installs.** The customer whose signal barely clears your
  threshold today is the support call that never ends. "I can't give you
  service worth paying for" is a complete sentence, and saying it protects
  both of you.

## Billing and customer management

You chose a billing platform in [Stage 1](/journey/first-customer/). Stage 2
is where you make it the **single source of truth** — every customer, every
radio, every payment, every ticket lives there, not in your head, your texts,
or a spreadsheet named `customers_final_v3`.

The habits that matter at ten customers:

- **Autopay as the default**, offered at signup, not as a recovery measure.
  Chasing payments is the most demoralizing recurring task in a small ISP.
- **Enforce your non-payment policy from the start** — the automated
  suspension you configured is kinder than the awkward personal exception
  that becomes precedent.
- **Record infrastructure in the same system**: which AP serves which
  customer, what channel, what signal at install. When something breaks, the
  question is always "what changed, for whom" — answerable only if the data
  exists.

## Support without drowning

At ten customers, support is where the hobby/business line actually gets
drawn. The structural insight, well-supported by industry practice: **most
support calls are not about your network** — they're about the customer's
WiFi. Three defenses, in order of leverage:

1. **Own the router.** Provide and manage the customer's router as part of
   the service. It costs you hardware margin and buys you *visibility to the
   wall jack* — remote diagnostics, remote firmware, remote "is it actually
   your network" answers. Remote device management is the single biggest
   truck-roll reducer available to a small operator.
2. **Monitor proactively.** Your management platform should alert you to a
   degrading link before the customer notices. "We saw your signal drop and
   already fixed it" is the cheapest marketing you will ever do.
3. **Set expectations in writing.** Service hours, response times, what's
   included. At this scale you *will* take dinner-time calls — the agreement
   determines whether that's a favor or an obligation.

And the install discipline pays off here: the tech who documented signal
numbers and photos at install time troubleshoots in minutes; the one who
didn't, drives. When something does break, the
[troubleshooting field guide](/reference/troubleshooting/) is the
symptom-first companion to this section.

## The referral machine

Stage 1 found customers by physics; Stage 2 grows by reputation. Word of
mouth isn't a thing that happens to you — it's a system you build, and at
this scale it outperforms any paid channel:

- **Every install is a marketing event.** The truck (or your visibly busy
  ladder) on a street is the ad;
  [operators report](https://preseem.com/2019/05/wisp-marketing-tips/)
  door-hanging the rest of the street while there converts the curiosity
  you've already generated. A yard sign at the new customer's place — asked
  for, never assumed — keeps working after you leave.
- **Make referrals formal and two-sided.** The
  [classic mechanic](https://startyourownisp.com/posts/marketing/) is a free
  month per referred customer; broadband programs more broadly run **$20–100
  bill credits, rewarding both sides**. Configure it in your billing
  platform so it's one click, not a favor someone has to remember.
- **Be part of the local fabric.** Industry experience is blunt about this:
  community presence — the school sponsorship, the county fair booth, the
  owner who answers the phone — [outperforms promotional pricing](https://maccnet.com/how-small-isps-can-compete-on-customer-experience-and-win/)
  and lowers churn at the same time. The practitioner rule of thumb: keep
  answering the phone yourself up to your first ~100 customers; every call
  is market research you can't buy.
- **Commercial accounts respond to outreach, not ads.** A first business,
  church, or municipal customer usually comes from a conversation at a local
  business event — worth knowing now, because commercial revenue becomes a
  major lever in [Stage 4](/journey/operating/).

The quiet engine under all of it is the support quality from the previous
section: "they fixed it before I noticed" is the sentence that gets repeated
at kitchen tables — and kitchen tables are where rural internet decisions are
made.

## Capacity: when one AP isn't enough

The question every growing operator asks — "how many customers fit on one
access point?" — has a real answer, and it's about arithmetic, not vendor
ratings. [Industry analysis of fixed-wireless networks](https://preseem.com/2020/03/wisp-access-point-oversubscription-ratio/)
puts a healthy **oversubscription ratio around 5:1** — selling five times the AP's real
capacity across subscribers, on the (correct) bet that they don't all peak
simultaneously. Concretely: a current mid-class sector delivering ~200 Mbps
of usable capacity supports roughly **40 subscribers on a 25 Mbps plan at
5:1** — fewer on faster plans, and pushing toward 8:1 buys subscriber count
at the price of peak-hour experience.

The operational rules:

- **Plan capacity per AP**: the fastest plan you sell must fit comfortably,
  and peak-hour aggregate must fit the ratio you've chosen.
- **Watch peak-hour, not average**: an AP at 30% daily average can be
  saturated every evening at 8 p.m. — and evening is when your customers
  judge you.
- **Split before it hurts**: relief is another sector (different direction or
  channel), a band shift for heavy users, or a second site. All are easier to
  do *before* the reviews say "slow at night."

Ten customers won't saturate anything if Stage 1's planning was honest. The
point of learning this now is that **growth arrives in clusters** — the third
referral on the same street is how a quiet sector becomes a saturated one in
a season.

## The formalities you can no longer defer

- **Regulatory filings have already started.** In the US, every
  facilities-based broadband provider with even one customer files the FCC's
  Broadband Data Collection **twice a year** — see
  [US Regulatory Filings](/reference/filings-us/) for what and when. New
  operators routinely learn this late; you now haven't.
- **Real bookkeeping**, separated from personal finances, from the first
  dollar — both because taxes, and because the Stage 0 spreadsheet (cost per
  customer, break-even) only stays honest if the actuals flow in.
- **Insurance review**: your liability policy was sized for "occasionally on
  a roof." Ten installs a month is a different risk profile; tell your
  insurer the truth and price accordingly.
- **The tax treatment of what you sell differs by line item** in many
  jurisdictions (in the US, internet access itself is federally protected
  from state taxation; equipment sales and install fees often aren't). One
  conversation with an accountant now beats an amended return later.

## What ten customers proves

Somewhere around ten, the question quietly changes from "can I do this?" to
"how big should this get?" — and the honest answers range from "this is a
great side business at thirty customers" to "I'm quitting my job." Both are
wins. [Stage 3: Scaling](/journey/scaling/) is for the second answer: the
network redesign, the licensed spectrum, the first hire, and the moment the
network stops fitting in one person's head.
