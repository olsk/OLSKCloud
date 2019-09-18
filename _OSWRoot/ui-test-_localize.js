import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguages.forEach(function (languageCode) {

const uLocalized = function (inputData) {
	return OLSKTestingLocalized(inputData, languageCode);
};

describe(`OSWRootLocalize-${ languageCode }`, function () {

	context('OSWRootRemoteStorageErrorUnauthorized', function testOSWRootRemoteStorageErrorUnauthorized () {

		before(function() {
			return browser.visit(`${ languageCode }${ kDefaultRoute.OLSKRoutePath }?OSWRootRemoteStorageError=Unauthorized`);
		});
		
		it('localizes OSWRootRenewButton', function() {
			browser.assert.text(OSWRootRenewButton, uLocalized('OSWRootRenewButtonText'));
		});

	});

	context('OSWRootRemoteStorageNetworkOffline', function testOSWRootRemoteStorageNetworkOffline () {

		before(function() {
			return browser.visit(`${ languageCode }${ kDefaultRoute.OLSKRoutePath }?OSWRootRemoteStorageNetworkOffline=true`);
		});
		
		it('localizes OSWRootRemoteStorageNetworkOfflineAlert', function() {
			browser.assert.text(OSWRootRemoteStorageNetworkOfflineAlert, uLocalized('OSWRootRemoteStorageNetworkOfflineAlertText'));
		});

	});

});

});