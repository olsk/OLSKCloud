<script>
export let OSWStorageOptionsDropboxIsDisabled = false;
export let OSWStorageOptionsGoogleDriveIsDisabled = false;

import { OLSKLocalized } from '../_shared/_common/global.js';

import OSWOptionRemoteStorage from '../OSWOptionRemoteStorage/main.svelte'
import OSWOptionRemoteStorageIcon from '../_shared/icons/OSWOptionRemoteStorage.svelte'
import OSWOptionDropboxIcon from '../_shared/icons/OSWOptionDropbox.svelte'
import OSWOptionGoogleDriveIcon from '../_shared/icons/OSWOptionGoogleDrive.svelte'

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

const mod = {

	// MESSAGE

	StorageOptionRemoteStorageDispatchSubmit(inputData) {
		dispatch('OSWStorageOptionsDelegateConnect', inputData.detail)
	},

	// INTERFACE

	InterfaceRemoteStorageButtonDidClick () {
		OSWStorageOptionsDropboxIsDisabled = true;
		OSWStorageOptionsGoogleDriveIsDisabled = true;
	},

	// INTERFACE

	InterfaceDropboxButtonDidClick () {
		dispatch('OSWStorageOptionsDelegateConnect', 'OSWStorageOptionsDropbox')
	},

	InterfaceGoogleDriveButtonDidClick () {
		dispatch('OSWStorageOptionsDelegateConnect', 'OSWStorageOptionsGoogleDrive')
	},

};
</script>

<div class="OSWStorageOptions">

<h1 class="OSWStorageOptionsHeading">{ OLSKLocalized('OSWStorageOptionsHeadingText') }</h1>

{#if !(OSWStorageOptionsDropboxIsDisabled && OSWStorageOptionsGoogleDriveIsDisabled)}
	<p>
		<span class="OSWStorageOptionsDescription">{ OLSKLocalized('OSWStorageOptionsDescriptionText') }</span>
		<a class="OSWStorageOptionsAnchor" href="https://remotestorage.io/">{ OLSKLocalized('OSWStorageOptionsAnchorText') }</a>
	</p>

	<button class="OSWStorageOptionsButtonRemoteStorage OLSKLayoutButtonNoStyle" on:click={ mod.InterfaceRemoteStorageButtonDidClick }>
		<OSWOptionRemoteStorageIcon /><br>
		{ OLSKLocalized('OSWStorageOptionsButtonRemoteStorageText') }
	</button>

	{#if !OSWStorageOptionsDropboxIsDisabled}
		<button class="OSWStorageOptionsDropboxButton OLSKLayoutButtonNoStyle" on:click={ mod.InterfaceDropboxButtonDidClick }>
			<OSWOptionDropboxIcon /><br>
		{ OLSKLocalized('OSWStorageOptionsDropboxButtonText') }
		</button>
	{/if}

	{#if !OSWStorageOptionsGoogleDriveIsDisabled}
		<button class="OSWStorageOptionsGoogleDriveButton OLSKLayoutButtonNoStyle" on:click={ mod.InterfaceGoogleDriveButtonDidClick }>
			<OSWOptionGoogleDriveIcon /><br>
			{ OLSKLocalized('OSWStorageOptionsGoogleDriveButtonText') }
		</button>
	{/if}
{/if}

{#if OSWStorageOptionsDropboxIsDisabled && OSWStorageOptionsGoogleDriveIsDisabled}
	<OSWOptionRemoteStorage on:StorageOptionRemoteStorageDispatchSubmit={ mod.StorageOptionRemoteStorageDispatchSubmit } />
{/if}

</div>

<style src="./ui-style.css"></style>
