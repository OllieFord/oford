<script>
	let currentDate = new Date();
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<template lang="pug">
    footer(class=" container grid mx-auto max-w-3xl px-4 mt-auto py-8 align-middle content-center" )
        div(class="flex flex-row text-slate-500 py-4 border-t ")
            div(class="sm:w-1/3 text-xs w-full")
                ul(class="space-y-2")
                    li 
                        p ollie.ford343@gmail.com
                    li 
                        a(href="#") Linkedin
            div(class="sm:w-2/3 space-y-2 w-full")
                p(class="text-sm") Oliver Ford designs and implements delightful machine learning systems. He's currently a machine learning engineer at Xomnia. Previously, he worked as a freelance machine learning engineer.
                p(class="text-sm") © Oliver Ford {currentDate.getFullYear().toString()}

</template>
