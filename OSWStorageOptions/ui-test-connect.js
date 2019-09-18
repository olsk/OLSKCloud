import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OSWStorageOptionsConnect', function () {

	context('StorageOptionRemoteStorage', function testStorageOptionRemoteStorage () {

		before(function() {
			return browser.visit(kDefaultRoute.OLSKRoutePath);
		});

		before(function () {
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

	context('StorageOptionDropbox', function testStorageOptionDropbox () {

		before(function() {
			return browser.visit(kDefaultRoute.OLSKRoutePath);
		});

		before(function () {
			return browser.click(OSWStorageOptionsButtonDropbox)
		});
		
		it('sends OSWStorageOptionsDelegateConnect', function () {
			browser.assert.text('#TestOSWStorageOptionsDelegateConnect', '1')
		});
		
		it('sets detail', function () {
			browser.assert.text('#TestOSWStorageOptionsDelegateConnectDetail', 'StorageOptionDropbox')
		});
	
	});

});
