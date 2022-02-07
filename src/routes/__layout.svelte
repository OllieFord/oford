<script context="module">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ page: { path, params } }) => ({
		props: {
			params,
			path
		}
	});
</script>

<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/layout/header.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import { onMount } from 'svelte';
	import { webVitals } from '$lib/webvitals';

	let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID as string;
	export let path: string;
	export let params: Record<string, string>;

	onMount(() => {
		if (analyticsId) webVitals({ path, params, analyticsId });
	});
</script>

<Header />
<main class="container max-w-3xl mx-auto px-4 my-4 ">
	<slot />
</main>

<Footer />
