import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OSWConnectedMisc', function () {

	before(function() {
		return browser.visit(kDefaultRoute.OLSKRoutePath);
	});

	context('OSWConnectedSyncButton', function testOSWConnectedSyncButton () {
		
		before(function () {
			browser.assert.text('#TestOSWConnectedDelegateSyncStart', '0')
			browser.assert.className(OSWConnectedSyncButton, 'OSWConnectedSyncButton')
			
			browser.click(OSWConnectedSyncButton)
		});

		it('sends OSWConnectedDelegateSyncStart', function () {
			browser.assert.text('#TestOSWConnectedDelegateSyncStart', '1')
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

	context('OSWConnectedSyncButtonSyncing', function testOSWConnectedSyncButtonSyncing () {

		before(function() {
			return browser.visit(`${ kDefaultRoute.OLSKRoutePath }?OSWConnectedSyncButtonSyncing=true`);
		});

		it('sets class', function () {
			browser.assert.hasClass(OSWConnectedSyncButton, 'OSWConnectedSyncButtonSyncing')
		});
	
	});
	
});
