<script>
import { OLSKLocalized } from 'OLSKInternational';

import OSWOptionRemoteStorage from '../OSWOptionRemoteStorage/main.svelte'
import OSWOptionRemoteStorageIcon from '../_shared/icons/OSWOptionRemoteStorage.svelte'

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

const mod = {

	// INTERFACE

	InterfaceRemoteStorageButtonDidClick () {},

	// MESSAGE

	StorageOptionRemoteStorageDispatchSubmit(inputData) {
		dispatch('OSWStorageOptionsDelegateConnect', inputData.detail)
	},

};
</script>

<div class="OSWStorageOptions">

<h1 class="OSWStorageOptionsHeading">{ OLSKLocalized('OSWStorageOptionsHeadingText') }</h1>

<OSWOptionRemoteStorage on:StorageOptionRemoteStorageDispatchSubmit={ mod.StorageOptionRemoteStorageDispatchSubmit } />

</div>

<style src="./ui-style.css"></style>
