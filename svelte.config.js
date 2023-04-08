import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { resolve, join } from 'path';



/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    extensions: [".svelte", ".svelte.md"],
    preprocess: [
        preprocess({
            postcss: true,
            typescript: true,
            pug: true,
        }),
    ],


    kit: {
        adapter: adapter(),

    }
};

export default config;
