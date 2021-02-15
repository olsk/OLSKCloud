const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKCloud_Misc', function () {

	const OLSKCloudErrorText = Math.random().toString();

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
	
});
