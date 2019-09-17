<script>
export let ContainerDelegate;

export let OSWContainerRemoteStorageError = '';
export let OSWContainerRemoteStorageConnected = false;

import { OLSKLocalized } from '../_shared/_common/global.js';

import OSWStorageOptions from '../OSWStorageOptions/main.svelte'

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
	<OSWStorageOptions on:OSWContainerDelegateSelect={ ContainerDelegate.OSWContainerDelegateSelect } OSWContainerRemoteStorageError={ mod.OSWContainerRemoteStorageError } />
{/if}

</div>

<style src="./ui-style.css"></style>
