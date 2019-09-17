<script>
export let ContainerDelegate;

import { OLSKLocalized } from '../_shared/_common/global.js';

import OSWStorageOptions from '../OSWStorageOptions/main.svelte'
</script>

<div class="OSWContainer">

<OSWStorageOptions on:StorageOptionsDispatchSelect={ ContainerDelegate.StorageOptionsDispatchSelect } />

</div>

<style src="./ui-style.css"></style>
