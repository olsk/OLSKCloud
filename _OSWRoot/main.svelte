<script>
export let OSWRootDropboxIsEnabled = false;
export let OSWRootGoogleDriveIsEnabled = false;

export let ContainerDelegate;

export let OSWRootRemoteStorageError = '';
export let OSWRootRemoteStorageConnected = false;
export let OSWRootRemoteStorageConnectedAddress = '';
export let OSWRootRemoteStorageNetworkOffline = false;
export let OSWRootSyncing = false;

import { OLSKLocalized } from 'OLSKInternational';

import OSWStorageOptions from '../OSWStorageOptions/main.svelte'
import OSWConnected from '../OSWConnected/main.svelte'
</script>
<svelte:options accessors={true} />

<div class="OSWRoot">

{#if OSWRootRemoteStorageNetworkOffline}
	<div class="OSWRootRemoteStorageNetworkOfflineAlert">{ OLSKLocalized('OSWRootRemoteStorageNetworkOfflineAlertText') }</div>
{/if}

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
	OSWConnectedAddress={ OSWRootRemoteStorageConnectedAddress }
	OSWConnectedSyncButtonSyncing={ OSWRootSyncing }
	on:OSWConnectedDelegateSyncStart={ ContainerDelegate.OSWConnectedDelegateSyncStart }
	on:OSWConnectedDelegateSyncStop={ ContainerDelegate.OSWConnectedDelegateSyncStop }
	on:OSWConnectedDelegateDisconnect={ ContainerDelegate.OSWConnectedDelegateDisconnect }
	/>
{/if}

</div>

<style src="./ui-style.css"></style>
