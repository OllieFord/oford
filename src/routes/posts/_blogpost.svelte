<script>
	import { onMount } from 'svelte';

	export let title;
	export let coverImageUrl;

	const options = {
		src: 'https://utteranc.es/client.js',
		repo: 'OllieFord/oford',
		label: 'comments',
		crossorigin: 'anonymous',
		theme: 'github-light',
		async: '',
		'issue-term': 'pathname'
	};

	onMount(() => {
		const utteranceScript = document.createElement('script');
		const targetTag = document.getElementById('utterances-comments');

		// Loop over the options & apply each property as an attribute
		for (const prop in options) {
			utteranceScript.setAttribute(prop, options[prop]);
		}

		targetTag.appendChild(utteranceScript);
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta property="og:image" content={coverImageUrl} />
</svelte:head>

<article>
	<h1 class="text-3xl my-3">{title}</h1>
	<slot />
</article>

<div class="flex flex-col text-slate-500 py-4 border-t mt-8">
	<div class="w-full" id="utterances-comments" />
</div>
