const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

const uLocalized = function (inputData) {
	return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
};

describe(`OSWRoot_Localize-${ OLSKRoutingLanguage }`, function () {

	context('OSWRootRemoteStorageErrorUnauthorized', function test_OSWRootRemoteStorageErrorUnauthorized () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage,
				OSWRootRemoteStorageError: 'Unauthorized',
			});
		});
		
		it('localizes OSWRootRenewButton', function() {
			browser.assert.text(OSWRootRenewButton, uLocalized('OSWRootRenewButtonText'));
		});

	});

	context('OSWRootRemoteStorageNetworkOffline', function test_OSWRootRemoteStorageNetworkOffline () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage,
				OSWRootRemoteStorageNetworkOffline: true,
			});
		});
		
		it('localizes OSWRootRemoteStorageNetworkOfflineAlert', function() {
			browser.assert.text(OSWRootRemoteStorageNetworkOfflineAlert, uLocalized('OSWRootRemoteStorageNetworkOfflineAlertText'));
		});

	});

});

});
