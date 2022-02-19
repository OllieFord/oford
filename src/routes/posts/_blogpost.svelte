

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

<script src="https://utteranc.es/client.js"
        repo="https://github.com/OllieFord/oford"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>

	export let title;
	export let coverImageUrl;
</script>
