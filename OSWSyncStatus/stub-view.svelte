<script>
import Module from './main.svelte';

let TestOSWSyncStatusDelegateDisconnect;
const mod = {

	TestOSWSyncStatusDelegateDisconnect(inputData) {
		TestOSWSyncStatusDelegateDisconnect.innerHTML = parseInt(TestOSWSyncStatusDelegateDisconnect.innerHTML) + 1;
	},
	
};
</script>

<Module
	on:OSWSyncStatusDelegateDisconnect={ mod.TestOSWSyncStatusDelegateDisconnect }
	{...Object.fromEntries((new window.URLSearchParams(window.location.search)).entries())}
/>

<p>
	<strong>TestOSWSyncStatusDelegateDisconnect</strong>
	<span id="TestOSWSyncStatusDelegateDisconnect" bind:this={ TestOSWSyncStatusDelegateDisconnect }>0</span>
</p>
