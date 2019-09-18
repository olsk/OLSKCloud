<script>
import Module from './main.svelte';

const mod = {
	
	_TestOSWConnectedDelegateSyncStart: undefined,
	TestOSWConnectedDelegateSyncStart(inputData) {
		TestOSWConnectedDelegateSyncStart.innerHTML = parseInt(TestOSWConnectedDelegateSyncStart.innerHTML) + 1;
	},
	
	_TestOSWConnectedDelegateSyncStop: undefined,
	TestOSWConnectedDelegateSyncStop(inputData) {
		TestOSWConnectedDelegateSyncStop.innerHTML = parseInt(TestOSWConnectedDelegateSyncStop.innerHTML) + 1;
	},
	
	_TestOSWConnectedDelegateDisconnect: undefined,
	TestOSWConnectedDelegateDisconnect(inputData) {
		TestOSWConnectedDelegateDisconnect.innerHTML = parseInt(TestOSWConnectedDelegateDisconnect.innerHTML) + 1;
	},
	
};
</script>

<Module
	on:OSWConnectedDelegateSyncStart={ mod.TestOSWConnectedDelegateSyncStart }
	on:OSWConnectedDelegateSyncStop={ mod.TestOSWConnectedDelegateSyncStop }
	on:OSWConnectedDelegateDisconnect={ mod.TestOSWConnectedDelegateDisconnect }
	{...Object.fromEntries((new window.URLSearchParams(window.location.search)).entries())}
/>

<p>
	<strong>TestOSWConnectedDelegateSyncStart</strong>
	<span id="TestOSWConnectedDelegateSyncStart" bind:this={ mod._TestOSWConnectedDelegateSyncStart }>0</span>
</p>

<p>
	<strong>TestOSWConnectedDelegateSyncStop</strong>
	<span id="TestOSWConnectedDelegateSyncStop" bind:this={ mod._TestOSWConnectedDelegateSyncStop }>0</span>
</p>

<p>
	<strong>TestOSWConnectedDelegateDisconnect</strong>
	<span id="TestOSWConnectedDelegateDisconnect" bind:this={ mod._TestOSWConnectedDelegateDisconnect }>0</span>
</p>
