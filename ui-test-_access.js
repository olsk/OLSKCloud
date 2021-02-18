const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKCloud: '.OLSKCloud',

	OLSKCloudError: '.OLSKCloudError',

	OLSKCloudRenewButton: '.OLSKCloudRenewButton',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OLSKCloud_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows OLSKCloud', function () {
		browser.assert.elements(OLSKCloud, 1);
	});

	it('hides OLSKCloudError', function () {
		browser.assert.elements(OLSKCloudError, 0);
	});

	it('hides OLSKCloudRenewButton', function () {
		browser.assert.elements(OLSKCloudRenewButton, 0);
	});

	it('shows OLSKCloudForm', function () {
		browser.assert.elements('.OLSKCloudForm', 1);
	});

	it('hides OLSKCloudStatus', function () {
		browser.assert.elements('.OLSKCloudStatus', 0);
	});

	context('OLSKCloudStatusIdentityText', function () {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKCloudStatusIdentityText: Math.random().toString(),
			});
		});

		it('hides OLSKCloudForm', function () {
			browser.assert.elements('.OLSKCloudForm', 0);
		});

		it('shows OLSKCloudStatus', function () {
			browser.assert.elements('.OLSKCloudStatus', 1);
		});
	
	});

	context('OLSKCloudErrorText', function () {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKCloudErrorText: Math.random().toString(),
			});
		});

		it('shows OLSKCloudError', function () {
			browser.assert.elements(OLSKCloudError, 1);
		});

		it('hides OLSKCloudRenewButton', function () {
			browser.assert.elements(OLSKCloudRenewButton, 0);
		});

		context('Unauthorized', function () {
			
			before(function() {
				return browser.OLSKVisit(kDefaultRoute, {
					OLSKCloudErrorText: Math.random().toString() + 'Unauthorized' + Math.random().toString(),
				});
			});

			it('shows OLSKCloudError', function () {
				browser.assert.elements(OLSKCloudError, 1);
			});

			it('shows OLSKCloudRenewButton', function () {
				browser.assert.elements(OLSKCloudRenewButton, 1);
			});
		
		});

	});

});
