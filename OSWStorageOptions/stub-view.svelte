<script>
import Module from './main.svelte';

let TestStorageOptionsDispatchSelect;
let TestStorageOptionsDispatchSelectValue;
const mod = {

	TestStorageOptionsDispatchSelect(inputData) {
		TestStorageOptionsDispatchSelect.innerHTML = parseInt(TestStorageOptionsDispatchSelect.innerHTML) + 1;

		TestStorageOptionsDispatchSelectValue = inputData.detail;
	},
	
};
</script>

<Module
	on:StorageOptionsDispatchSelect={ mod.TestStorageOptionsDispatchSelect }
	{...Object.fromEntries((new window.URLSearchParams(window.location.search)).entries())}
/>

<p>
	<strong>TestStorageOptionsDispatchSelect</strong>
	<span id="TestStorageOptionsDispatchSelect" bind:this={ TestStorageOptionsDispatchSelect }>0</span>
	<span id="TestStorageOptionsDispatchSelectValue">{ TestStorageOptionsDispatchSelectValue }</span>
</p>
