<script>
    let newItem = '';
    export let list_name;
    export let header;
    

    let todoList = [{text: 'Write my first post', status: true},
                    {text: 'Upload the post to the blog', status: false},
                    {text: 'Publish the post at Facebook', status: false}];
	
	function addToList() {
		todoList = [...todoList, {text: newItem, status: false}];
		newItem = '';
	}
	
	function removeFromList(index) {
		todoList.splice(index, 1)
		todoList = todoList;
    }
    $: header = todoList.length
</script>

<h1>{list_name}</h1>

<input bind:value={newItem} type="text" placeholder="new todo item..">
<button on:click={addToList}>Add</button>

<br/>
{#each todoList as item, index}
	<input bind:checked={item.status} type="checkbox">
	<span class:checked={item.status}>{item.text}</span>
	<span class="py-3 px-2" on:click={() => removeFromList(index)}>x</span>
	<br/>
{/each} 




<style> 
	.checked {
        text-decoration: line-through;
    }
</style> 