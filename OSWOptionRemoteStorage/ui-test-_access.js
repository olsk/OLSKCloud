const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OSWOptionRemoteStorage: '.OSWOptionRemoteStorage',

	OSWOptionRemoteStorageAddressField: '.OSWOptionRemoteStorageAddressField',
	OSWOptionRemoteStorageConnectButton: '.OSWOptionRemoteStorageConnectButton',

	OSWOptionRemoteStorageHelpAnchor: '.OSWOptionRemoteStorageHelpAnchor',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OSWOptionRemoteStorage_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});
	
	it('shows OSWOptionRemoteStorage', function() {
		browser.assert.elements(OSWOptionRemoteStorage, 1);
	});
	
	it('shows OSWOptionRemoteStorageAddressField', function() {
		browser.assert.elements(OSWOptionRemoteStorageAddressField, 1);
	});
	
	it('shows OSWOptionRemoteStorageConnectButton', function() {
		browser.assert.elements(OSWOptionRemoteStorageConnectButton, 1);
	});
	
	it('shows OSWOptionRemoteStorageHelpAnchor', function() {
		browser.assert.elements(OSWOptionRemoteStorageHelpAnchor, 1);
	});

});
