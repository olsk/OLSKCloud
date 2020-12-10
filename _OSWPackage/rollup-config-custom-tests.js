const { throws, deepEqual } = require('assert');

const mod = require('./rollup-config-custom.js');

describe('OSWPackageRollupConfigCustom', function test_OSWPackageRollupConfigCustom() {

	it('throws error if not object', function() {
		throws(function() {
			mod.OSWPackageRollupConfigCustom(null);
		}, /OSWErrorInputNotValid/);
	})

	it('sets output.name', function() {
		deepEqual(mod.OSWPackageRollupConfigCustom({
			output: {},
			plugins: [],
		}).output.name, 'OLSKStorageWidget');
	});

	it('sets output.file', function() {
		deepEqual(mod.OSWPackageRollupConfigCustom({
			output: {},
			plugins: [],
		}).output.file, require('path').join(__dirname, '__compiled/OLSKStorageWidget.js'));
	});

});
