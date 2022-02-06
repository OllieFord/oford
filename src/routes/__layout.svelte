<script>
	import '../app.css';
	import Header from '$lib/components/layout/header.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
</script>

<Header />
<main class="container max-w-3xl mx-auto px-4 my-4 ">
	<slot />
</main>

<Footer />
