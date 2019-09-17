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

describe('StorageOptionsDispatchSelect', function testStorageOptionsDispatchSelect() {

	let item;

	before(function () {
		mainModule.ValueRemoteStorage({
			connect (inputData) {
				item = inputData
			},
		});
	});

	it('calls ValueRemoteStorage.connect', function() {
		mainModule.StorageOptionsDispatchSelect({
			detail: 'alfa',
		})
		deepEqual(item, 'alfa');
	});

});

describe('RemoteStorageError', function testRemoteStorageError() {

	let item;

	before(function () {
		mainModule.ValueInstance({
			ContainerDispatch (inputData) {
				item = inputData
			},
		});
	});

	it('calls ContainerDispatch', function() {
		mainModule.RemoteStorageError({
			name: 'alfa',
			message: 'bravo',
		});

		deepEqual(item, {
			name: 'alfa',
			message: 'bravo',
		});
	});

});
