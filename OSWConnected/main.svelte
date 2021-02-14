<script>
export let OSWConnectedSyncButtonSyncing = false;
export let OSWConnectedAddress = '';

import { OLSKLocalized } from 'OLSKInternational';

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

import _OLSKSharedSyncStart from '../_shared/__external/OLSKUIAssets/_OLSKSharedSyncStart.svg';
import _OLSKSharedSyncStop from '../_shared/__external/OLSKUIAssets/_OLSKSharedSyncStop.svg';
import _OLSKSharedStorageDisconnect from '../_shared/__external/OLSKUIAssets/_OLSKSharedStorageDisconnect.svg';
</script>

<div class="OSWConnected">

<strong class="OSWConnectedAddress">{ OSWConnectedAddress }</strong>

<button class="OSWConnectedSyncButton OLSKDecorButtonNoStyle OLSKDecorTappable OLSKToolbarButton" title={ OSWConnectedSyncButtonSyncing ? OLSKLocalized('OSWConnectedSyncButtonTextStop') : OLSKLocalized('OSWConnectedSyncButtonText') } on:click={ mod.InterfaceSyncButtonDidClick } class:OSWConnectedSyncButtonSyncing={ OSWConnectedSyncButtonSyncing }>
	<div class="OSWConnectedSyncButtonImage">{@html OSWConnectedSyncButtonSyncing ? _OLSKSharedSyncStop : _OLSKSharedSyncStart }</div>
</button>

<button class="OSWConnectedDisconnectButton OLSKDecorButtonNoStyle OLSKDecorTappable OLSKToolbarButton" title={ OLSKLocalized('OSWConnectedDisconnectButtonText') } on:click={ () => window.confirm(OLSKLocalized('OSWConnectedDisconnectConfirmText')) && mod.InterfaceDisconnectButtonDidClick() }>
	<div class="OSWConnectedDisconnectButtonImage">{@html _OLSKSharedStorageDisconnect }</div>
</button>

</div>
