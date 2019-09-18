import mod from './main.js';

import Main from '../_OSWRoot/__compiled/ui-behaviour.js';
mod.ValueClass(Main);

import OSWIconRemoteStorage from '../_shared/icons/OSWOptionRemoteStorage.svelte';
import OSWIconDropbox from '../_shared/icons/OSWOptionDropbox.svelte';
import OSWIconGoogleDrive from '../_shared/icons/OSWOptionGoogleDrive.svelte';
mod.ValueBackendIconMap({
	remotestorage: OSWIconRemoteStorage,
	dropbox: OSWIconDropbox,
	googledrive: OSWIconGoogleDrive,
})

const Widget = function (inputData) {
	mod.ValueRemoteStorage(inputData);

	this.attach = function (inputData) {
		mod.ValueContainer(document.getElementById(inputData));
		mod.CommandInstanceCreate();

		return this
	};

	this.backend = function (inputData) {
		mod.ValueBackendDelegate(inputData)

		return this;
	}
}

export default Widget;
