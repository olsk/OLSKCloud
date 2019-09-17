<script>
export let OSWStorageOptionsDropboxIsDisabled = false;

import { OLSKLocalized } from '../_shared/_common/global.js';

import OSWOptionRemoteStorage from '../OSWOptionRemoteStorage/main.svelte'

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

const mod = {

	// MESSAGE

	StorageOptionRemoteStorageDispatchSubmit(inputData) {
		dispatch('OSWContainerDelegateSelect', inputData.detail)
	},

	// VALUE

	_ValueOptionRemoteStorage: false,
	ValueOptionRemoteStorage(inputData) {
		if (typeof inputData === 'undefined') {
			return mod._ValueOptionRemoteStorage;
		};

		mod._ValueOptionRemoteStorage = inputData;
	},

	// INTERFACE

	InterfaceRemoteStorageButtonDidClick () {
		mod.ValueOptionRemoteStorage(true);
	},

};
</script>

<div class="OSWStorageOptions">

<h1 class="OSWStorageOptionsHeading">{ OLSKLocalized('OSWStorageOptionsHeadingText') }</h1>

{#if !mod.ValueOptionRemoteStorage()}
	<p>
		<span class="OSWStorageOptionsDescription">{ OLSKLocalized('OSWStorageOptionsDescriptionText') }</span>
		<a class="OSWStorageOptionsAnchor" href="https://remotestorage.io/">{ OLSKLocalized('OSWStorageOptionsAnchorText') }</a>
	</p>

	<button class="OSWStorageOptionsButtonRemoteStorage" on:click={ mod.InterfaceRemoteStorageButtonDidClick }>{ OLSKLocalized('OSWStorageOptionsButtonRemoteStorageText') }</button>

	{#if !OSWStorageOptionsDropboxIsDisabled}
		<button class="OSWStorageOptionsButtonDropbox">{ OLSKLocalized('OSWStorageOptionsButtonDropboxText') }</button>		
	{/if}

	<button class="OSWStorageOptionsButtonGoogleDrive">{ OLSKLocalized('OSWStorageOptionsButtonGoogleDriveText') }</button>
{/if}

{#if mod.ValueOptionRemoteStorage()}
	<OSWOptionRemoteStorage on:StorageOptionRemoteStorageDispatchSubmit={ mod.StorageOptionRemoteStorageDispatchSubmit } />
{/if}

</div>

<style src="./ui-style.css"></style>
