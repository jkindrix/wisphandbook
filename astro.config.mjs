// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://wisphandbook.com',
	integrations: [
		starlight({
			title: 'The WISP Handbook',
			description:
				'Everything it takes to start a wireless internet service provider from absolute scratch — and grow it from your first customer to your thousandth.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/jkindrix/wisphandbook' },
			],
			editLink: {
				baseUrl: 'https://github.com/jkindrix/wisphandbook/edit/main/',
			},
			components: {
				PageTitle: './src/components/PageTitle.astro',
			},
			sidebar: [
				{
					label: 'The Journey',
					items: [{ autogenerate: { directory: 'journey' } }],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
