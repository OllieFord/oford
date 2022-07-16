<script>
	import { onMount } from 'svelte';

	let child;

	function blurText(textWrapper) {
		let child = document.getElementById(textWrapper).children;
		for (let i = 0; i < child.length; i++) {
			child[i].classList.add('textshadow');
		}
		return child;
	}

	onMount(() => {
		child = blurText('text-display');
	});
</script>

<div class="container max-w-3xl mx-auto p-4">
	<div id="text-display">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
		<p>hello</p>
		<p>hello</p>
		<p>hello</p>
		<p>hello</p>
	</div>

	<div bind:this={child} />
</div>
