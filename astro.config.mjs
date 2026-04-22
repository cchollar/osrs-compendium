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
					label: 'Chambers of Xeric',
					autogenerate: { directory: 'chambers-of-xeric' },
				},
				{
					label: 'Theatre of Blood',
					autogenerate: { directory: 'theatre-of-blood' },
				},
				{
					label: 'Tombs of Amascut',
					autogenerate: { directory: 'tombs-of-amascut' },
				},
								{
					label: 'Bosses',
					autogenerate: { directory: 'bosses' },
				},
			],
		}),
	],
});
