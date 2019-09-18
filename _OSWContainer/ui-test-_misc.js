import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OSWContainerRemoteStorageError', function testOSWContainerRemoteStorageError () {

	before(function() {
		return browser.visit(`${ kDefaultRoute.OLSKRoutePath }?OSWContainerRemoteStorageError=alfa`);
	});

	it('shows OSWContainerRemoteStorageError', function () {
		browser.assert.text(OSWContainerRemoteStorageError, 'alfa')
	});

});

describe('OSWContainerOptions', function testOSWContainerOptions () {

	before(function() {
		return browser.visit(`${ kDefaultRoute.OLSKRoutePath }?OSWContainerDropboxIsEnabled=true&OSWContainerGoogleDriveIsEnabled=true`);
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

describe('OSWContainerRenew', function testOSWContainerRenew () {

	before(function() {
		return browser.visit(`${ kDefaultRoute.OLSKRoutePath }?OSWContainerRemoteStorageError=Unauthorized`);
	});

	before(function () {
		return browser.pressButton(OSWContainerRenewButton)
	});
	
	it('sends ContainerDispatchOptionsRenew', function () {
		browser.assert.text('#TestOSWContainerDelegateRenew', '1')
	});

});
