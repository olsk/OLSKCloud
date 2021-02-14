<script>
export let OSWStorageOptionsGoogleDriveIsDisabled = false;

import { OLSKLocalized } from 'OLSKInternational';

import OSWOptionRemoteStorage from '../OSWOptionRemoteStorage/main.svelte'
import OSWOptionRemoteStorageIcon from '../_shared/icons/OSWOptionRemoteStorage.svelte'
import OSWOptionGoogleDriveIcon from '../_shared/icons/OSWOptionGoogleDrive.svelte'

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

const mod = {

	// INTERFACE

	InterfaceRemoteStorageButtonDidClick () {
		OSWStorageOptionsGoogleDriveIsDisabled = true;
	},

	InterfaceGoogleDriveButtonDidClick () {
		dispatch('OSWStorageOptionsDelegateConnect', 'OSWStorageOptionsGoogleDrive')
	},

	// MESSAGE

	StorageOptionRemoteStorageDispatchSubmit(inputData) {
		dispatch('OSWStorageOptionsDelegateConnect', inputData.detail)
	},

};
</script>

<div class="OSWStorageOptions">

<h1 class="OSWStorageOptionsHeading">{ OLSKLocalized('OSWStorageOptionsHeadingText') }</h1>

{#if !(OSWStorageOptionsGoogleDriveIsDisabled)}
	<p>
		<span class="OSWStorageOptionsDescription">{ OLSKLocalized('OSWStorageOptionsDescriptionText') }</span>
		<a class="OSWStorageOptionsAnchor" href="https://remotestorage.io/" target="_blank">{ OLSKLocalized('OSWStorageOptionsAnchorText') }</a>
	</p>

	<button class="OSWStorageOptionsButtonRemoteStorage OLSKDecorButtonNoStyle OLSKDecorTappable" on:click={ mod.InterfaceRemoteStorageButtonDidClick }>
		<OSWOptionRemoteStorageIcon /><br>
		{ OLSKLocalized('OSWStorageOptionsButtonRemoteStorageText') }
	</button>

	{#if !OSWStorageOptionsGoogleDriveIsDisabled}
		<button class="OSWStorageOptionsGoogleDriveButton OLSKDecorButtonNoStyle OLSKDecorTappable" on:click={ mod.InterfaceGoogleDriveButtonDidClick }>
			<OSWOptionGoogleDriveIcon /><br>
			{ OLSKLocalized('OSWStorageOptionsGoogleDriveButtonText') }
		</button>
	{/if}
{/if}

{#if OSWStorageOptionsGoogleDriveIsDisabled}
	<OSWOptionRemoteStorage on:StorageOptionRemoteStorageDispatchSubmit={ mod.StorageOptionRemoteStorageDispatchSubmit } />
{/if}

</div>

<style src="./ui-style.css"></style>
