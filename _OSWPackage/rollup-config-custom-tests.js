const { throws, deepEqual } = require('assert');

const mainModule = require('./rollup-config-custom.js');

describe('OSWPackageRollupConfigCustom', function testOSWPackageRollupConfigCustom() {

	it('throws error if not object', function() {
		throws(function() {
			mainModule.OSWPackageRollupConfigCustom(null);
		}, /OSWErrorInputNotValid/);
	})

	it('sets output.name', function() {
		deepEqual(mainModule.OSWPackageRollupConfigCustom({
			output: {},
			plugins: [],
		}).output.name, 'OLSKStorageWidget');
	});

	it('sets output.file', function() {
		deepEqual(mainModule.OSWPackageRollupConfigCustom({
			output: {},
			plugins: [],
		}).output.file, require('path').join(__dirname, '__compiled/OLSKStorageWidget.js'));
	});

});
