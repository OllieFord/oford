<script lang="ts" type="module">
	import { supabase } from '../../../client';
	import { createClient } from '@supabase/supabase-js';
	import { variables } from '../../../variables';
	import { onMount } from 'svelte';
	let currentDate = new Date();

	let data: string[] = [""];

	async function getPageViews() {
		supabase
			.from('stats')
			.select()
			.eq('stat_name', 'total page views')
			.select('stat_value')
			.then((res) => {
				data = res!.data[0];
			});
	}

	onMount(async () => {
		getPageViews();
	});
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<template lang="pug">
    footer(class=" container grid mx-auto max-w-5xl px-4 mt-auto  py-8 align-middle content-center" )
        div(class="hidden sm:flex sm:flex-row text-slate-500 py-4 justify-between")
            div(class="sm:w-1/3 text-xs w-full flex flex-col justify-between")
                div(class="")
                    h3(class="text-slate-700 text-2xl font-bold hover:text-violet-400 transition-all ease-in-out duration-500") Ollie Ford
                    h3(class="text-slate-700/60 text-lg font-semibold") Thanks for reading!
                div
                    p(class="text-sm text-slate-700/40") ©{currentDate.getFullYear().toString()} Oliver Ford. All Rights Reserved.

            div(class="flex flex-row")
                div(class="space-y-3 prose")
                div(class="space-y-4 w-52 text-sm ml-24")
                    +if('data.stat_value')
                        p(class="") Stats
                        div(class="grid gap-3 grid-cols-1 text-black ")
                                div(class="flex flex-row gap-2 items-center")
                                    p(class="font-semibold") {data.stat_value}
                                    p(class="text-xs text-black/40") Total Page Views
                        +else()
                            p(class="") Stats
                            div(class="grid gap-3 grid-cols-1 text-black ")
                                    div(class="flex flex-row gap-2 items-center")
                                        p(class="font-semibold") 🔥
                                        p(class="text-xs text-black/40") Total Page Views

                
                        
                        

            
                div(class="space-y-4 text-sm ml-24")
                    p(class="") Links
                    div(class="grid w-24 gap-2 text-black")
                        a(href="https://www.linkedin.com/in/oliver-ford-3157229b/") Linkedin 
                        a(href="https://github.com/OllieFord") Github
                        a(href="#") Contact

        div(class="flex flex-col sm:hidden")
            div(class=" text-xs w-full flex flex-col justify-center text-center pb-8")
                div(class="")
                    h3(class="text-slate-700 text-2xl font-light hover:text-violet-400 transition-all ease-in-out duration-500") Ollie Ford
   

            div(class="flex flex-row justify-around")
                div(class="space-y-4 text-sm ")
                    p(class="") Stats
                    div(class="grid gap-3 grid-cols-1 text-black ")
                        +if('data')
                            div(class="flex flex-row gap-2 items-center")
                                p(class="font-semibold") {data.stat_value}
                                p(class="text-xs text-black/40") Total Page Views
            
                div(class="space-y-4 text-sm")
                    p(class="") Links
                    div(class="grid gap-2 text-black")
                        a(href="https://www.linkedin.com/in/oliver-ford-3157229b/") Linkedin 
                        a(href="https://github.com/OllieFord") Github
                        a(href="#") Contact
            
            div(class="pt-12 text-center")
                p(class="text-xs text-slate-700/40") ©{currentDate.getFullYear().toString()} Oliver Ford. All Rights Reserved.


</template>
