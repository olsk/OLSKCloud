const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

const uLocalized = function (inputData) {
	return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
};

describe(`OSWOptionRemoteStorage_Localize-${ OLSKRoutingLanguage }`, function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			OLSKRoutingLanguage,
		});
	});

	it('localizes OSWOptionRemoteStorageConnectButton', function () {
		browser.assert.text(OSWOptionRemoteStorageConnectButton, uLocalized('OSWOptionRemoteStorageConnectButtonText'))
	});

	it('localizes OSWOptionRemoteStorageHelpAnchor', function () {
		browser.assert.text(OSWOptionRemoteStorageHelpAnchor, uLocalized('OSWOptionRemoteStorageHelpAnchorText'))
	});

});

});
