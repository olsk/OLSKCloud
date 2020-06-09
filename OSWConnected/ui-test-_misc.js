const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OSWConnected_Misc', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	context('OSWConnectedSyncButton', function test_OSWConnectedSyncButton () {
		
		before(function () {
			browser.assert.text('#TestOSWConnectedDelegateSyncStart', '0')
			browser.assert.className(OSWConnectedSyncButton, 'OSWConnectedSyncButton')

			browser.click(OSWConnectedSyncButton)

		});

		it('sends OSWConnectedDelegateSyncStart', function () {
			browser.assert.text('#TestOSWConnectedDelegateSyncStart', '1')
		});
	
	});

	context('OSWConnectedDisconnectButton', function test_OSWConnectedDisconnectButton () {

		before(function () {
			browser.assert.text('#TestOSWConnectedDelegateDisconnect', '0')
			
			browser.click(OSWConnectedDisconnectButton)
		});
		
		it('sends OSWConnectedDelegateDisconnect', function () {
			browser.assert.text('#TestOSWConnectedDelegateDisconnect', '1')
		});
	
	});

	context('OSWConnectedAddress', function test_OSWConnectedAddress () {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OSWConnectedAddress: 'alfa',
			});
		});

		it('sends OSWConnectedDelegateSyncStop', function () {
			browser.assert.text(OSWConnectedAddress, 'alfa')
		});
	
	});

	context('OSWConnectedSyncButtonSyncing', function test_OSWConnectedSyncButtonSyncing () {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OSWConnectedSyncButtonSyncing: true,
			});
		});
		
		before(function() {
			browser.assert.text('#TestOSWConnectedDelegateSyncStop', '0')
		});

		it('classes OSWConnectedSyncButtonSyncing', function () {
			browser.assert.hasClass(OSWConnectedSyncButton, 'OSWConnectedSyncButtonSyncing')
		});

		it('sends OSWConnectedDelegateSyncStop', function () {
			browser.click(OSWConnectedSyncButton)
			browser.assert.text('#TestOSWConnectedDelegateSyncStop', '1')
		});
	
	});
	
});
