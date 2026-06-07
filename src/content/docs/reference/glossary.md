---
title: Glossary
description: The vocabulary of the WISP world — RF, networking, and business terms used throughout the handbook.
sidebar:
  order: 99
lastReviewed: 2026-06-07
depth: working
jurisdiction: universal
---

Terms you'll meet throughout the handbook. US-specific terms are marked.

## RF and wireless

**WISP** — Wireless Internet Service Provider. An ISP that delivers last-mile connectivity over fixed wireless links rather than cable, fiber, or DSL.

**Fixed wireless** — Point-to-point or point-to-multipoint radio links between stationary antennas, as opposed to mobile/cellular service. What WISPs sell.

**AP (Access Point)** — The provider-side radio, typically a sector antenna on a tower or rooftop, that serves multiple subscriber radios.

**CPE (Customer Premises Equipment)** — The subscriber-side radio and router installed at the customer's location, aimed back at your AP.

**PtP (Point-to-Point)** — A dedicated radio link between exactly two radios. Used for backhaul between sites.

**PtMP (Point-to-Multipoint)** — One AP serving many CPEs. The standard access-layer topology for a WISP.

**Backhaul** — The link that carries traffic from a remote site back toward your network core and upstream internet connection. Can be wireless (PtP) or fiber.

**Sector** — A directional AP antenna covering a wedge of coverage (commonly 60°, 90°, or 120°). Multiple sectors on one tower cover a full circle.

**LoS / nLoS / NLoS** — Line of sight / near line of sight / non-line of sight. Whether the radio path between two antennas is unobstructed. Most fixed-wireless gear needs clean LoS to perform.

**Fresnel zone** — The football-shaped region around the direct line between two antennas that must be mostly clear of obstructions for a link to work well — clearing the visual line isn't enough. Radius depends on distance and frequency.

**Path loss / FSPL** — Free-space path loss; the signal attenuation over distance, increasing with both distance and frequency. The starting point of every link budget.

**Link budget** — The accounting of transmit power + antenna gains − losses that predicts received signal strength and therefore whether a link will work, and how fast.

**Fade margin** — Headroom built into a link budget above the minimum required signal, so rain, foliage, and interference don't take the link down.

**Rain fade** — Signal loss when heavy precipitation absorbs and scatters a radio path, hitting high-frequency links (especially 60 GHz) hardest. A link that dies in every storm was engineered without enough fade margin.

**GPS sync** — Timing all the APs on a site (or network) from GPS so they transmit and receive in unison instead of deafening each other. Standard practice on multi-sector towers in some platform ecosystems.

**PoE (Power over Ethernet)** — Powering a radio through its data cable via an injector or switch. Failing injectors and corroded connectors are among the most common hardware failures in fixed wireless.

**Drip loop** — A downward sag left in an outdoor cable so water runs off the bottom of the loop instead of following the cable into the connector or the building. Costs nothing at install; prevents the classic mid-storm failure.

**Part 101** *(US)* — The FCC's licensed point-to-point microwave service (11 GHz and up). An exclusive, interference-protected channel per link — what critical backhaul graduates to when an outage costs more than the licensing.

**dBm / dBi / dB** — Decibel units: absolute power referenced to 1 mW (dBm), antenna gain referenced to an isotropic radiator (dBi), and relative ratios (dB). RF math is done in decibels.

**EIRP** — Effective isotropic radiated power: transmit power plus antenna gain minus cable loss. What regulators actually limit (US: FCC rules per band).

**SNR** — Signal-to-noise ratio. With modern radios, SNR (not raw signal) determines the modulation rate, and therefore the throughput, a link achieves.

**Modulation / MCS** — How bits are encoded onto the radio signal. Higher-order modulation (tracked as MCS index) means more throughput but requires better SNR.

**Noise floor** — The ambient RF energy in a band at your location. Crowded unlicensed bands have high noise floors, which caps achievable SNR.

**Unlicensed spectrum** — Bands anyone may use within power rules (US: 900 MHz, 2.4 GHz, 5 GHz, 60 GHz, and 6 GHz under AFC). Free to use, shared with everyone else — interference is the price.

**CBRS** *(US)* — Citizens Broadband Radio Service, 3.55–3.7 GHz. A three-tier shared band coordinated by SAS (Spectrum Access System) databases; the practical middle ground between unlicensed and exclusively licensed spectrum.

**AFC** *(US)* — Automated Frequency Coordination, the database system that allows standard-power outdoor use of the 6 GHz band.

## Network

**Core** — The router(s) and switching at the center of your network where customer traffic aggregates before heading upstream.

**Upstream / transit** — The connection from your network to the rest of the internet, bought from a carrier, typically delivered over fiber at an interconnection point.

**OSPF / BGP** — Routing protocols. OSPF distributes routes inside your own network; BGP exchanges routes with other networks and is required once you announce your own IP space.

**ASN** — Autonomous System Number; your network's identity in global BGP routing. Getting one (US: via ARIN) marks the transition to being a "real" network.

**CGNAT** — Carrier-grade NAT: sharing a small pool of public IPv4 addresses across many subscribers. Common at small WISPs because IPv4 is scarce and expensive.

**DIA (Dedicated Internet Access)** — An internet connection with committed capacity, an SLA, and no "no resale" clause — what a WISP buys as upstream, as opposed to a residential line.

**Multihoming** — Buying upstream from two or more providers and announcing your address space to both via BGP, so no single provider's failure takes you offline.

**BCP38** — The anti-spoofing discipline: your network edge drops packets whose source addresses couldn't legitimately come from there. Keeps your customers' infected devices from attacking the internet with your name on the traffic.

**Blast radius** — How much of the network an outage affects: one customer, one sector, one site, or everything. The first diagnostic question, because the scope names the broken layer.

**QoE / oversubscription** — You sell more aggregate capacity than you own upstream, because subscribers don't all peak simultaneously. Choosing the ratio is a core engineering-economics decision.

## Business

**Take rate** — The percentage of households in your coverage area that become customers. The single most important number in WISP feasibility math.

**ARPU** — Average revenue per user, per month.

**CapEx / OpEx** — Capital expenditure (towers, radios, install gear) vs. operating expenditure (backhaul, rent, insurance, payroll). WISPs are CapEx-front-loaded businesses.

**Churn** — The rate at which customers leave. Growth is meaningless if churn eats it.

**Contribution margin** — What each customer's monthly payment leaves after their variable costs — the number that pays down fixed costs and connect costs. Revenue minus per-customer cost; the heart of the break-even arithmetic.

**BEAD** *(US)* — The $42 billion federal Broadband Equity, Access, and Deployment program funding (mostly fiber) buildouts to unserved areas. Its state-published award maps tell you whether a subsidized competitor is coming to your footprint.

**E-Rate** *(US)* — The federal program that has funded school and library connectivity for decades — which is why the school district almost always has fiber, and why it's a reliable clue for finding glass near your target area.

**Truck roll** — Any service event requiring a technician on site. The most expensive routine thing a WISP does; much of network design is about avoiding them.

**Pole attachment** *(US)* — The regulated right to attach equipment to utility poles, governed by agreements with pole owners. Relevant once you run fiber or build out aerially.

**BDC** *(US)* — The FCC's Broadband Data Collection: the mandatory semiannual filing of where you offer service (successor to Form 477).
