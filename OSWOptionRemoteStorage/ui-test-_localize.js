import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguages.forEach(function (languageCode) {

const uLocalized = function (inputData) {
	return OLSKTestingLocalized(inputData, languageCode);
};

describe(`OSWOptionRemoteStorageLocalize-${ languageCode }`, function () {

	before(function() {
		return browser.visit(`${ languageCode }${ kDefaultRoute.OLSKRoutePath }`);
	});

	it('localizes OSWOptionRemoteStorageConnectButton', function () {
		browser.assert.text(OSWOptionRemoteStorageConnectButton, uLocalized('OSWOptionRemoteStorageConnectButtonText'))
	});

	it('localizes OSWOptionRemoteStorageHelpAnchor', function () {
		browser.assert.text(OSWOptionRemoteStorageHelpAnchor, uLocalized('OSWOptionRemoteStorageHelpAnchorText'))
	});

});

});
