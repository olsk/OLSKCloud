<script>
export let OSWRootDropboxIsEnabled = false;
export let OSWRootGoogleDriveIsEnabled = false;

export let ContainerDelegate;

export let OSWRootRemoteStorageError = '';
export let OSWRootRemoteStorageConnected = false;
export let OSWRootRemoteStorageNetworkOffline = false;
export let OSWRootSyncing = false;

import { OLSKLocalized } from '../_shared/_common/global.js';

import OSWStorageOptions from '../OSWStorageOptions/main.svelte'
import OSWConnected from '../OSWConnected/main.svelte'

const mod = {
};
</script>
<svelte:options accessors={true} />

<div class="OSWRoot" class:OSWRootNetworkOffline={ OSWRootRemoteStorageNetworkOffline }>

{#if OSWRootRemoteStorageError}
	<div class="OSWRootRemoteStorageError">{ OSWRootRemoteStorageError }</div>
{/if}

{#if OSWRootRemoteStorageError.match('Unauthorized')}
	<button class="OSWRootRenewButton" on:click={ ContainerDelegate.OSWRootDelegateRenew }>{ OLSKLocalized('OSWRootRenewButtonText') }</button>
{/if}

{#if !OSWRootRemoteStorageConnected}
	<OSWStorageOptions 
	
	OSWStorageOptionsDropboxIsDisabled={ !OSWRootDropboxIsEnabled }
	OSWStorageOptionsGoogleDriveIsDisabled={ !OSWRootGoogleDriveIsEnabled }

	on:OSWStorageOptionsDelegateConnect={ ContainerDelegate.OSWStorageOptionsDelegateConnect }
	
	/>
{/if}

{#if OSWRootRemoteStorageConnected}
	<OSWConnected
	OSWConnectedSyncButtonSyncing={ OSWRootSyncing }
	on:OSWConnectedDelegateSyncStart={ ContainerDelegate.OSWConnectedDelegateSyncStart }
	on:OSWConnectedDelegateSyncStop={ ContainerDelegate.OSWConnectedDelegateSyncStop }
	on:OSWConnectedDelegateDisconnect={ ContainerDelegate.OSWConnectedDelegateDisconnect }
	/>
{/if}

</div>

<style src="./ui-style.css"></style>
