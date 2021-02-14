const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKCloud: '.OLSKCloud',
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

});
