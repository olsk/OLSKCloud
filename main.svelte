<script>
export let OLSKCloudErrorText = null;

import OLSKCloudForm from './submodules/OLSKCloudForm/main.svelte'
import OLSKCloudStatus from './submodules/OLSKCloudStatus/main.svelte'
</script>

<div class="OLSKCloud">

{#if $$props.OLSKCloudErrorText }
	<p class="OLSKCloudError">{ OLSKCloudErrorText }</p>
{/if}

{#if !$$props.OLSKCloudStatusIdentityText }
	<OLSKCloudForm
		OLSKCloudFormDispatchSubmit={ $$props.OLSKCloudFormDispatchSubmit }
		/>
{/if}

{#if $$props.OLSKCloudStatusIdentityText }
	<OLSKCloudStatus
		OLSKCloudStatusIdentityText={ $$props.OLSKCloudStatusIdentityText }
		OLSKCloudStatusIsSyncing={ $$props.OLSKCloudStatusIsSyncing }
		OLSKCloudStatusDispatchSyncStart={ $$props.OLSKCloudStatusDispatchSyncStart }
		OLSKCloudStatusDispatchSyncStop={ $$props.OLSKCloudStatusDispatchSyncStop }
		OLSKCloudStatusDispatchDisconnect={ $$props.OLSKCloudStatusDispatchDisconnect }
		/>
{/if}
	
</div>

<style>
.OLSKCloudError {
	font-weight: bold;
}
</style>
