<script>
import { OLSKLocalized } from '../_shared/_common/global.js';

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

const mod = {

	// INTERFACE

	InterfaceDisconnectButtonDidClick () {
		dispatch('OSWSyncStatusDelegateDisconnect')
	},

};
</script>

<div class="OSWSyncStatus">

<button class="OSWSyncStatusDisconnectButton">{ OLSKLocalized('OSWSyncStatusDisconnectButtonText') }</button>

</div>

<style src="./ui-style.css"></style>
