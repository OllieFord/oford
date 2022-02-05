<script context="module" lang="ts">
	import type { Load } from "@sveltejs/kit"
	export const load: Load = async function ({ fetch }) {
		const url = "./posts/posts.json"
		const res = await fetch(url)
		if (res.ok) {
			const { posts } = await res.json()
			return {
				props: { posts }
			}
		} else {
			return {
				status: 500,
				error: new Error(`Could not fetch ${url}`)
			}
		}
	}
</script>

<script lang="ts">
	export let posts: any[]
</script>

<article class="">
    <div class="py-4 mb-10 mt-3">
        <h1 class="text-4xl">Essays: Thoughts and Learnings</h1>
    </div>
	
	<div class="flex flex-col gap-2">
		{#each posts as post}
				<a href="/posts/{post.slug}" class="py-4 text-slate-80 hover:text-slate-500 transition-all ease-in-out duration-500">
                        <h2 class="text-xl ">{post.title}</h2>
                        <p class="text-lg opacity-75">{post.summary}</p>
                        <div class="flex flex-row gap-2 my-3">
                        {#each post.tags as tag}
                            <div class="font-semibold tracking-wide flex text-xs align-middle rounded-md leading-4 py-1 px-3 bg-slate-100 text-slate-400 hover:bg-violet-300 hover:text-violet-600 transition-colors duration-150 ease-in-out">{tag}</div>
                        {/each}
                    </div>
                        
				</a>

		{/each}
	</div>
</article>

