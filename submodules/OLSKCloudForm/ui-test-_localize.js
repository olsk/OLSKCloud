const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
	};

	describe('OLSKCloudForm_Localize-' + OLSKRoutingLanguage, function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage,
			});
		});

		it('localizes OLSKCloudFormConnectButton', function () {
			return browser.assert.text(OLSKCloudFormConnectButton, uLocalized('OLSKCloudFormConnectButtonText'))
		});

		it('localizes OLSKCloudFormRegisterLink', function () {
			return browser.assert.text(OLSKCloudFormRegisterLink, uLocalized('OLSKCloudFormRegisterLinkText'))
		});

	});

});
