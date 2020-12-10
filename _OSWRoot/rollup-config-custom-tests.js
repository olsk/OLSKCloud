const { throws, deepEqual } = require('assert');

const mod = require('./rollup-config-custom.js');

describe('OSWRootRollupConfigCustom', function test_OSWRootRollupConfigCustom() {

	it('throws error if not object', function() {
		throws(function() {
			mod.OSWRootRollupConfigCustom(null);
		}, /OSWErrorInputNotValid/);
	})

	it('sets output.format', function() {
		deepEqual(mod.OSWRootRollupConfigCustom({
			output: {},
		}).output.format, 'umd');
	});

});
