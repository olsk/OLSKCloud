const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
	};

	describe('OLSKCloud_Localize-' + OLSKRoutingLanguage, function () {

		before(function () {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage,
				OLSKCloudErrorText: Math.random().toString() + 'Unauthorized' + Math.random().toString(),
			});
		});

		it('localizes OLSKCloudRenewButton', function () {
			return browser.assert.text(OLSKCloudRenewButton, uLocalized('OLSKCloudRenewButtonText'));
		});

	});

});
