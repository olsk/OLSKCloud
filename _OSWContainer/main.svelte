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
		if (event.name !== 'DiscoveryError') {
			return;
		};

		mod.OSWStorageOptionsError = `${ event.name } ${ event.message}`
	},

};
</script>

<div class="OSWContainer">

<OSWStorageOptions on:StorageOptionsDispatchSelect={ ContainerDelegate.StorageOptionsDispatchSelect } OSWStorageOptionsError={ mod.OSWStorageOptionsError } />

</div>

<style src="./ui-style.css"></style>
