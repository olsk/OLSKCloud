<script>
import { OLSKLocalized } from '../_shared/_common/global.js';

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

const mod = {

	// INTERFACE

	InterfaceDisconnectButtonDidClick () {
		dispatch('OSWConnectedDelegateDisconnect')
	},

};
</script>

<div class="OSWConnected">

<button class="OSWConnectedDisconnectButton" on:click={ mod.InterfaceDisconnectButtonDidClick }>{ OLSKLocalized('OSWConnectedDisconnectButtonText') }</button>

</div>

<style src="./ui-style.css"></style>
