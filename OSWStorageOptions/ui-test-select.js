import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OSWStorageOptionsSelect', function () {

	before(function() {
		return browser.visit(kDefaultRoute.OLSKRoutePath);
	});

	context('StorageOptionRemoteStorage', function testStorageOptionRemoteStorage () {

		before(function () {
			return browser.click(OSWStorageOptionsButtonRemoteStorage)
		});
		
		before(function () {
			browser.assert.text('#TestStorageOptionsDispatchSelect', '0')
			browser.assert.text('#TestStorageOptionsDispatchSelectValue', 'undefined')

			browser.fill(OSWStorageOptionRemoteStorageAddressField, 'alfa@bravo.charlie')
			browser.click(OSWStorageOptionRemoteStorageConnectButton)
		});
		
		it('sends StorageOptionsDispatchSelect', function () {
			browser.assert.text('#TestStorageOptionsDispatchSelect', '1')
		});
		
		it('includes address', function () {
			browser.assert.text('#TestStorageOptionsDispatchSelectValue', 'alfa@bravo.charlie')
		});
	
	});

});
