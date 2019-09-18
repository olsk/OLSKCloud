<script>
export let OSWContainerDropboxIsEnabled = false;
export let OSWContainerGoogleDriveIsEnabled = false;

export let ContainerDelegate;

export let OSWContainerRemoteStorageError = '';
export let OSWContainerRemoteStorageConnected = false;
export let OSWContainerSyncing = false;

import { OLSKLocalized } from '../_shared/_common/global.js';

import OSWStorageOptions from '../OSWStorageOptions/main.svelte'
import OSWConnected from '../OSWConnected/main.svelte'

const mod = {
};
</script>
<svelte:options accessors={true} />

<div class="OSWContainer">

{#if OSWContainerRemoteStorageError}
	<div class="OSWContainerRemoteStorageError">{ OSWContainerRemoteStorageError }</div>
{/if}

{#if OSWContainerRemoteStorageError.match('Unauthorized')}
	<button class="OSWContainerRenewButton" on:click={ ContainerDelegate.OSWContainerDelegateRenew }>{ OLSKLocalized('OSWContainerRenewButtonText') }</button>
{/if}

{#if !OSWContainerRemoteStorageConnected}
	<OSWStorageOptions 
	
	OSWStorageOptionsDropboxIsDisabled={ !OSWContainerDropboxIsEnabled }
	OSWStorageOptionsGoogleDriveIsDisabled={ !OSWContainerGoogleDriveIsEnabled }

	on:OSWStorageOptionsDelegateConnect={ ContainerDelegate.OSWStorageOptionsDelegateConnect }
	
	/>
{/if}

{#if OSWContainerRemoteStorageConnected}
	<OSWConnected
	OSWConnectedSyncButtonSyncing={ OSWContainerSyncing }
	on:OSWConnectedDelegateSyncStart={ ContainerDelegate.OSWConnectedDelegateSyncStart }
	on:OSWConnectedDelegateSyncStop={ ContainerDelegate.OSWConnectedDelegateSyncStop }
	on:OSWConnectedDelegateDisconnect={ ContainerDelegate.OSWConnectedDelegateDisconnect }
	/>
{/if}

</div>

<style src="./ui-style.css"></style>
