const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OSWStorageOptions_Misc', function () {

describe('OSWOptionRemoteStorage', function test_OSWOptionRemoteStorage () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	before(function () {
		browser.assert.hasClass(OSWStorageOptionsButtonRemoteStorage, 'OLSKDecorTappable')

		return browser.click(OSWStorageOptionsButtonRemoteStorage)
	});
	
	before(function () {
		browser.assert.text('#TestOSWStorageOptionsDelegateConnect', '0')
		browser.assert.text('#TestOSWStorageOptionsDelegateConnectDetail', 'undefined')

		browser.fill(OSWOptionRemoteStorageAddressField, 'alfa@bravo.charlie')
		browser.click(OSWOptionRemoteStorageConnectButton)
	});
	
	it('sends OSWStorageOptionsDelegateConnect', function () {
		browser.assert.text('#TestOSWStorageOptionsDelegateConnect', '1')
	});
	
	it('sets detail', function () {
		browser.assert.text('#TestOSWStorageOptionsDelegateConnectDetail', 'alfa@bravo.charlie')
	});

});

});
