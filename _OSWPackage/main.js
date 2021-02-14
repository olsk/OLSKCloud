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

	_ValueBackendDelegate: undefined,
	ValueBackendDelegate (inputData) {
		if (typeof inputData === 'undefined') {
			return mod._ValueBackendDelegate
		};

		mod._ValueBackendDelegate = inputData;
	},

	_ValueBackendIconMap: undefined,
	ValueBackendIconMap (inputData) {
		if (typeof inputData === 'undefined') {
			return mod._ValueBackendIconMap
		};

		mod._ValueBackendIconMap = inputData;
	},

	// CONTROL

	ControlInstanceCreate () {
		if (mod.ValueInstance()) {
			mod.ControlInstanceDestroy();
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

		if (!mod.ValueRemoteStorage().on) {
			return
		};

		mod.ValueRemoteStorage().on('error', mod.RemoteStorageError);
		mod.ValueRemoteStorage().on('connected', mod.RemoteStorageConnected);
		mod.ValueRemoteStorage().on('disconnected', mod.RemoteStorageDisconnected);
		mod.ValueRemoteStorage().on('sync-req-done', mod.RemoteStorageSyncReqDone);
		mod.ValueRemoteStorage().on('sync-done', mod.RemoteStorageSyncDone);
		mod.ValueRemoteStorage().on('network-offline', mod.RemoteStorageNetworkOffline);
		mod.ValueRemoteStorage().on('network-online', mod.RemoteStorageNetworkOnline);
	},

	ControlInstanceDestroy () {
		mod.ValueInstance().$destroy();
		mod.ValueInstance(null)
	},

	// CONTAINER DELEGATE

	OSWStorageOptionsDelegateConnect(inputData) {
		mod.ValueRemoteStorage().connect(inputData.detail)
	},

	OSWRootDelegateRenew() {
		mod.ValueRemoteStorage().reconnect()
	},

	OSWConnectedDelegateSyncStart() {
		mod.ValueInstance().OSWRootSyncing = true;

		mod.ValueRemoteStorage().startSync()
	},

	OSWConnectedDelegateSyncStop() {
		mod.ValueRemoteStorage().stopSync()
	},

	OSWConnectedDelegateDisconnect() {
		mod.ValueRemoteStorage().disconnect()
	},

	// REMOTE STORAGE

	RemoteStorageError(event) {
		mod.ValueInstance().OSWRootRemoteStorageError = `${ event.name }: ${ event.message}`
	},

	RemoteStorageConnected() {
		mod.ValueInstance().OSWRootRemoteStorageConnected = true;
		mod.ValueInstance().OSWRootRemoteStorageConnectedAddress = mod.ValueRemoteStorage().remote.userAddress;

		if (mod.ValueBackendDelegate()) {
			mod.ValueBackendDelegate()(mod.ValueBackendIconMap()[mod.ValueRemoteStorage().backend]);
		};
	},

	RemoteStorageDisconnected() {
		mod.ValueInstance().OSWRootRemoteStorageError = '';
		mod.ValueInstance().OSWRootRemoteStorageConnected = false;

		if (mod.ValueBackendDelegate()) {
			mod.ValueBackendDelegate()(null);
		};
	},

	RemoteStorageSyncReqDone() {
		mod.ValueInstance().OSWRootSyncing = true;
	},

	RemoteStorageSyncDone() {
		mod.ValueInstance().OSWRootSyncing = false;
	},

	RemoteStorageNetworkOffline() {
		mod.ValueInstance().OSWRootRemoteStorageNetworkOffline = true;
	},

	RemoteStorageNetworkOnline() {
		mod.ValueInstance().OSWRootRemoteStorageNetworkOffline = false;
		mod.ValueInstance().OSWRootRemoteStorageError = '';
	},

};

Object.assign(exports, mod);
