<script>
import { OLSKLocalized } from '../_shared/_common/global.js';

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

const mod = {

	// VALUE

	_ValueAddress: '',

	// INTERFACE

	InterfaceFormDidSubmit (event) {
		event.preventDefault();

		dispatch('StorageOptionRemoteStorageDispatchSubmit', mod._ValueAddress)
	},

};
</script>

<div class="OSWOptionRemoteStorage">

<form on:submit={ mod.InterfaceFormDidSubmit }>
	<input class="OSWOptionRemoteStorageAddressField" type="email" autofocus required placeholder="example@5apps.com" bind:value={ mod._ValueAddress } />

	<button class="OSWOptionRemoteStorageConnectButton" on:click={ mod.InterfaceFormDidSubmit }>{ OLSKLocalized('OSWOptionRemoteStorageConnectButtonText') }</button>
</form>

<br>

<a class="OSWOptionRemoteStorageHelpAnchor" href="https://remotestorage.io/get/" target="_blank">{ OLSKLocalized('OSWOptionRemoteStorageHelpAnchorText') }</a>

</div>

<style src="./ui-style.css"></style>
