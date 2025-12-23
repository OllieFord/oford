<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/layout/header.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import { page } from '$app/state';
	import { fade } from 'svelte/transition';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	const currentRoute = $derived(page.url.pathname);

	let { children } = $props();
</script>

<Header />
{#key currentRoute}
	<main
		in:fade={{ duration: 150, delay: 150 }}
		out:fade={{ duration: 150 }}
		class="container max-w-prose mx-auto px-4 mt-4 mb-12 lg:mt-12 lg:mb-12 flex-1 min-h-full"
	>
		{@render children()}
	</main>
{/key}
<Footer />
