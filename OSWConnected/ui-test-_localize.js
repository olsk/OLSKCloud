import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguages.forEach(function (languageCode) {

const uLocalized = function (inputData) {
	return OLSKTestingLocalized(inputData, languageCode);
};

describe(`OSWConnectedLocalize-${ languageCode }`, function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			OLSKRoutingLanguage: languageCode,
		});
	});

	it('localizes OSWConnectedSyncButton', function () {
		browser.assert.text(OSWConnectedSyncButton, uLocalized('OSWConnectedSyncButtonText'))
	});

	it('localizes OSWConnectedDisconnectButton', function () {
		browser.assert.text(OSWConnectedDisconnectButton, uLocalized('OSWConnectedDisconnectButtonText'))
	});

	context('discard', function () {
	
		it('localizes OSWConnectedDisconnectPrompt', async function() {
			deepEqual((await browser.OLSKConfirm(async function () {
				browser.pressButton(OSWConnectedDisconnectButton);
			})).question, uLocalized('OSWConnectedDisconnectPromptText'));
		});

	});

	context('OSWConnectedSyncButtonSyncing', function testOSWConnectedSyncButtonSyncing () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage: languageCode,
				OSWConnectedSyncButtonSyncing: true,
			});
		});

		it('localizes OSWConnectedSyncButton', function () {
			browser.assert.text(OSWConnectedSyncButton, uLocalized('OSWConnectedSyncButtonTextStop'))
		});
	
	});

});

});
