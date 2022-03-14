import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true,
		typescript: true,
	}),
	kit: {
		adapter: adapter({
			fallback: "404.html",
			precompress: true,
		}),
		browser: {
			// hydrate: false, When false, hot reloading does not work in dev
			router: false,
		},
		prerender: {
			default: true,
		},
		floc: true,
	},
};

export default config;
