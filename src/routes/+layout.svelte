

<script context="module">
	export const load = ({ url }) => {
		const currentRoute = url.pathname;

		return {
			props: {
				currentRoute
			}
		};
	};

</script>

<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/layout/header.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import { navigating } from '$app/stores';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';


    inject({mode: dev ? 'development':'production'})


    

	export let currentRoute;

	async function page_view() {
		fetch('https://oford.me/api/page_view', { mode: 'no-cors' });
	}

	$: if ($navigating) page_view();

	onMount(async () => {
		page_view();
	});
</script>

<Header />
{#key currentRoute}
	<main
		in:fade={{ duration: 150, delay: 150 }}
		out:fade={{ duration: 150 }}
		class="container max-w-prose mx-auto px-4 mt-4 mb-12 lg:mt-12 lg:mb-12 flex-1 min-h-full"
	>
		<slot />
	</main>
{/key}
<Footer />
