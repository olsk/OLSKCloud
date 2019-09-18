import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OSWStorageOptionsSelect', function () {

	context('StorageOptionRemoteStorage', function testStorageOptionRemoteStorage () {

		before(function() {
			return browser.visit(kDefaultRoute.OLSKRoutePath);
		});

		before(function () {
			return browser.click(OSWStorageOptionsButtonRemoteStorage)
		});
		
		before(function () {
			browser.assert.text('#TestOSWStorageOptionsDelegateSelect', '0')
			browser.assert.text('#TestOSWStorageOptionsDelegateSelectDetail', 'undefined')

			browser.fill(OSWOptionRemoteStorageAddressField, 'alfa@bravo.charlie')
			browser.click(OSWOptionRemoteStorageConnectButton)
		});
		
		it('sends OSWStorageOptionsDelegateSelect', function () {
			browser.assert.text('#TestOSWStorageOptionsDelegateSelect', '1')
		});
		
		it('sets detail', function () {
			browser.assert.text('#TestOSWStorageOptionsDelegateSelectDetail', 'alfa@bravo.charlie')
		});
	
	});

	context('StorageOptionDropbox', function testStorageOptionDropbox () {

		before(function() {
			return browser.visit(kDefaultRoute.OLSKRoutePath);
		});

		before(function () {
			return browser.click(OSWStorageOptionsButtonDropbox)
		});
		
		it('sends OSWStorageOptionsDelegateSelect', function () {
			browser.assert.text('#TestOSWStorageOptionsDelegateSelect', '1')
		});
		
		it('sets detail', function () {
			browser.assert.text('#TestOSWStorageOptionsDelegateSelectDetail', 'StorageOptionDropbox')
		});
	
	});

});
