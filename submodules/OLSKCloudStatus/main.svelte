<script>
export let OLSKCloudStatusIdentityText;
export let OLSKCloudStatusIsSyncing;
export let OLSKCloudStatusDispatchSyncStart;
export let OLSKCloudStatusDispatchSyncStop;
export let OLSKCloudStatusDispatchDisconnect;

import { OLSKLocalized } from 'OLSKInternational';

const mod = {

	// INTERFACE

	InterfaceDisconnectButtonDidClick () {
		OLSKCloudStatusDispatchDisconnect();
	},

};
import _OLSKSharedSyncStart from '../../node_modules/OLSKUIAssets/_OLSKSharedSyncStart.svg';
import _OLSKSharedSyncStop from '../../node_modules/OLSKUIAssets/_OLSKSharedSyncStop.svg';
import _OLSKSharedStorageDisconnect from '../../node_modules/OLSKUIAssets/_OLSKSharedStorageDisconnect.svg';
</script>

<div class="OLSKCloudStatus">

<strong class="OLSKCloudStatusIdentity">{ OLSKCloudStatusIdentityText }</strong>

{#if !OLSKCloudStatusIsSyncing }
	<button class="OLSKCloudStatusSyncStartButton OLSKDecorButtonNoStyle OLSKDecorTappable OLSKToolbarButton" title={ OLSKLocalized('OLSKCloudStatusSyncStartButtonText') } on:click={ OLSKCloudStatusDispatchSyncStart }>
		<div class="OLSKCloudStatusSyncStartButtonImage">{@html _OLSKSharedSyncStart }</div>
	</button>
{/if}

{#if OLSKCloudStatusIsSyncing }
	<button class="OLSKCloudStatusSyncStopButton OLSKDecorButtonNoStyle OLSKDecorTappable OLSKToolbarButton" title={ OLSKLocalized('OLSKCloudStatusSyncStopButtonText') } on:click={ OLSKCloudStatusDispatchSyncStop }>
		<div class="OLSKCloudStatusSyncStopButtonImage">{@html _OLSKSharedSyncStop }</div>
	</button>
{/if}

<button class="OLSKCloudStatusDisconnectButton OLSKDecorButtonNoStyle OLSKDecorTappable OLSKToolbarButton" title={ OLSKLocalized('OLSKCloudStatusDisconnectButtonText') } on:click={ () => window.confirm(OLSKLocalized('OLSKCloudStatusDisconnectConfirmText')) && mod.InterfaceDisconnectButtonDidClick() }>
	<div class="OLSKCloudStatusDisconnectButtonImage">{@html _OLSKSharedStorageDisconnect }</div>
</button>

</div>
