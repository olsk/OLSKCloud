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
			browser.assert.text('#TestOSWContainerDelegateSelect', '0')
			browser.assert.text('#TestOSWContainerDelegateSelectDetail', 'undefined')

			browser.fill(OSWOptionRemoteStorageAddressField, 'alfa@bravo.charlie')
			browser.click(OSWOptionRemoteStorageConnectButton)
		});
		
		it('sends OSWContainerDelegateSelect', function () {
			browser.assert.text('#TestOSWContainerDelegateSelect', '1')
		});
		
		it('sets detail', function () {
			browser.assert.text('#TestOSWContainerDelegateSelectDetail', 'alfa@bravo.charlie')
		});
	
	});

	context('StorageOptionDropbox', function testStorageOptionDropbox () {

		before(function() {
			return browser.visit(kDefaultRoute.OLSKRoutePath);
		});

		before(function () {
			return browser.click(OSWStorageOptionsButtonDropbox)
		});
		
		it('sends OSWContainerDelegateSelect', function () {
			browser.assert.text('#TestOSWContainerDelegateSelect', '1')
		});
		
		it('sets detail', function () {
			browser.assert.text('#TestOSWContainerDelegateSelectDetail', 'StorageOptionDropbox')
		});
	
	});

});
