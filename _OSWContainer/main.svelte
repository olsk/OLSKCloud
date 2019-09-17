<script>
export let ContainerDelegate;
export let OSWContainerRemoteStorageDidConnect = false;

import { OLSKLocalized } from '../_shared/_common/global.js';

import OSWStorageOptions from '../OSWStorageOptions/main.svelte'

const mod = {

	OSWStorageOptionsError: '',

};

export const ContainerDispatch = {

	RemoteStorageError(event) {
		if (event.name === 'DiscoveryError' || event.name === 'Unauthorized') {
			mod.OSWStorageOptionsError = `${ event.name } ${ event.message}`
			return;
		};

		console.log(event);
	},

}
</script>
<svelte:options accessors={true} />

<div class="OSWContainer">

{#if !OSWContainerRemoteStorageDidConnect}
	<OSWStorageOptions on:StorageOptionsDispatchSelect={ ContainerDelegate.StorageOptionsDispatchSelect } OSWStorageOptionsError={ mod.OSWStorageOptionsError } />
{/if}

</div>

<style src="./ui-style.css"></style>
