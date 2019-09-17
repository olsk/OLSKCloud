import { throws, deepEqual } from 'assert';

import * as mainModule from './rollup-config-custom.js';

describe('OSWContainerRollupConfigCustom', function testOSWContainerRollupConfigCustom() {

	it('throws error if not object', function() {
		throws(function() {
			mainModule.OSWContainerRollupConfigCustom(null);
		}, /OSWErrorInputInvalid/);
	})

	it('sets output.format', function() {
		deepEqual(mainModule.OSWContainerRollupConfigCustom({
			output: {},
		}).output.format, 'umd');
	});

});
