<script>
export let OSWConnectedSyncButtonSyncing = false;
export let OSWConnectedAddress = '';

import { OLSKLocalized } from '../_shared/_common/global.js';

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

const mod = {

	// INTERFACE

	InterfaceSyncButtonDidClick () {
		dispatch(OSWConnectedSyncButtonSyncing ? 'OSWConnectedDelegateSyncStop' : 'OSWConnectedDelegateSyncStart')
	},

	InterfaceDisconnectButtonDidClick () {
		dispatch('OSWConnectedDelegateDisconnect')
	},

};
</script>

<div class="OSWConnected">

<strong class="OSWConnectedAddress">{ OSWConnectedAddress }</strong>

<button class="OSWConnectedSyncButton" on:click={ mod.InterfaceSyncButtonDidClick } class:OSWConnectedSyncButtonSyncing={ OSWConnectedSyncButtonSyncing }>{ OSWConnectedSyncButtonSyncing ? OLSKLocalized('OSWConnectedSyncButtonTextStop') : OLSKLocalized('OSWConnectedSyncButtonText') }</button>

<button class="OSWConnectedDisconnectButton" on:click={ () => window.confirm(OLSKLocalized('OSWConnectedDisconnectPromptText')) && mod.InterfaceDisconnectButtonDidClick() }>{ OLSKLocalized('OSWConnectedDisconnectButtonText') }</button>

</div>

<style src="./ui-style.css"></style>
