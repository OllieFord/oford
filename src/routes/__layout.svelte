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

<script>
	import '../app.css';
	import Header from '$lib/components/layout/header.svelte';
	import Footer from '$lib/components/layout/footer.svelte';

	import { fade } from 'svelte/transition';

	export let currentRoute;
</script>

<Header />
{#key currentRoute}
	<main
		in:fade={{ duration: 150, delay: 150 }}
		out:fade={{ duration: 150 }}
		class="container max-w-3xl mx-auto px-4 my-4 flex-1 min-h-full"
	>
		<slot />
	</main>
	<Footer />
{/key}
