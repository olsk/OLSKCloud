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

<div class="OSWStorageOptionRemoteStorage">

<form on:submit={ mod.InterfaceFormDidSubmit }>
	<input class="OSWStorageOptionRemoteStorageAddressField" type="email" autofocus placeholder="example@example.com" bind:value={ mod._ValueAddress } />

	<input class="OSWStorageOptionRemoteStorageConnectButton" type="submit" on:click={ mod.InterfaceFormDidSubmit } value="{ OLSKLocalized('OSWStorageOptionRemoteStorageConnectButtonText') }" />
</form>

<br>

<a class="OSWStorageOptionRemoteStorageHelpAnchor" href="https://remotestorage.io/get/">{ OLSKLocalized('OSWStorageOptionRemoteStorageHelpAnchorText') }</a>

</div>

<style src="./ui-style.css"></style>
