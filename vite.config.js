import { sveltekit } from "@sveltejs/kit/vite";
import { resolve, join } from 'path';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from "./mdsvex.config.js"
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

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
    server: {
        fs: {
            // Allow serving files from one level up to the project root
            allow: ['..'],
        },
    }

}

export default config;