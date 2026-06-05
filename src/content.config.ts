import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				// Required on every page — the build fails without them (ADR-0004).
				/** Date a human last verified this page's facts are current. */
				lastReviewed: z.date(),
				/** Honest depth signal, rendered as a badge (ADR-0005). */
				depth: z.enum(['overview', 'working', 'comprehensive']),
				/** Regulatory scope. Journey pages must be 'universal' (ADR-0006). */
				jurisdiction: z.enum(['universal', 'us-federal', 'us-state']),

				// Optional metadata for currency audits and journey structure.
				/** Journey stage this page belongs to, if any. */
				stage: z.string().optional(),
				/** Slugs the reader should have completed first. */
				prerequisites: z.array(z.string()).optional(),
				/** True if the page names specific hardware/vendors/prices — flags it for shorter review cycles. */
				equipmentCited: z.boolean().optional(),
			}),
		}),
	}),
};
