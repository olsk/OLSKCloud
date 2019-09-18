import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OSWRootRemoteStorageNetworkOffline', function testOSWRootRemoteStorageNetworkOffline () {

	before(function() {
		return browser.visit(`${ kDefaultRoute.OLSKRoutePath }?OSWRootRemoteStorageNetworkOffline=alfa`);
	})

	it('adds class', function () {
		browser.assert.hasClass(OSWRoot, 'OSWRootNetworkOffline')
	});

});

describe('OSWRootRemoteStorageError', function testOSWRootRemoteStorageError () {

	before(function() {
		return browser.visit(`${ kDefaultRoute.OLSKRoutePath }?OSWRootRemoteStorageError=alfa`);
	});

	it('shows OSWRootRemoteStorageError', function () {
		browser.assert.text(OSWRootRemoteStorageError, 'alfa')
	});

});

describe('OSWRootOptions', function testOSWRootOptions () {

	before(function() {
		return browser.visit(`${ kDefaultRoute.OLSKRoutePath }?OSWRootDropboxIsEnabled=true&OSWRootGoogleDriveIsEnabled=true`);
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

describe('OSWRootRenew', function testOSWRootRenew () {

	before(function() {
		return browser.visit(`${ kDefaultRoute.OLSKRoutePath }?OSWRootRemoteStorageError=Unauthorized`);
	});

	before(function () {
		return browser.pressButton(OSWRootRenewButton)
	});
	
	it('sends ContainerDispatchOptionsRenew', function () {
		browser.assert.text('#TestOSWRootDelegateRenew', '1')
	});

});
