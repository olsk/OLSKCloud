<script>
import Module from './main.svelte';

let TestOSWContainerDelegateSelect;
let TestOSWContainerDelegateSelectValue;
const mod = {

	TestOSWContainerDelegateSelect(inputData) {
		TestOSWContainerDelegateSelect.innerHTML = parseInt(TestOSWContainerDelegateSelect.innerHTML) + 1;

		TestOSWContainerDelegateSelectValue = inputData.detail;
	},
	
};
</script>

<Module
	on:OSWContainerDelegateSelect={ mod.TestOSWContainerDelegateSelect }
	{...Object.fromEntries((new window.URLSearchParams(window.location.search)).entries())}
/>

<p>
	<strong>TestOSWContainerDelegateSelect</strong>
	<span id="TestOSWContainerDelegateSelect" bind:this={ TestOSWContainerDelegateSelect }>0</span>
	<span id="TestOSWContainerDelegateSelectValue">{ TestOSWContainerDelegateSelectValue }</span>
</p>
