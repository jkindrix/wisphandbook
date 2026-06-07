import { test } from 'node:test';
import assert from 'node:assert/strict';
import { contributionMargin, breakEvenCount, paybackMonths } from './biz-math.js';

test('contribution margin', () => {
	assert.equal(contributionMargin(75, 12), 63);
	assert.equal(contributionMargin(50, 50), 0);
});

test('break-even count rounds up and matches Stage 0 example range', () => {
	// Stage 0 defaults: $1,200 fixed / $63 margin → 20 customers (inside the
	// page's stated 15–50 range for a lean single-site start)
	assert.equal(breakEvenCount(1200, 63), 20);
	// fractional results always round up — 19.1 customers means 20
	assert.equal(breakEvenCount(1205, 63), 20);
	assert.equal(breakEvenCount(1261, 63), 21);
});

test('break-even is null when margin is zero or negative', () => {
	assert.equal(breakEvenCount(1200, 0), null);
	assert.equal(breakEvenCount(1200, -5), null);
});

test('payback months matches Stage 0 under-a-year claim at defaults', () => {
	const months = paybackMonths(500, 63);
	assert.ok(months > 7 && months < 9);
	assert.equal(paybackMonths(500, 0), null);
});

test('oversubscription matches the Stage 2 anchor: 200 Mbps AP, 25 Mbps plan, 5:1 → 40 subs', async () => {
	const { oversubscriptionRatio, maxSubscribers } = await import('./biz-math.js');
	const assert = (await import('node:assert/strict')).default;
	assert.equal(maxSubscribers(200, 25, 5), 40);
	assert.equal(oversubscriptionRatio(40, 25, 200), 5);
	assert.equal(oversubscriptionRatio(10, 25, 0), null);
	assert.equal(maxSubscribers(200, 0, 5), null);
});
