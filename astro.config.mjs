import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'OpServ Docs',
	customCss: [
		// Path to your Tailwind base styles:
		'./src/tailwind.css',
	],
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    sidebar: [{
      label: 'For Administrators',
      autogenerate: { directory: 'admin' },
    }]
  }), tailwind({
	// Disable the default base styles:
	applyBaseStyles: false,
}),]
});