import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { resolve, join } from 'path';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from "./mdsvex.config.js"


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: [".svelte", ".svelte.md"],
	preprocess: [mdsvex(mdsvexConfig),
				preprocess({ 
						postcss: true,
					 	typescript: true}),
				],
			

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		vite: {
			resolve: {
				alias: {
					$components: resolve('./src/components'),
                    $stores: resolve('./src/stores'),
                    $actions: resolve('./src/actions'),
					$lib: resolve('./src/lib')

				}
			}
		}
	}
};

export default config;
