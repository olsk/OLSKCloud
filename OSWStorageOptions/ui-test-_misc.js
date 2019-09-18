import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OSWStorageOptionsMisc', function () {

describe('OSWOptionRemoteStorage', function testOSWOptionRemoteStorage () {

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

describe('OSWStorageOptionsDropbox', function testOSWStorageOptionsDropbox () {

	before(function() {
		return browser.visit(kDefaultRoute.OLSKRoutePath);
	});

	before(function () {
		return browser.click(OSWStorageOptionsDropboxButton)
	});
	
	it('sends OSWStorageOptionsDelegateConnect', function () {
		browser.assert.text('#TestOSWStorageOptionsDelegateConnect', '1')
	});
	
	it('sets detail', function () {
		browser.assert.text('#TestOSWStorageOptionsDelegateConnectDetail', 'OSWStorageOptionsDropbox')
	});

});

describe('OSWStorageOptionsGoogleDrive', function testOSWStorageOptionsGoogleDrive () {

	before(function() {
		return browser.visit(kDefaultRoute.OLSKRoutePath);
	});

	before(function () {
		return browser.click(OSWStorageOptionsGoogleDriveButton)
	});
	
	it('sends OSWStorageOptionsDelegateConnect', function () {
		browser.assert.text('#TestOSWStorageOptionsDelegateConnect', '1')
	});
	
	it('sets detail', function () {
		browser.assert.text('#TestOSWStorageOptionsDelegateConnectDetail', 'OSWStorageOptionsGoogleDrive')
	});

});

});
