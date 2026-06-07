// RF math shared by calculators (ADR-0007: one tested module per math domain;
// calculators import, never reimplement). Pure functions, plain JS so
// `node --test` runs without a build step.

export const MILES_TO_KM = 1.609344;
export const METERS_TO_FEET = 3.28084;

/**
 * Free-space path loss in dB.
 * FSPL(dB) = 20·log10(d_km) + 20·log10(f_GHz) + 92.45
 * @param {number} distanceKm
 * @param {number} freqGhz
 * @returns {number} dB
 */
export function fsplDb(distanceKm, freqGhz) {
	return 20 * Math.log10(distanceKm) + 20 * Math.log10(freqGhz) + 92.45;
}

/**
 * First Fresnel zone radius at the path midpoint, in meters.
 * r(m) = 8.657 · sqrt(d_km / f_GHz)
 * @param {number} distanceKm - total path length
 * @param {number} freqGhz
 * @returns {number} meters
 */
export function fresnelMidpointRadiusM(distanceKm, freqGhz) {
	return 8.657 * Math.sqrt(distanceKm / freqGhz);
}

/**
 * Received signal level in dBm.
 * RX = TX power + both antenna gains − FSPL − misc losses
 * @param {number} txDbm
 * @param {number} txGainDbi
 * @param {number} rxGainDbi
 * @param {number} fspl - dB
 * @param {number} miscLossDb - cables, connectors, obstruction allowance
 * @returns {number} dBm
 */
export function rxSignalDbm(txDbm, txGainDbi, rxGainDbi, fspl, miscLossDb) {
	return txDbm + txGainDbi + rxGainDbi - fspl - miscLossDb;
}

/**
 * Link margin in dB: how far the received signal sits above what the service
 * tier requires. Positive is good; operators commonly plan 10–20 dB of fade
 * margin on top of the requirement.
 * @param {number} rxDbm
 * @param {number} requiredDbm
 * @returns {number} dB
 */
export function linkMarginDb(rxDbm, requiredDbm) {
	return rxDbm - requiredDbm;
}
