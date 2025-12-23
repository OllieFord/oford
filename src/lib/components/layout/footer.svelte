<script lang="ts">
	let currentDate = new Date();
</script>

<!-- svelte-ignore a11y_invalid_attribute -->
<footer class="container grid mx-auto max-w-5xl px-4 mt-auto py-8 align-middle content-center">
	<div class="hidden sm:flex sm:flex-row text-slate-500 py-4 justify-between">
		<div class="sm:w-1/3 text-xs w-full flex flex-col justify-between">
			<div>
				<h3
					class="text-slate-700 text-2xl font-bold hover:text-violet-400 transition-all ease-in-out duration-500"
				>
					Ollie Ford
				</h3>
				<h3 class="text-slate-700/60 text-lg font-semibold">Thanks for reading!</h3>
			</div>
			<div>
				<p class="text-sm text-slate-700/40">
					©{currentDate.getFullYear().toString()} Oliver Ford. All Rights Reserved.
				</p>
			</div>
		</div>

		<div class="space-y-4 text-sm">
			<p>Links</p>
			<div class="grid w-24 gap-2 text-black">
				<a href="https://www.linkedin.com/in/oliver-ford-3157229b/">Linkedin</a>
				<a href="https://github.com/OllieFord">Github</a>
				<a href="#">Contact</a>
			</div>
		</div>
	</div>

	<div class="flex flex-col sm:hidden">
		<div class="text-xs w-full flex flex-col justify-center text-center pb-8">
			<div>
				<h3
					class="text-slate-700 text-2xl font-light hover:text-violet-400 transition-all ease-in-out duration-500"
				>
					Ollie Ford
				</h3>
			</div>
		</div>

		<div class="flex flex-row justify-around">
			<div class="space-y-4 text-sm">
				<p>Links</p>
				<div class="grid gap-2 text-black">
					<a href="https://www.linkedin.com/in/oliver-ford-3157229b/">Linkedin</a>
					<a href="https://github.com/OllieFord">Github</a>
					<a href="#">Contact</a>
				</div>
			</div>
		</div>

		<div class="pt-12 text-center">
			<p class="text-xs text-slate-700/40">
				©{currentDate.getFullYear().toString()} Oliver Ford. All Rights Reserved.
			</p>
		</div>
	</div>
</footer>
