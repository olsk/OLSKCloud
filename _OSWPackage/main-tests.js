const { throws, deepEqual } = require('assert');

const mod = require('./main.js');

const kTesting = {
	StubAppClass: function() {
		return function Alfa (type) {
			this.$destroy = function () {};
		};
	},
};

describe('ControlInstanceCreate', function test_ControlInstanceCreate() {

	beforeEach(function () {
		mod.ValueClass(kTesting.StubAppClass());

		deepEqual(mod.ValueInstance(), undefined);
	});

	afterEach(function () {
		mod.ControlInstanceDestroy();
	});

	it('sets ValueInstance', function() {
		mod.ControlInstanceCreate();
		deepEqual(typeof mod.ValueInstance(), 'object');
	});

	context('APIDropbox', function () {
		
		before(function () {
			mod.ValueRemoteStorage({
				apiKeys: {
					dropbox: 'alfa',
				},
			});
		});

		it('sets OSWRoot state', function() {
			mod.ControlInstanceCreate()

			deepEqual(mod.ValueInstance().OSWRootDropboxIsEnabled, true);
		});

	});

	context('APIGoogleDrive', function () {
		
		before(function () {
			mod.ValueRemoteStorage({
				apiKeys: {
					googledrive: 'alfa',
				},
			});
		});

		it('sets OSWRoot state', function() {
			mod.ControlInstanceCreate()

			deepEqual(mod.ValueInstance().OSWRootGoogleDriveIsEnabled, true);
		});

	});

});

describe('ControlInstanceDestroy', function test_ControlInstanceDestroy() {

	before(function () {
		mod.ValueClass(kTesting.StubAppClass());

		mod.ControlInstanceCreate();
	});

	it('sets ValueInstance', function() {
		mod.ControlInstanceDestroy();
		deepEqual(mod.ValueInstance(), null);
	});

});

describe('OSWStorageOptionsDelegateConnect', function test_OSWStorageOptionsDelegateConnect() {

	let item;

	before(function () {
		mod.ValueRemoteStorage({
			connect (inputData) {
				item = inputData
			},
		});
	});

	it('calls remotestorage', function() {
		mod.OSWStorageOptionsDelegateConnect({
			detail: 'alfa',
		})
		deepEqual(item, 'alfa');
	});

	context('OSWStorageOptionsDropbox', function () {

		before(function () {
			mod.ValueRemoteStorage({
				dropbox: {
					connect () {
						item = true
					},
				},
			});
		});

		it('calls remotestorage', function() {
			mod.OSWStorageOptionsDelegateConnect({
				detail: 'OSWStorageOptionsDropbox',
			})
			deepEqual(item, true);
		});
	
	});

	context('OSWStorageOptionsGoogleDrive', function () {

		before(function () {
			mod.ValueRemoteStorage({
				googledrive: {
					connect () {
						item = true
					},
				},
			});
		});

		it('calls remotestorage', function() {
			mod.OSWStorageOptionsDelegateConnect({
				detail: 'OSWStorageOptionsGoogleDrive',
			})
			deepEqual(item, true);
		});
	
	});

});

describe('OSWRootDelegateRenew', function test_OSWRootDelegateRenew() {

	let item;

	before(function () {
		mod.ValueRemoteStorage({
			reconnect () {
				item = true
			},
		});
	});

	it('calls remotestorage', function() {
		mod.OSWRootDelegateRenew()
		deepEqual(item, true);
	});

});

describe('OSWConnectedDelegateSyncStart', function test_OSWConnectedDelegateSyncStart() {

	let item = {};

	before(function () {
		mod.ValueInstance(item);

		mod.ValueRemoteStorage({
			startSync () {
				item.alfa = true
			},
		});
		
		mod.OSWConnectedDelegateSyncStart()
	});

	it('calls remotestorage', function() {
		deepEqual(item.alfa, true);
	});

	it('sets OSWRoot state', function() {
		deepEqual(item.OSWRootSyncing, true);
	});

});

