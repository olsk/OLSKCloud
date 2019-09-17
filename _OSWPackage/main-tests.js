import { throws, deepEqual } from 'assert';

import * as mainModule from './main.js';

const kTesting = {
	StubAppClass: function() {
		return function Alfa (type) {
			this.$destroy = function () {};
		};
	},
};

describe('instanceCreate', function testinstanceCreate() {

	before(function () {
		mainModule.AppClass(kTesting.StubAppClass());
	});

	after(function () {
		mainModule.instanceDestroy();
	});

	it('returns undefined', function() {
		deepEqual(mainModule.instanceCreate(), undefined);
	});

});

describe('instanceExists', function testinstanceExists() {

	before(function () {
		mainModule.AppClass(kTesting.StubAppClass());
	});

	it('returns false', function() {
		deepEqual(mainModule.instanceExists(), false);
	});

	it('returns true after instanceCreate', function() {
		mainModule.instanceCreate();
		deepEqual(mainModule.instanceExists(), true);
	});

	it('returns false after instanceDestroy', function() {
		mainModule.instanceCreate();
		mainModule.instanceDestroy();
		deepEqual(mainModule.instanceExists(), false);
	});

});
