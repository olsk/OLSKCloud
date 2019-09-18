import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OSWConnectedMisc', function () {

	before(function() {
		return browser.visit(kDefaultRoute.OLSKRoutePath);
	});

	context('OSWConnectedSyncButton', function testOSWConnectedSyncButton () {
		
		before(function () {
			browser.assert.text('#TestOSWConnectedDelegateSyncStart', '0')
			browser.assert.text('#TestOSWConnectedDelegateSyncStop', '0')
			browser.assert.className(OSWConnectedSyncButton, 'OSWConnectedSyncButton')
		});

		it('sends OSWConnectedDelegateSyncStart', function () {
			browser.click(OSWConnectedSyncButton)
			browser.assert.text('#TestOSWConnectedDelegateSyncStart', '1')
		});

		it('sets class', function () {
			browser.assert.hasClass(OSWConnectedSyncButton, 'OSWConnectedSyncButtonSyncing')
		});

		it('sends OSWConnectedDelegateSyncStop', function () {
			browser.click(OSWConnectedSyncButton)
			browser.assert.text('#TestOSWConnectedDelegateSyncStop', '1')
		});
	
	});

	context('OSWConnectedDisconnectButton', function testOSWConnectedDisconnectButton () {

		before(function () {
			browser.assert.text('#TestOSWConnectedDelegateDisconnect', '0')
			
			browser.click(OSWConnectedDisconnectButton)
		});
		
		it('sends OSWConnectedDelegateDisconnect', function () {
			browser.assert.text('#TestOSWConnectedDelegateDisconnect', '1')
		});
	
	});
	
});
