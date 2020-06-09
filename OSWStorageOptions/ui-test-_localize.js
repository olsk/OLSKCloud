const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguages.forEach(function (languageCode) {

const uLocalized = function (inputData) {
	return OLSKTestingLocalized(inputData, languageCode);
};

describe(`OSWStorageOptions_Localize-${ languageCode }`, function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			OLSKRoutingLanguage: languageCode,
		});
	});

	it('localizes OSWStorageOptionsHeading', function () {
		browser.assert.text(OSWStorageOptionsHeading, uLocalized('OSWStorageOptionsHeadingText'))
	});

	it('localizes OSWStorageOptionsDescription', function () {
		browser.assert.text(OSWStorageOptionsDescription, uLocalized('OSWStorageOptionsDescriptionText'))
	});

	it('localizes OSWStorageOptionsAnchor', function () {
		browser.assert.text(OSWStorageOptionsAnchor, uLocalized('OSWStorageOptionsAnchorText'))
	});

	it('localizes OSWStorageOptionsButtonRemoteStorage', function () {
		browser.assert.text(OSWStorageOptionsButtonRemoteStorage, uLocalized('OSWStorageOptionsButtonRemoteStorageText'))
	});

	it('localizes OSWStorageOptionsDropboxButton', function () {
		browser.assert.text(OSWStorageOptionsDropboxButton, uLocalized('OSWStorageOptionsDropboxButtonText'))
	});

	it('localizes OSWStorageOptionsGoogleDriveButton', function () {
		browser.assert.text(OSWStorageOptionsGoogleDriveButton, uLocalized('OSWStorageOptionsGoogleDriveButtonText'))
	});

});

});
