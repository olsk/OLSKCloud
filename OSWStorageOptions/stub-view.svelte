<script>
import Module from './main.svelte';

let TestOSWStorageOptionsDelegateConnect;
let TestOSWStorageOptionsDelegateConnectDetail;
const mod = {

	TestOSWStorageOptionsDelegateConnect(inputData) {
		TestOSWStorageOptionsDelegateConnect.innerHTML = parseInt(TestOSWStorageOptionsDelegateConnect.innerHTML) + 1;

		TestOSWStorageOptionsDelegateConnectDetail = inputData.detail;
	},
	
};
</script>

<Module
	on:OSWStorageOptionsDelegateConnect={ mod.TestOSWStorageOptionsDelegateConnect }
	{...Object.fromEntries((new window.URLSearchParams(window.location.search)).entries())}
/>

<p>
	<strong>OSWStorageOptionsDelegateConnect</strong>
	<span id="TestOSWStorageOptionsDelegateConnect" bind:this={ TestOSWStorageOptionsDelegateConnect }>0</span>
	<span id="TestOSWStorageOptionsDelegateConnectDetail">{ TestOSWStorageOptionsDelegateConnectDetail }</span>
</p>
