import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguages.forEach(function (languageCode) {

const uLocalized = function (inputData) {
	return OLSKTestingLocalized(inputData, languageCode);
};

describe(`OSWContainerLocalize-${ languageCode }`, function () {

	context('OSWContainerRemoteStorageErrorUnauthorized', function testOSWContainerRemoteStorageErrorUnauthorized () {

		before(function() {
			return browser.visit(`${ languageCode }${ kDefaultRoute.OLSKRoutePath }?OSWContainerRemoteStorageError=Unauthorized`);
		});
		
		it('localizes OSWContainerRenewButton', function() {
			browser.assert.text(OSWContainerRenewButton, uLocalized('OSWContainerRenewButtonText'));
		});

	});

});

});
