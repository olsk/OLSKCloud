const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKCloud_Misc', function () {

	const OLSKCloudErrorText = Math.random().toString() + 'Unauthorized' + Math.random().toString();

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			OLSKCloudErrorText,
		});
	});

	describe('OLSKCloudError', function test_OLSKCloudError () {

		it('binds OLSKCloudErrorText', function () {
			browser.assert.text(OLSKCloudError, OLSKCloudErrorText);
		});
	
	});

	describe('OLSKCloudRenewButton', function test_OLSKCloudRenewButton () {		
		
		context('click', function () {
			
			before(function () {
				browser.assert.text('#TestOLSKCloudDispatchRenew', '0');
			});

			before(function () {
				browser.pressButton(OLSKCloudRenewButton);
			});

			it('sends OLSKCloudDispatchRenew', function () {
				browser.assert.text('#TestOLSKCloudDispatchRenew', '1')
			});
		
		});
	
	});
	
});
