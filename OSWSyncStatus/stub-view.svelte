<script>
import Module from './main.svelte';

let TestOSWSyncStatusDelegateSelect;
const mod = {

	TestOSWSyncStatusDelegateSelect(inputData) {
		TestOSWSyncStatusDelegateSelect.innerHTML = parseInt(TestOSWSyncStatusDelegateSelect.innerHTML) + 1;
	},
	
};
</script>

<Module
	on:OSWSyncStatusDelegateSelect={ mod.TestOSWSyncStatusDelegateSelect }
	{...Object.fromEntries((new window.URLSearchParams(window.location.search)).entries())}
/>

<p>
	<strong>TestOSWSyncStatusDelegateSelect</strong>
	<span id="TestOSWSyncStatusDelegateSelect" bind:this={ TestOSWSyncStatusDelegateSelect }>0</span>
</p>
