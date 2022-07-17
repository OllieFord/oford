<script lang="ts" type="module">
	import { supabase } from '../../../client';
	import { createClient } from '@supabase/supabase-js';
	import { variables } from '../../../variables';
	import { onMount } from 'svelte';
	let currentDate = new Date();

	let data;

	onMount(async () => {
		supabase
			.from('stats')
			.select()
			.eq('stat_name', 'total page views')
			.select('stat_value')
			.then((res) => {
				data = res.data[0];
				console.log(data);
			});
	});
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<template lang="pug">
    footer(class=" container grid mx-auto max-w-5xl px-4 mt-auto  py-8 align-middle content-center" )
        div(class="flex flex-row text-slate-500 py-4 justify-between")
            div(class="sm:w-1/3 text-xs w-full flex flex-col justify-between")
                div(class="")
                    h3(class="text-slate-700 text-2xl font-bold hover:text-violet-400 transition-all ease-in-out duration-500") Ollie Ford
                    h3(class="text-slate-700/60 text-lg font-semibold") Thanks for reading!
                div
                    p(class="text-sm text-slate-700/40") ©{currentDate.getFullYear().toString()} Oliver Ford. All Rights Reserved.

            div(class="flex flex-row")
               
        
                div(class="space-y-3 prose")
                    
                div(class="space-y-4 w-52 text-sm ml-24")
                    p(class="") Stats
                    div(class="grid gap-3 grid-cols-2 text-center text-black ")
                        +if('data')
                            div
                                p(class="font-semibold") {data.stat_value}
                                p(class="text-xs text-black/40") Total Page Views
            
                  

                div(class="space-y-4 text-sm ml-24")
                    p(class="") Links
                    div(class="grid w-24 gap-2 text-black")
                        a() Linkedin 
                        a() Github
                        a() Contact



</template>
