<script>
export let OLSKCloudStatusIdentityText;
export let OLSKCloudStatusIsSyncing;
export let OLSKCloudStatusDispatchSyncStart;
export let OLSKCloudStatusDispatchSyncStop;
export let OLSKCloudStatusDispatchDisconnect;

import { OLSKLocalized } from 'OLSKInternational';

import OLSKUIAssets from 'OLSKUIAssets';
</script>

<div class="OLSKCloudStatus">

<strong class="OLSKCloudStatusIdentity">{ OLSKCloudStatusIdentityText }</strong>

{#if !OLSKCloudStatusIsSyncing }
	<button class="OLSKCloudStatusSyncStartButton OLSKDecorButtonNoStyle OLSKDecorTappable OLSKToolbarButton" title={ OLSKLocalized('OLSKCloudStatusSyncStartButtonText') } on:click={ OLSKCloudStatusDispatchSyncStart }>
		<div class="OLSKCloudStatusSyncStartButtonImage">{@html OLSKUIAssets._OLSKSharedSyncStart }</div>
	</button>
{/if}

{#if OLSKCloudStatusIsSyncing }
	<button class="OLSKCloudStatusSyncStopButton OLSKDecorButtonNoStyle OLSKDecorTappable OLSKToolbarButton" title={ OLSKLocalized('OLSKCloudStatusSyncStopButtonText') } on:click={ OLSKCloudStatusDispatchSyncStop }>
		<div class="OLSKCloudStatusSyncStopButtonImage">{@html OLSKUIAssets._OLSKSharedSyncStop }</div>
	</button>
{/if}

<button class="OLSKCloudStatusDisconnectButton OLSKDecorButtonNoStyle OLSKDecorTappable OLSKToolbarButton" title={ OLSKLocalized('OLSKCloudStatusDisconnectButtonText') } on:click={ () => window.confirm(OLSKLocalized('OLSKCloudStatusDisconnectConfirmText')) && OLSKCloudStatusDispatchDisconnect() }>
	<div class="OLSKCloudStatusDisconnectButtonImage">{@html OLSKUIAssets._OLSKSharedStorageDisconnect }</div>
</button>

</div>
