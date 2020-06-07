<script>
export let StorageClient;

const mod = {

	// SETUP

	SetupEverything () {
		mod.SetupStorageWidget();
	},

	SetupStorageWidget () {
		(new window.OLSKStorageWidget(StorageClient)).attach('OLSK_STORAGE_WIDGET').backend(document.querySelector('.OLSKAppToolbarStorageButton'));
	},

	// LIFECYCLE

	LifecycleModuleWillMount() {
		mod.SetupEverything();
	},

};

import { onMount } from 'svelte';
onMount(mod.LifecycleModuleWillMount);
</script>

<div id="OLSK_STORAGE_WIDGET"></div>

<style global src="./__compiled/OLSKStorageWidget.css"></style>
