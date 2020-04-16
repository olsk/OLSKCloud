import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguages.forEach(function (languageCode) {

const uLocalized = function (inputData) {
	return OLSKTestingLocalized(inputData, languageCode);
};

describe(`OSWRoot_Localize-${ languageCode }`, function () {

	context('OSWRootRemoteStorageErrorUnauthorized', function test_OSWRootRemoteStorageErrorUnauthorized () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage: languageCode,
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
				OLSKRoutingLanguage: languageCode,
				OSWRootRemoteStorageNetworkOffline: true,
			});
		});
		
		it('localizes OSWRootRemoteStorageNetworkOfflineAlert', function() {
			browser.assert.text(OSWRootRemoteStorageNetworkOfflineAlert, uLocalized('OSWRootRemoteStorageNetworkOfflineAlertText'));
		});

	});

});

});
