<script>
export let ContainerDelegate;

export let OSWRootRemoteStorageError = '';
export let OSWRootRemoteStorageConnected = false;
export let OSWRootRemoteStorageConnectedAddress = '';
export let OSWRootRemoteStorageNetworkOffline = false;
export let OSWRootSyncing = false;

import { OLSKLocalized } from 'OLSKInternational';

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
