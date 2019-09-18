import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OSWConnectedMisc', function () {

	before(function() {
		return browser.visit(kDefaultRoute.OLSKRoutePath);
	});

	before(function () {
		browser.assert.text('#TestOSWConnectedDelegateSyncStart', '0')
		browser.assert.text('#TestOSWConnectedDelegateDisconnect', '0')
	});
	
	it('sends OSWConnectedDelegateSyncStart', function () {
		browser.click(OSWConnectedSyncButton)
		browser.assert.text('#TestOSWConnectedDelegateSyncStart', '1')
	});
	
	it('sends OSWConnectedDelegateDisconnect', function () {
		browser.click(OSWConnectedDisconnectButton)
		browser.assert.text('#TestOSWConnectedDelegateDisconnect', '1')
	});
	
});
