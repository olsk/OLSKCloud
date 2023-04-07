const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKCloudStatus_Misc', function () {

	const OLSKCloudStatusIdentityText = Math.random().toString();

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			OLSKCloudStatusIdentityText,
		});
	});

	describe('OLSKCloudStatusIdentity', function test_OLSKCloudStatusIdentity () {

		it('binds OLSKCloudStatusIdentityText', function () {
			return browser.assert.text(OLSKCloudStatusIdentity, OLSKCloudStatusIdentityText);
		});
	
	});

	describe('OLSKCloudStatusSyncStartButton', function test_OLSKCloudStatusSyncStartButton () {
		
		it('classes OLSKDecorButtonNoStyle', function () {
			return browser.assert.hasClass(OLSKCloudStatusSyncStartButton, 'OLSKDecorButtonNoStyle');
		});

		it('classes OLSKDecorTappable', function () {
			return browser.assert.hasClass(OLSKCloudStatusSyncStartButton, 'OLSKDecorTappable');
		});

		it('classes OLSKToolbarButton', function () {
			return browser.assert.hasClass(OLSKCloudStatusSyncStartButton, 'OLSKToolbarButton');
		});
		
		context('click', function () {
			
			before(function () {
				return browser.assert.text('#TestOLSKCloudStatusDispatchSyncStart', '0');
			});

			before(function () {
				browser.pressButton(OLSKCloudStatusSyncStartButton);
			});

			it('sends OLSKCloudStatusDispatchSyncStart', function () {
				return browser.assert.text('#TestOLSKCloudStatusDispatchSyncStart', '1')
			});
		
		});
	
	});

	describe('OLSKCloudStatusSyncStartButtonImage', function test_OLSKCloudStatusSyncStartButtonImage () {

		it('sets src', function () {
			return browser.assert.elements(`${ OLSKCloudStatusSyncStartButtonImage } #_OLSKSharedSyncStart`, 1);
		});
	
	});

	describe('OLSKCloudStatusSyncStopButton', function test_OLSKCloudStatusSyncStopButton () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKCloudStatusIsSyncing: true,
			});
		});
		
		it('classes OLSKDecorButtonNoStyle', function () {
			return browser.assert.hasClass(OLSKCloudStatusSyncStopButton, 'OLSKDecorButtonNoStyle');
		});

		it('classes OLSKDecorTappable', function () {
			return browser.assert.hasClass(OLSKCloudStatusSyncStopButton, 'OLSKDecorTappable');
		});

		it('classes OLSKToolbarButton', function () {
			return browser.assert.hasClass(OLSKCloudStatusSyncStopButton, 'OLSKToolbarButton');
		});
		
		context('click', function () {
			
			before(function () {
				return browser.assert.text('#TestOLSKCloudStatusDispatchSyncStop', '0');
			});

			before(function () {
				browser.pressButton(OLSKCloudStatusSyncStopButton);
			});

			it('sends OLSKCloudStatusDispatchSyncStop', function () {
				return browser.assert.text('#TestOLSKCloudStatusDispatchSyncStop', '1')
			});
		
		});
	
	});

	describe('OLSKCloudStatusSyncStopButtonImage', function test_OLSKCloudStatusSyncStopButtonImage () {

		it('sets src', function () {
			return browser.assert.elements(`${ OLSKCloudStatusSyncStopButtonImage } #_OLSKSharedSyncStop`, 1);
		});
	
	});

	describe('OLSKCloudStatusDisconnectButton', function test_OLSKCloudStatusDisconnectButton () {

		it('classes OLSKDecorButtonNoStyle', function () {
			return browser.assert.hasClass(OLSKCloudStatusDisconnectButton, 'OLSKDecorButtonNoStyle');
		});

		it('classes OLSKDecorTappable', function () {
			return browser.assert.hasClass(OLSKCloudStatusDisconnectButton, 'OLSKDecorTappable');
		});

		it('classes OLSKToolbarButton', function () {
			return browser.assert.hasClass(OLSKCloudStatusDisconnectButton, 'OLSKToolbarButton');
		});
		
		context('click', function () {
			
			before(function () {
				return browser.assert.text('#TestOLSKCloudStatusDispatchDisconnect', '0');
			});

			before(function () {
				if (process.env.OLSK_SPEC_PLAYWRIGHT === 'true') {
					page.once('dialog', dialog => dialog.accept());
				}
				return browser.pressButton(OLSKCloudStatusDisconnectButton);
			});

			it('sends OLSKCloudStatusDispatchDisconnect', function () {
				return browser.assert.text('#TestOLSKCloudStatusDispatchDisconnect', '1')
			});
		
		});

	});

	describe('OLSKCloudStatusDisconnectButtonImage', function test_OLSKCloudStatusDisconnectButtonImage () {

		it('sets src', function () {
			return browser.assert.elements(`${ OLSKCloudStatusDisconnectButtonImage } #_OLSKSharedStorageDisconnect`, 1);
		});
	
	});
	
});
