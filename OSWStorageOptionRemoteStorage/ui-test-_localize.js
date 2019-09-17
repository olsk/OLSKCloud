import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguages.forEach(function (languageCode) {

const uLocalized = function (inputData) {
	return OLSKTestingLocalized(inputData, languageCode);
};

describe(`OSWStorageOptionRemoteStorageLocalize-${ languageCode }`, function () {

	before(function() {
		return browser.visit(`${ languageCode }${ kDefaultRoute.OLSKRoutePath }`);
	});

	it('localizes OSWStorageOptionRemoteStorageConnectButton', function () {
		browser.assert.input(OSWStorageOptionRemoteStorageConnectButton, uLocalized('OSWStorageOptionRemoteStorageConnectButtonText'))
	});

	it('localizes OSWStorageOptionRemoteStorageHelpAnchor', function () {
		browser.assert.text(OSWStorageOptionRemoteStorageHelpAnchor, uLocalized('OSWStorageOptionRemoteStorageHelpAnchorText'))
	});

});

});
