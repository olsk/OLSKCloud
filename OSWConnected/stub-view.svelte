<script>
import Module from './main.svelte';

let TestOSWConnectedDelegateDisconnect;
const mod = {

	TestOSWConnectedDelegateDisconnect(inputData) {
		TestOSWConnectedDelegateDisconnect.innerHTML = parseInt(TestOSWConnectedDelegateDisconnect.innerHTML) + 1;
	},
	
};
</script>

<Module
	on:OSWConnectedDelegateDisconnect={ mod.TestOSWConnectedDelegateDisconnect }
	{...Object.fromEntries((new window.URLSearchParams(window.location.search)).entries())}
/>

<p>
	<strong>TestOSWConnectedDelegateDisconnect</strong>
	<span id="TestOSWConnectedDelegateDisconnect" bind:this={ TestOSWConnectedDelegateDisconnect }>0</span>
</p>
