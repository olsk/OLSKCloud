import { throws, deepEqual } from 'assert';

import * as mainModule from './rollup-config-custom.js';

describe('OSWRootRollupConfigCustom', function testOSWRootRollupConfigCustom() {

	it('throws error if not object', function() {
		throws(function() {
			mainModule.OSWRootRollupConfigCustom(null);
		}, /OSWErrorInputNotValid/);
	})

	it('sets output.format', function() {
		deepEqual(mainModule.OSWRootRollupConfigCustom({
			output: {},
		}).output.format, 'umd');
	});

});
