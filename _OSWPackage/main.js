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

		mod.ValueRemoteStorage().on('error', mod.RemoteStorageError);
		mod.ValueRemoteStorage().on('connected', mod.RemoteStorageDidConnect);
	},

	CommandInstanceDestroy () {
		mod.ValueInstance().$destroy();
		mod.ValueInstance(null)
	},

	// CONTAINER DELEGATE

	StorageOptionsDispatchSelect(inputData) {
		mod.ValueRemoteStorage().connect(inputData.detail)
	},

	// REMOTE STORAGE

	RemoteStorageError(event) {
		mod.ValueInstance().OSWContainerRemoteStorageError = `${ event.name }: ${ event.message}`
	},

	RemoteStorageDidConnect() {
		mod.ValueInstance().OSWContainerRemoteStorageDidConnect = true;
	}

};

export default mod;