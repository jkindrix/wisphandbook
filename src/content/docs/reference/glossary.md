---
title: Glossary
description: The vocabulary of the WISP world — RF, networking, and business terms used throughout the handbook.
sidebar:
  order: 99
lastReviewed: 2026-06-05
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

**QoE / oversubscription** — You sell more aggregate capacity than you own upstream, because subscribers don't all peak simultaneously. Choosing the ratio is a core engineering-economics decision.

## Business

**Take rate** — The percentage of households in your coverage area that become customers. The single most important number in WISP feasibility math.

**ARPU** — Average revenue per user, per month.

**CapEx / OpEx** — Capital expenditure (towers, radios, install gear) vs. operating expenditure (backhaul, rent, insurance, payroll). WISPs are CapEx-front-loaded businesses.

**Churn** — The rate at which customers leave. Growth is meaningless if churn eats it.

**Truck roll** — Any service event requiring a technician on site. The most expensive routine thing a WISP does; much of network design is about avoiding them.

**Pole attachment** *(US)* — The regulated right to attach equipment to utility poles, governed by agreements with pole owners. Relevant once you run fiber or build out aerially.

**BDC** *(US)* — The FCC's Broadband Data Collection: the mandatory semiannual filing of where you offer service (successor to Form 477).
