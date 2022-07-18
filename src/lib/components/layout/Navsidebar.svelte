<script>
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import close from '$lib/assets/close-outline.svg';

	export let show = false;
	let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
{#if show}
	<nav transition:fly={{ duration: 400, x: innerWidth, opacity: 1, easing: cubicInOut }}>
		<div class="h-24 flex flex-row justify-end">
			<button aria-label="Close menu" class="h-11 w-11 sm:hidden" on:click={() => (show = false)}>
				<img alt="The project logo" src={close} />
			</button>
		</div>
		<div class="flex flex-col gap-6 text-xl font-semibold">
			<a
				href="/writing"
				on:click={() => {
					show = false;
				}}>Writing</a
			>
			<a
				href="https://www.linkedin.com/in/oliver-ford-3157229b/"
				on:click={() => {
					show = false;
				}}>Linkedin</a
			>
			<a
				href="https://github.com/OllieFord"
				on:click={() => {
					show = false;
				}}>Github</a
			>
		</div>
	</nav>
{/if}

<style>
	nav {
		position: fixed;
		top: 0;
		right: 0;
		height: 100%;
		padding: 1rem 1rem 0.6rem;
		background: #fff;
		overflow-y: auto;
		width: 100vw;
		z-index: 50;
		background: hsla(0deg, 0%, 100%, 0.85);
		backdrop-filter: blur(8px);
	}
</style>
