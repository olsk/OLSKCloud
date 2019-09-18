const OSWPackageValidateOptionsObject = function (inputData) {
	if (typeof inputData !== 'object' || inputData === null) {
		throw new Error('OSWErrorInputNotObject');
	}

	return true;
};

const mod = {

	// VALUE

	_ValueClass: undefined,
	ValueClass (inputData) {
		if (typeof inputData === 'undefined') {
			return mod._ValueClass
		};

		mod._ValueClass = inputData;
	},

	_ValueContainer: undefined,
	ValueContainer (inputData) {
		if (typeof inputData === 'undefined') {
			return mod._ValueContainer
		};

		mod._ValueContainer = inputData;
	},

	_ValueRemoteStorage: undefined,
	ValueRemoteStorage (inputData) {
		if (typeof inputData === 'undefined') {
			return mod._ValueRemoteStorage
		};

		mod._ValueRemoteStorage = inputData;
	},

	_ValueInstance: undefined,
	ValueInstance (inputData) {
		if (typeof inputData === 'undefined') {
			return mod._ValueInstance
		};

		mod._ValueInstance = inputData;
	},

	// COMMAND

	CommandInstanceCreate () {
		if (mod.ValueInstance()) {
			mod.CommandInstanceDestroy();
		}
		
		mod.ValueInstance(new mod._ValueClass({
			target: mod._ValueContainer,
			props: {
				ContainerDelegate: mod,
			},
		}));

		if (!mod.ValueRemoteStorage()) {
			return
		};

		mod.ValueInstance().OSWContainerDropboxIsEnabled = mod.ValueRemoteStorage().apiKeys.hasOwnProperty('dropbox');
		mod.ValueInstance().OSWContainerGoogleDriveIsEnabled = mod.ValueRemoteStorage().apiKeys.hasOwnProperty('googledrive');

		if (!mod.ValueRemoteStorage().on) {
			return
		};

		mod.ValueRemoteStorage().on('error', mod.RemoteStorageError);
		mod.ValueRemoteStorage().on('connected', mod.RemoteStorageConnected);
		mod.ValueRemoteStorage().on('disconnected', mod.RemoteStorageDisconnected);
	},

	CommandInstanceDestroy () {
		mod.ValueInstance().$destroy();
		mod.ValueInstance(null)
	},

	// CONTAINER DELEGATE

	OSWStorageOptionsDelegateSelect(inputData) {
		mod.ValueRemoteStorage().connect(inputData.detail)
	},

	OSWContainerDelegateRenew() {
		mod.ValueRemoteStorage().reconnect()
	},

	OSWSyncStatusDelegateDisconnect() {
		mod.ValueRemoteStorage().disconnect()
	},

	// REMOTE STORAGE

	RemoteStorageError(event) {
		mod.ValueInstance().OSWContainerRemoteStorageError = `${ event.name }: ${ event.message}`
	},

	RemoteStorageConnected() {
		mod.ValueInstance().OSWContainerRemoteStorageConnected = true;
	},

	RemoteStorageDisconnected() {
		mod.ValueInstance().OSWContainerRemoteStorageError = '';
		mod.ValueInstance().OSWContainerRemoteStorageConnected = false;
	},

};

export default mod;