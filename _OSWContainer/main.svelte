<script>
export let ContainerDelegate;
export const ContainerDispatch = function (event) {
	mod.MessageContainerDispatch(event)
}

import { OLSKLocalized } from '../_shared/_common/global.js';

import OSWStorageOptions from '../OSWStorageOptions/main.svelte'

const mod = {

	OSWStorageOptionsError: '',

	// MESSAGE

	MessageContainerDispatch (event) {
		if (event.name === 'DiscoveryError' || event.name === 'Unauthorized') {
			mod.OSWStorageOptionsError = `${ event.name } ${ event.message}`
			return;
		};

		console.log(event);
	},

};
</script>

<div class="OSWContainer">

<OSWStorageOptions on:StorageOptionsDispatchSelect={ ContainerDelegate.StorageOptionsDispatchSelect } OSWStorageOptionsError={ mod.OSWStorageOptionsError } />

</div>

<style src="./ui-style.css"></style>