describe('OSWConnectedDelegateSyncStop', function test_OSWConnectedDelegateSyncStop() {

	let item;

	before(function () {
		mod.ValueRemoteStorage({
			stopSync () {
				item = true
			},
		});
	});

	it('calls remotestorage', function() {
		mod.OSWConnectedDelegateSyncStop()
		deepEqual(item, true);
	});

});

describe('OSWConnectedDelegateDisconnect', function test_OSWConnectedDelegateDisconnect() {

	let item;

	before(function () {
		mod.ValueRemoteStorage({
			disconnect () {
				item = true
			},
		});
	});

	it('calls remotestorage', function() {
		mod.OSWConnectedDelegateDisconnect()
		deepEqual(item, true);
	});

});

describe('RemoteStorageError', function test_RemoteStorageError() {

	let item = {};

	before(function () {
		mod.ValueInstance(item);
	});

	it('sets OSWRoot state', function() {
		mod.RemoteStorageError({
			name: 'alfa',
			message: 'bravo',
		});

		deepEqual(item, {
			OSWRootRemoteStorageError: 'alfa: bravo',
		});
	});

});

describe('RemoteStorageConnected', function test_RemoteStorageConnected() {

	let item = {};

	before(function () {
		mod.ValueInstance(item);

		mod.ValueRemoteStorage({
			remote: {
				userAddress: 'alfa'
			},
		});
	});

	it('sets OSWRoot state', function() {
		mod.RemoteStorageConnected();

		deepEqual(item, {
			OSWRootRemoteStorageConnected: true,
			OSWRootRemoteStorageConnectedAddress: 'alfa',
		});
	});

	it('calls ValueBackendDelegate', function() {
		let item;

		mod.ValueBackendIconMap({
			alfa: 'bravo',
		});
		mod.ValueRemoteStorage({
			backend: 'alfa',
			remote: {}
		});
		mod.ValueBackendDelegate(function (inputData) {
			item = inputData;
		});

		mod.RemoteStorageConnected();

		deepEqual(item, 'bravo');
	});

});

describe('RemoteStorageDisconnected', function test_RemoteStorageDisconnected() {

	let item = {};

	before(function () {
		mod.ValueInstance(item);
	});

	it('sets OSWRoot state', function() {
		mod.RemoteStorageDisconnected();

		deepEqual(item, {
			OSWRootRemoteStorageConnected: false,
			OSWRootRemoteStorageError: '',
		});
	});

	it('calls ValueBackendDelegate', function() {
		let item;

		mod.ValueBackendDelegate(function (inputData) {
			item = inputData;
		});

		mod.RemoteStorageDisconnected();

		deepEqual(item, null);
	});

});

describe('RemoteStorageSyncReqDone', function test_RemoteStorageSyncReqDone() {

	let item = {};

	before(function () {
		mod.ValueInstance(item);
	});

	it('sets OSWRoot state', function() {
		mod.RemoteStorageSyncReqDone();

		deepEqual(item, {
			OSWRootSyncing: true,
		});
	});

});

describe('RemoteStorageSyncDone', function test_RemoteStorageSyncDone() {

	let item = {};

	before(function () {
		mod.ValueInstance(item);
	});

	it('sets OSWRoot state', function() {
		mod.RemoteStorageSyncDone();

		deepEqual(item, {
			OSWRootSyncing: false,
		});
	});

});

describe('RemoteStorageNetworkOffline', function test_RemoteStorageNetworkOffline() {

	let item = {};

	before(function () {
		mod.ValueInstance(item);
	});

	it('sets OSWRoot state', function() {
		mod.RemoteStorageNetworkOffline();

		deepEqual(item, {
			OSWRootRemoteStorageNetworkOffline: true,
		});
	});

});

describe('RemoteStorageNetworkOnline', function test_RemoteStorageNetworkOnline() {

	let item = {};

	before(function () {
		mod.ValueInstance(item);
	});

	it('sets OSWRoot state', function() {
		mod.RemoteStorageNetworkOnline();

		deepEqual(item, {
			OSWRootRemoteStorageNetworkOffline: false,
			OSWRootRemoteStorageError: '',
		});
	});

});
