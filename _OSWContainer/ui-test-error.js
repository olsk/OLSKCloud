import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OSWContainerRemoteStorageError', function () {

	before(function() {
		return browser.visit(`${ kDefaultRoute.OLSKRoutePath }?OSWContainerRemoteStorageError=alfa`);
	});

	it('shows message', function () {
		browser.assert.text(OSWContainerRemoteStorageError, 'alfa')
	});

});
