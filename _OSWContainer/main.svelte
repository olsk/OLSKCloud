<script>
export let ContainerDelegate;

export let OSWContainerRemoteStorageError = '';
export let OSWContainerRemoteStorageDidConnect = false;

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

{#if !OSWContainerRemoteStorageDidConnect}
	<OSWStorageOptions on:StorageOptionsDispatchSelect={ ContainerDelegate.StorageOptionsDispatchSelect } OSWContainerRemoteStorageError={ mod.OSWContainerRemoteStorageError } />
{/if}

</div>

<style src="./ui-style.css"></style>
