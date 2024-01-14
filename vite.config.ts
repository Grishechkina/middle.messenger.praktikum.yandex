import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
	build: {
		outDir: 'dist',
	},
	plugins: [
		// @ts-expect-error: different Types after updates. but still can be compared
		handlebars(),
		checker({
			typescript: true,
		}),
	],
});
