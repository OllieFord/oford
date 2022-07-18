<script>
	import menu from '$lib/assets/menu-outline.svg';
	import Sidebar from './Navsidebar.svelte';
	let sidebar_show = false;
</script>

<template lang="pug">
    nav(class="container grid mx-auto max-w-5xl px-4 mb-8 align-middle content-center ")
        div(class="flex flex-row justify-between mt-4 pb-4 ")
            div(class="flex flex-row items-center")
                a(class="mr-8 " href="/")
                    h1(class="text-slate-700 text-2xl font-bold hover:text-violet-400 transition-all ease-in-out duration-500") Ollie Ford
                    p(class="text-xs") Machine learning Engineer
                nav(class="hidden sm:block")
                    a(class="text-lg inline-block align-middle w-11 text-center  text-slate-600 hover:text-slate-400 mr-auto transition-all ease-in-out duration-500" href="/writing") Writing
            div(class="hidden sm:flex flex-row gap-3 items-center ")
                a(class="text-lg inline-block align-middle min-w-11 text-center  text-slate-600 hover:text-slate-400 transition-all ease-in-out duration-500" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/oliver-ford-3157229b/") Linkedin
                a(class="text-lg inline-block align-middle min-w-11 text-center text-slate-600 hover:text-slate-400 transition-all ease-in-out duration-500" target="_blank" rel="noopener noreferrer" href="https://github.com/OllieFord") Github

            <button aria-label="open menu" class="h-11 w-11 sm:hidden" on:click={() => sidebar_show = !sidebar_show}>
                <img alt="menu button" src={menu} />
            </button>

    <Sidebar bind:show={sidebar_show} />

</template>
