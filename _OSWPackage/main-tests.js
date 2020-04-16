const { throws, deepEqual } = require('assert');

const mainModule = require('./main.js');

const kTesting = {
	StubAppClass: function() {
		return function Alfa (type) {
			this.$destroy = function () {};
		};
	},
};

describe('ControlInstanceCreate', function test_ControlInstanceCreate() {

	beforeEach(function () {
		mainModule.ValueClass(kTesting.StubAppClass());

		deepEqual(mainModule.ValueInstance(), undefined);
	});

	afterEach(function () {
		mainModule.ControlInstanceDestroy();
	});

	it('sets ValueInstance', function() {
		mainModule.ControlInstanceCreate();
		deepEqual(typeof mainModule.ValueInstance(), 'object');
	});

	context('APIDropbox', function () {
		
		before(function () {
			mainModule.ValueRemoteStorage({
				apiKeys: {
					dropbox: 'alfa',
				},
			});
		});

		it('sets OSWRoot state', function() {
			mainModule.ControlInstanceCreate()

			deepEqual(mainModule.ValueInstance().OSWRootDropboxIsEnabled, true);
		});

	});

	context('APIGoogleDrive', function () {
		
		before(function () {
			mainModule.ValueRemoteStorage({
				apiKeys: {
					googledrive: 'alfa',
				},
			});
		});

		it('sets OSWRoot state', function() {
			mainModule.ControlInstanceCreate()

			deepEqual(mainModule.ValueInstance().OSWRootGoogleDriveIsEnabled, true);
		});

	});

});

describe('ControlInstanceDestroy', function test_ControlInstanceDestroy() {

	before(function () {
		mainModule.ValueClass(kTesting.StubAppClass());

		mainModule.ControlInstanceCreate();
	});

	it('sets ValueInstance', function() {
		mainModule.ControlInstanceDestroy();
		deepEqual(mainModule.ValueInstance(), null);
	});

});

describe('OSWStorageOptionsDelegateConnect', function test_OSWStorageOptionsDelegateConnect() {

	let item;

	before(function () {
		mainModule.ValueRemoteStorage({
			connect (inputData) {
				item = inputData
			},
		});
	});

	it('calls remotestorage', function() {
		mainModule.OSWStorageOptionsDelegateConnect({
			detail: 'alfa',
		})
		deepEqual(item, 'alfa');
	});

	context('OSWStorageOptionsDropbox', function () {

		before(function () {
			mainModule.ValueRemoteStorage({
				dropbox: {
					connect () {
						item = true
					},
				},
			});
		});

		it('calls remotestorage', function() {
			mainModule.OSWStorageOptionsDelegateConnect({
				detail: 'OSWStorageOptionsDropbox',
			})
			deepEqual(item, true);
		});
	
	});

	context('OSWStorageOptionsGoogleDrive', function () {

		before(function () {
			mainModule.ValueRemoteStorage({
				googledrive: {
					connect () {
						item = true
					},
				},
			});
		});

		it('calls remotestorage', function() {
			mainModule.OSWStorageOptionsDelegateConnect({
				detail: 'OSWStorageOptionsGoogleDrive',
			})
			deepEqual(item, true);
		});
	
	});

});

describe('OSWRootDelegateRenew', function test_OSWRootDelegateRenew() {

	let item;

	before(function () {
		mainModule.ValueRemoteStorage({
			reconnect () {
				item = true
			},
		});
	});

	it('calls remotestorage', function() {
		mainModule.OSWRootDelegateRenew()
		deepEqual(item, true);
	});

});

describe('OSWConnectedDelegateSyncStart', function test_OSWConnectedDelegateSyncStart() {

	let item = {};

	before(function () {
		mainModule.ValueInstance(item);

		mainModule.ValueRemoteStorage({
			startSync () {
				item.alfa = true
			},
		});
		
		mainModule.OSWConnectedDelegateSyncStart()
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
		mainModule.ValueRemoteStorage({
			stopSync () {
				item = true
			},
		});
	});

	it('calls remotestorage', function() {
		mainModule.OSWConnectedDelegateSyncStop()
		deepEqual(item, true);
	});

});

