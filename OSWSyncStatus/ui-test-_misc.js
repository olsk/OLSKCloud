import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OSWSyncStatusDisconnect', function () {

	before(function() {
		return browser.visit(kDefaultRoute.OLSKRoutePath);
	});

	before(function () {
		browser.assert.text('#TestOSWSyncStatusDelegateDisconnect', '0')

		browser.click(OSWSyncStatusDisconnectButton)
	});
	
	it('sends OSWSyncStatusDelegateDisconnect', function () {
		browser.assert.text('#TestOSWSyncStatusDelegateDisconnect', '1')
	});

});
