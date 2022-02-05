<script>
	// These props get filled in from the page's front matter
	export let title;
	export let coverImageUrl;
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta property="og:image" content={coverImageUrl} />
</svelte:head>

<article>
	<h1 class="text-3xl my-3">{title}</h1>
	<slot />
	<a class="my-3" href="/writing">Back to writing index</a>
</article>
