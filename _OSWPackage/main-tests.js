import { throws, deepEqual } from 'assert';

import mainModule from './main.js';

const kTesting = {
	StubAppClass: function() {
		return function Alfa (type) {
			this.$destroy = function () {};
		};
	},
};

describe('CommandInstanceCreate', function testCommandInstanceCreate() {

	before(function () {
		mainModule.ValueClass(kTesting.StubAppClass());
	});

	after(function () {
		mainModule.CommandInstanceDestroy();
	});

	it('returns undefined', function() {
		deepEqual(mainModule.CommandInstanceCreate(), undefined);
	});

});

describe('ValueInstance', function testValueInstance() {

	before(function () {
		mainModule.ValueClass(kTesting.StubAppClass());
	});

	it('returns undefined', function() {
		deepEqual(mainModule.ValueInstance(), undefined);
	});

	it('returns object after CommandInstanceCreate', function() {
		mainModule.CommandInstanceCreate();
		deepEqual(typeof mainModule.ValueInstance(), 'object');
	});

	it('returns null after CommandInstanceDestroy', function() {
		mainModule.CommandInstanceCreate();
		mainModule.CommandInstanceDestroy();
		deepEqual(mainModule.ValueInstance(), null);
	});

});

describe('OSWContainerDelegateSelect', function testOSWContainerDelegateSelect() {

	let item;

	before(function () {
		mainModule.ValueRemoteStorage({
			connect (inputData) {
				item = inputData
			},
		});
	});

	it('calls ValueRemoteStorage.connect', function() {
		mainModule.OSWContainerDelegateSelect({
			detail: 'alfa',
		})
		deepEqual(item, 'alfa');
	});

});

describe('OSWContainerDelegateRenew', function testOSWContainerDelegateRenew() {

	let item = false;

	before(function () {
		mainModule.ValueRemoteStorage({
			reconnect () {
				item = true
			},
		});
	});

	it('calls ValueRemoteStorage.reconnect', function() {
		mainModule.OSWContainerDelegateRenew()
		deepEqual(item, true);
	});

});

describe('RemoteStorageError', function testRemoteStorageError() {

	let item = {
		OSWContainerRemoteStorageError: '',
	};

	before(function () {
		mainModule.ValueInstance(item);
	});

	it('sets OSWContainer state', function() {
		mainModule.RemoteStorageError({
			name: 'alfa',
			message: 'bravo',
		});

		deepEqual(item, {
			OSWContainerRemoteStorageError: 'alfa: bravo',
		});
	});

});

describe('RemoteStorageDidConnect', function testRemoteStorageDidConnect() {

	let item = {
		OSWContainerRemoteStorageDidConnect: false,
	};

	before(function () {
		mainModule.ValueInstance(item);
	});

	it('sets OSWContainer state', function() {
		mainModule.RemoteStorageDidConnect();

		deepEqual(item, {
			OSWContainerRemoteStorageDidConnect: true,
		});
	});

});

describe('RemoteStorageDidDisconnect', function testRemoteStorageDidDisconnect() {

	let item = {
		OSWContainerRemoteStorageDidConnect: true,
		OSWContainerRemoteStorageError: 'alfa',
	};

	before(function () {
		mainModule.ValueInstance(item);
	});

	it('sets OSWContainer state', function() {
		mainModule.RemoteStorageDidDisconnect();

		deepEqual(item, {
			OSWContainerRemoteStorageDidConnect: false,
			OSWContainerRemoteStorageError: '',
		});
	});

});
