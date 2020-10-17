<script>
import Module from './main.svelte';

let TestStorageOptionRemoteStorageDispatchSubmit;
let TestStorageOptionRemoteStorageDispatchSubmitValue;
const mod = {

	TestStorageOptionRemoteStorageDispatchSubmit(inputData) {
		TestStorageOptionRemoteStorageDispatchSubmit.innerHTML = parseInt(TestStorageOptionRemoteStorageDispatchSubmit.innerHTML) + 1;

		TestStorageOptionRemoteStorageDispatchSubmitValue = inputData.detail;
	},
	
};
</script>

<Module
	on:StorageOptionRemoteStorageDispatchSubmit={ mod.TestStorageOptionRemoteStorageDispatchSubmit }
	{...Object.fromEntries((new window.URLSearchParams(window.location.search)).entries())}
/>

<p>
	<strong>StorageOptionRemoteStorageDispatchSubmit</strong>
	<span id="TestStorageOptionRemoteStorageDispatchSubmit" bind:this={ TestStorageOptionRemoteStorageDispatchSubmit }>0</span>
	<span id="TestStorageOptionRemoteStorageDispatchSubmitValue">{ TestStorageOptionRemoteStorageDispatchSubmitValue }</span>
</p>
