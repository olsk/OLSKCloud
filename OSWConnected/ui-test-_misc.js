import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OSWConnectedDisconnect', function () {

	before(function() {
		return browser.visit(kDefaultRoute.OLSKRoutePath);
	});

	before(function () {
		browser.assert.text('#TestOSWConnectedDelegateDisconnect', '0')

		browser.click(OSWConnectedDisconnectButton)
	});
	
	it('sends OSWConnectedDelegateDisconnect', function () {
		browser.assert.text('#TestOSWConnectedDelegateDisconnect', '1')
	});

});
