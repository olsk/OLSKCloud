import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguages.forEach(function (languageCode) {

const uLocalized = function (inputData) {
	return OLSKTestingLocalized(inputData, languageCode);
};

describe(`OSWOptionRemoteStorage_Localize-${ languageCode }`, function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			OLSKRoutingLanguage: languageCode,
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
