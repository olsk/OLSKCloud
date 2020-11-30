const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (languageCode) {

const uLocalized = function (inputData) {
	return OLSKTestingLocalized(inputData, languageCode);
};

describe(`OSWConnected_Localize-${ languageCode }`, function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			OLSKRoutingLanguage: languageCode,
		});
	});

	it('localizes OSWConnectedSyncButton', function () {
		browser.assert.attribute(OSWConnectedSyncButton, 'title', uLocalized('OSWConnectedSyncButtonText'))
	});

	it('localizes OSWConnectedDisconnectButton', function () {
		browser.assert.attribute(OSWConnectedDisconnectButton, 'title', uLocalized('OSWConnectedDisconnectButtonText'))
	});

	context('discard', function () {
	
		it('localizes OSWConnectedDisconnectConfirm', function() {
			browser.assert.OLSKConfirmQuestion(function () {
				return browser.pressButton(OSWConnectedDisconnectButton);
			}, uLocalized('OSWConnectedDisconnectConfirmText'));
		});

	});

	context('OSWConnectedSyncButtonSyncing', function test_OSWConnectedSyncButtonSyncing () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage: languageCode,
				OSWConnectedSyncButtonSyncing: true,
			});
		});

		it('localizes OSWConnectedSyncButton', function () {
			browser.assert.attribute(OSWConnectedSyncButton, 'title', uLocalized('OSWConnectedSyncButtonTextStop'))
		});
	
	});

});

});
