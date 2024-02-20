import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
	build: {
		outDir: 'dist',
	},
	plugins: [
		// @ts-expect-error: different Types after updates. but still can be compared
		handlebars(),
	],
});
