import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
	fsplDb,
	fresnelMidpointRadiusM,
	rxSignalDbm,
	linkMarginDb,
	MILES_TO_KM,
	METERS_TO_FEET,
} from './rf-math.js';

test('FSPL matches the textbook anchor: 5 GHz at 1 km ≈ 106.4 dB', () => {
	const v = fsplDb(1, 5);
	assert.ok(Math.abs(v - 106.43) < 0.05, `got ${v}`);
});

test('FSPL distance doubling adds ~6 dB', () => {
	assert.ok(Math.abs(fsplDb(2, 5) - fsplDb(1, 5) - 6.02) < 0.05);
});

test('Fresnel midpoint radius matches the field anchor: 1 mile at 5.8 GHz ≈ 4.6 m (~15 ft)', () => {
	const m = fresnelMidpointRadiusM(1 * MILES_TO_KM, 5.8);
	assert.ok(Math.abs(m - 4.56) < 0.05, `got ${m}`);
	assert.ok(Math.abs(m * METERS_TO_FEET - 15.0) < 0.3);
});

test('link budget chain at Stage 1 defaults is plausible', () => {
	// 25 dBm TX + 16 dBi sector + 23 dBi CPE dish, 1 mile at 5.8 GHz, 2 dB losses
	const fspl = fsplDb(1 * MILES_TO_KM, 5.8);
	const rx = rxSignalDbm(25, 16, 23, fspl, 2);
	assert.ok(rx > -55 && rx < -45, `got ${rx}`); // strong residential link
	const margin = linkMarginDb(rx, -65);
	assert.ok(margin > 10 && margin < 20, `got ${margin}`);
});
