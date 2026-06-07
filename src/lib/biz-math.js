// Business math shared by calculators (ADR-0007: one tested module per math
// domain; calculators import, never reimplement). Pure functions, plain JS so
// `node --test` runs without a build step.

/**
 * Monthly contribution margin per customer.
 * @param {number} arpu - monthly revenue per customer ($)
 * @param {number} variableCost - monthly variable cost per customer ($)
 * @returns {number}
 */
export function contributionMargin(arpu, variableCost) {
	return arpu - variableCost;
}

/**
 * Customers needed to cover fixed monthly costs. Null when margin <= 0
 * (no customer count can ever break even).
 * @param {number} fixedMonthly - total fixed costs per month ($)
 * @param {number} margin - contribution margin per customer ($/mo)
 * @returns {number | null}
 */
export function breakEvenCount(fixedMonthly, margin) {
	if (margin <= 0) return null;
	return Math.ceil(fixedMonthly / margin);
}

/**
 * Months for one customer's margin to repay their connect cost. Null when
 * margin <= 0.
 * @param {number} connectCost - one-time cost to connect a customer ($)
 * @param {number} margin - contribution margin per customer ($/mo)
 * @returns {number | null}
 */
export function paybackMonths(connectCost, margin) {
	if (margin <= 0) return null;
	return connectCost / margin;
}

/**
 * Oversubscription ratio: total sold capacity vs what the AP actually delivers.
 * @param {number} subscribers
 * @param {number} planMbps - fastest/typical plan sold on this AP
 * @param {number} capacityMbps - AP's real usable capacity
 * @returns {number | null} ratio (e.g. 5 means 5:1), null if capacity <= 0
 */
export function oversubscriptionRatio(subscribers, planMbps, capacityMbps) {
	if (capacityMbps <= 0) return null;
	return (subscribers * planMbps) / capacityMbps;
}

/**
 * Subscribers an AP supports at a chosen oversubscription ratio.
 * @param {number} capacityMbps
 * @param {number} planMbps
 * @param {number} ratio - e.g. 5 for 5:1
 * @returns {number | null} whole subscribers, null if plan <= 0
 */
export function maxSubscribers(capacityMbps, planMbps, ratio) {
	if (planMbps <= 0) return null;
	return Math.floor((capacityMbps * ratio) / planMbps);
}
