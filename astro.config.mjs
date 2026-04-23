// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import mdx from '@astrojs/mdx';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'An OSRS Compendium',
		logo: {
			src: './src/assets/arcane_grimoire_echo_detail.png',
		},
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
		}), mdx()],
    vite: {
        resolve: {
            alias: {
                '@components': path.resolve(__dirname, 'src/components'),
            },
        },
    },	
});