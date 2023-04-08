import { sveltekit } from "@sveltejs/kit/vite";
import { resolve, join } from 'path';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('vite').userConfig} */
const config = {
    plugins: [sveltekit()],
    resolve: {
        alias: {
            $components: resolve('./src/components'),
            $stores: resolve('./src/stores'),
            $actions: resolve('./src/actions'),
            $lib: resolve('./src/lib')

        }
    },

}

export default config;