describe('OSWConnectedDelegateDisconnect', function test_OSWConnectedDelegateDisconnect() {

	let item;

	before(function () {
		mainModule.ValueRemoteStorage({
			disconnect () {
				item = true
			},
		});
	});

	it('calls remotestorage', function() {
		mainModule.OSWConnectedDelegateDisconnect()
		deepEqual(item, true);
	});

});

describe('RemoteStorageError', function test_RemoteStorageError() {

	let item = {};

	before(function () {
		mainModule.ValueInstance(item);
	});

	it('sets OSWRoot state', function() {
		mainModule.RemoteStorageError({
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
		mainModule.ValueInstance(item);

		mainModule.ValueRemoteStorage({
			remote: {
				userAddress: 'alfa'
			},
		});
	});

	it('sets OSWRoot state', function() {
		mainModule.RemoteStorageConnected();

		deepEqual(item, {
			OSWRootRemoteStorageConnected: true,
			OSWRootRemoteStorageConnectedAddress: 'alfa',
		});
	});

	it('calls ValueBackendDelegate', function() {
		let item;

		mainModule.ValueBackendIconMap({
			alfa: 'bravo',
		});
		mainModule.ValueRemoteStorage({
			backend: 'alfa',
			remote: {}
		});
		mainModule.ValueBackendDelegate(function (inputData) {
			item = inputData;
		});

		mainModule.RemoteStorageConnected();

		deepEqual(item, 'bravo');
	});

});

describe('RemoteStorageDisconnected', function test_RemoteStorageDisconnected() {

	let item = {};

	before(function () {
		mainModule.ValueInstance(item);
	});

	it('sets OSWRoot state', function() {
		mainModule.RemoteStorageDisconnected();

		deepEqual(item, {
			OSWRootRemoteStorageConnected: false,
			OSWRootRemoteStorageError: '',
		});
	});

	it('calls ValueBackendDelegate', function() {
		let item;

		mainModule.ValueBackendDelegate(function (inputData) {
			item = inputData;
		});

		mainModule.RemoteStorageDisconnected();

		deepEqual(item, null);
	});

});

describe('RemoteStorageSyncReqDone', function test_RemoteStorageSyncReqDone() {

	let item = {};

	before(function () {
		mainModule.ValueInstance(item);
	});

	it('sets OSWRoot state', function() {
		mainModule.RemoteStorageSyncReqDone();

		deepEqual(item, {
			OSWRootSyncing: true,
		});
	});

});

describe('RemoteStorageSyncDone', function test_RemoteStorageSyncDone() {

	let item = {};

	before(function () {
		mainModule.ValueInstance(item);
	});

	it('sets OSWRoot state', function() {
		mainModule.RemoteStorageSyncDone();

		deepEqual(item, {
			OSWRootSyncing: false,
		});
	});

});

describe('RemoteStorageNetworkOffline', function test_RemoteStorageNetworkOffline() {

	let item = {};

	before(function () {
		mainModule.ValueInstance(item);
	});

	it('sets OSWRoot state', function() {
		mainModule.RemoteStorageNetworkOffline();

		deepEqual(item, {
			OSWRootRemoteStorageNetworkOffline: true,
		});
	});

});

describe('RemoteStorageNetworkOnline', function test_RemoteStorageNetworkOnline() {

	let item = {};

	before(function () {
		mainModule.ValueInstance(item);
	});

	it('sets OSWRoot state', function() {
		mainModule.RemoteStorageNetworkOnline();

		deepEqual(item, {
			OSWRootRemoteStorageNetworkOffline: false,
			OSWRootRemoteStorageError: '',
		});
	});

});
