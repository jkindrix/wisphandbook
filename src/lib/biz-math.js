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
