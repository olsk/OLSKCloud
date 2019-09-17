import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OSWContainerRemoteStorageError', function testOSWContainerRemoteStorageError () {

	before(function() {
		return browser.visit(`${ kDefaultRoute.OLSKRoutePath }?OSWContainerRemoteStorageError=alfa`);
	});

	it('shows message', function () {
		browser.assert.text(OSWContainerRemoteStorageError, 'alfa')
	});

});

describe('OSWContainerOptions', function testOSWContainerOptions () {

	before(function() {
		return browser.visit(kDefaultRoute.OLSKRoutePath);
	});

	context('SelectStorageOptionRemoteStorage', function () {

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

describe('OSWContainerRenew', function testOSWContainerRenew () {

	before(function() {
		return browser.visit(`${ kDefaultRoute.OLSKRoutePath }?OSWContainerRemoteStorageError=Unauthorized`);
	});

	before(function () {
		return browser.pressButton(OSWContainerRenewButton)
	});
	
	it('sends ContainerDispatchOptionsRenew', function () {
		browser.assert.text('#TestContainerDispatchOptionsRenew', '1')
	});

});
