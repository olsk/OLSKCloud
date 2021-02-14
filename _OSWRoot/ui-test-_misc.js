const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OSWRootRemoteStorageError', function test_OSWRootRemoteStorageError () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			OSWRootRemoteStorageError: 'alfa',
		});
	});

	it('shows OSWRootRemoteStorageError', function () {
		browser.assert.text(OSWRootRemoteStorageError, 'alfa')
	});

});

describe('OSWRootOptions', function test_OSWRootOptions () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	context('StorageOptionRemoteStorage', function () {

		before(function () {
			return browser.click(OSWStorageOptionsButtonRemoteStorage)
		});
		
		before(function () {
			browser.assert.text('#TestOSWStorageOptionsDelegateConnect', '0')
			browser.assert.text('#TestOSWStorageOptionsDelegateConnectValue', 'undefined')

			browser.fill(OSWOptionRemoteStorageAddressField, 'alfa@bravo.charlie')
			browser.click(OSWOptionRemoteStorageConnectButton)
		});
		
		it('sends OSWStorageOptionsDelegateConnect', function () {
			browser.assert.text('#TestOSWStorageOptionsDelegateConnect', '1')
		});
		
		it('sends address', function () {
			browser.assert.text('#TestOSWStorageOptionsDelegateConnectValue', 'alfa@bravo.charlie')
		});
	
	});

});

describe('OSWRootRenew', function test_OSWRootRenew () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			OSWRootRemoteStorageError: 'Unauthorized',
		});
	});

	before(function () {
		return browser.pressButton(OSWRootRenewButton)
	});
	
	it('sends ContainerDispatchOptionsRenew', function () {
		browser.assert.text('#TestOSWRootDelegateRenew', '1')
	});

});
