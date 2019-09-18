import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguages.forEach(function (languageCode) {

const uLocalized = function (inputData) {
	return OLSKTestingLocalized(inputData, languageCode);
};

describe(`OSWConnectedLocalize-${ languageCode }`, function () {

	before(function() {
		return browser.visit(`${ languageCode }${ kDefaultRoute.OLSKRoutePath }`);
	});

	it('localizes OSWConnectedSyncButton', function () {
		browser.assert.text(OSWConnectedSyncButton, uLocalized('OSWConnectedSyncButtonText'))
	});

	it('localizes OSWConnectedDisconnectButton', function () {
		browser.assert.text(OSWConnectedDisconnectButton, uLocalized('OSWConnectedDisconnectButtonText'))
	});

	context('OSWConnectedSyncButtonSyncing', function testOSWConnectedSyncButtonSyncing () {

		before(function() {
			return browser.visit(`${ kDefaultRoute.OLSKRoutePath }?OSWConnectedSyncButtonSyncing=true`);
		});

		it('localizes OSWConnectedSyncButton', function () {
			browser.assert.text(OSWConnectedSyncButton, uLocalized('OSWConnectedSyncButtonTextStop'))
		});
	
	});

});

});
