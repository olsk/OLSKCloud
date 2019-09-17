import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OSWContainerOptions', function () {

	before(function() {
		return browser.visit(kDefaultRoute.OLSKRoutePath);
	});

	context('SelectStorageOptionRemoteStorage', function testSelectStorageOptionRemoteStorage () {

		before(function () {
			return browser.click(OSWStorageOptionsButtonRemoteStorage)
		});
		
		before(function () {
			browser.assert.text('#TestContainerDispatchOptionsSelect', '0')
			browser.assert.text('#TestContainerDispatchOptionsSelectValue', 'undefined')

			browser.fill(OSWStorageOptionRemoteStorageAddressField, 'alfa@bravo.charlie')
			browser.click(OSWStorageOptionRemoteStorageConnectButton)
		});
		
		it('sends ContainerDispatchOptionsSelect', function () {
			browser.assert.text('#TestContainerDispatchOptionsSelect', '1')
		});
		
		it('includes address', function () {
			browser.assert.text('#TestContainerDispatchOptionsSelectValue', 'alfa@bravo.charlie')
		});
	
	});

});
