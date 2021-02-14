<script>
export let OLSKCloudFormDispatchSubmit;

import { OLSKLocalized } from 'OLSKInternational';

const mod = {

	// VALUE

	_ValueAddress: '',

	// INTERFACE

	InterfaceFormDidSubmit (event) {
		event.preventDefault();

		OLSKCloudFormDispatchSubmit(mod._ValueAddress);
	},

};
</script>

<form class="OLSKCloudForm" on:submit={ mod.InterfaceFormDidSubmit }>
	
<input class="OLSKCloudFormAddressField" type="email" autofocus required placeholder="example@5apps.com" bind:value={ mod._ValueAddress } />

<button class="OLSKCloudFormConnectButton" on:click={ mod.InterfaceFormDidSubmit } disabled={ mod._ValueAddress.length ? null : true }>{ OLSKLocalized('OLSKCloudFormConnectButtonText') }</button>

<a class="OLSKCloudFormRegisterLink" href="https://5apps.com/users/sign_up?site=storage" target="_blank">{ OLSKLocalized('OLSKCloudFormRegisterLinkText') }</a>

</form>
