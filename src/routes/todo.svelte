<script>
import Todo from '$lib/components/todoList.svelte';
import { Tabs, TabList, TabPanel, Tab } from '$lib/components/tabs.js';

let newItem = '';
let score;
    

let category = []

function addToList() {
    category = [...category, {text: newItem, status: false}];
    newItem = '';
}

function removeFromList(index) {
    category.splice(index, 1)
    category = category;
}

</script>


<input bind:value={newItem} type="text" placeholder="new todo list">
<button on:click={addToList}>Add</button>


<Tabs>
	<TabList>
		{#each category as cat}
        <Tab>
            {cat.text}	
            {score}
        </Tab>
        {/each}
	</TabList>
    {#each category as cat}
    <TabPanel>
        <Todo list_name={cat.text} bind:header={score} ></Todo>
    </TabPanel>
    {/each}

</Tabs>


