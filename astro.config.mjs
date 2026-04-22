// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'An OSRS Compendium',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Raids',
					autogenerate: { directory: 'raids' },
				},
				{
					label: 'Bosses',
					autogenerate: { directory: 'bosses' },
				},
			],
		}),
	],
});
