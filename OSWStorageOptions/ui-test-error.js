import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OSWStorageOptionsError', function () {

	before(function() {
		return browser.visit(`${ kDefaultRoute.OLSKRoutePath }?OSWStorageOptionsError=alfa`);
	});

	it('shows message', function () {
		browser.assert.text(OSWStorageOptionsError, 'alfa')
	});

});
