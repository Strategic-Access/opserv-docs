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
      github: 'https://github.com/Strategic-Access/opserv-docs'
    },
    sidebar: [{
      label: 'For Administrators',
      autogenerate: { directory: 'admin' },
    },{
      label: 'For Supervisors',
      autogenerate: { directory: 'supervisor' },
    },{
      label: 'For Technicians',
      autogenerate: { directory: 'technician' },
    }]
  }), tailwind({
	// Disable the default base styles:
	applyBaseStyles: false,
}),]
});