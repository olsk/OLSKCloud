<script>
import Module from './main.svelte';

let TestOSWStorageOptionsDelegateSelect;
let TestOSWStorageOptionsDelegateSelectDetail;
const mod = {

	TestOSWStorageOptionsDelegateSelect(inputData) {
		TestOSWStorageOptionsDelegateSelect.innerHTML = parseInt(TestOSWStorageOptionsDelegateSelect.innerHTML) + 1;

		TestOSWStorageOptionsDelegateSelectDetail = inputData.detail;
	},
	
};
</script>

<Module
	on:OSWStorageOptionsDelegateSelect={ mod.TestOSWStorageOptionsDelegateSelect }
	{...Object.fromEntries((new window.URLSearchParams(window.location.search)).entries())}
/>

<p>
	<strong>TestOSWStorageOptionsDelegateSelect</strong>
	<span id="TestOSWStorageOptionsDelegateSelect" bind:this={ TestOSWStorageOptionsDelegateSelect }>0</span>
	<span id="TestOSWStorageOptionsDelegateSelectDetail">{ TestOSWStorageOptionsDelegateSelectDetail }</span>
</p>
