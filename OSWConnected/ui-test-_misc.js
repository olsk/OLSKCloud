const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OSWConnected_Misc', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	context('OSWConnectedSyncButton', function test_OSWConnectedSyncButton () {
		
		it('classes OLSKDecorButtonNoStyle', function () {
			browser.assert.hasClass(OSWConnectedSyncButton, 'OLSKDecorButtonNoStyle');
		});

		it('classes OLSKDecorTappable', function () {
			browser.assert.hasClass(OSWConnectedSyncButton, 'OLSKDecorTappable');
		});

		it('classes OLSKToolbarButton', function () {
			browser.assert.hasClass(OSWConnectedSyncButton, 'OLSKToolbarButton');
		});
		
		context('click', function () {
			
			before(function () {
				browser.assert.text('#TestOSWConnectedDelegateSyncStart', '0');
			});

			before(function () {
				browser.click(OSWConnectedSyncButton)
			});

			it('sends OSWConnectedDelegateSyncStart', function () {
				browser.assert.text('#TestOSWConnectedDelegateSyncStart', '1')
			});
		
		});
	
	});

	describe('OSWConnectedSyncButtonImage', function test_OSWConnectedSyncButtonImage () {

		it('sets src', function () {
			browser.assert.elements(`${ OSWConnectedSyncButtonImage } #_OLSKSharedSyncStart`, 1);
		});
	
	});

	context('OSWConnectedDisconnectButton', function test_OSWConnectedDisconnectButton () {

		it('classes OLSKDecorButtonNoStyle', function () {
			browser.assert.hasClass(OSWConnectedDisconnectButton, 'OLSKDecorButtonNoStyle');
		});

		it('classes OLSKDecorTappable', function () {
			browser.assert.hasClass(OSWConnectedDisconnectButton, 'OLSKDecorTappable');
		});

		it('classes OLSKToolbarButton', function () {
			browser.assert.hasClass(OSWConnectedDisconnectButton, 'OLSKToolbarButton');
		});
		
		context('click', function () {
			
			before(function () {
				browser.assert.text('#TestOSWConnectedDelegateDisconnect', '0');
			});

			before(function () {
				browser.click(OSWConnectedDisconnectButton)
			});

			it('sends OSWConnectedDelegateSyncStart', function () {
				browser.assert.text('#TestOSWConnectedDelegateDisconnect', '1')
			});
		
		});

	});

	describe('OSWConnectedDisconnectButtonImage', function test_OSWConnectedDisconnectButtonImage () {

		it('sets src', function () {
			browser.assert.elements(`${ OSWConnectedDisconnectButtonImage } #_OLSKSharedStorageDisconnect`, 1);
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

		describe('OSWConnectedSyncButtonImage', function test_OSWConnectedSyncButtonImage () {

			it('sets src', function () {
				browser.assert.elements(`${ OSWConnectedSyncButtonImage } #_OLSKSharedSyncStop`, 1);
			});
		
		});

		
	
	});
	
});
