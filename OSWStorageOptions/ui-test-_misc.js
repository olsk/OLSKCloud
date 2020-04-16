import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OSWStorageOptionsMisc', function () {

describe('OSWStorageOptionsAnchor', function() {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('sets target', function () {
		browser.assert.attribute(OSWStorageOptionsAnchor, 'target', '_blank')
	});
	
});

describe('OSWOptionRemoteStorage', function test_OSWOptionRemoteStorage () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	before(function () {
		browser.assert.hasClass(OSWStorageOptionsButtonRemoteStorage, 'OLSKLayoutElementTappable')

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

describe('OSWStorageOptionsDropbox', function test_OSWStorageOptionsDropbox () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	before(function () {
		return browser.click(OSWStorageOptionsDropboxButton)
	});
	
	it('has class', function () {
		browser.assert.hasClass(OSWStorageOptionsDropboxButton, 'OLSKLayoutElementTappable')
	});
	
	it('sends OSWStorageOptionsDelegateConnect', function () {
		browser.assert.text('#TestOSWStorageOptionsDelegateConnect', '1')
	});
	
	it('sets detail', function () {
		browser.assert.text('#TestOSWStorageOptionsDelegateConnectDetail', 'OSWStorageOptionsDropbox')
	});

});

describe('OSWStorageOptionsGoogleDrive', function test_OSWStorageOptionsGoogleDrive () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	before(function () {
		return browser.click(OSWStorageOptionsGoogleDriveButton)
	});
	
	it('has class', function () {
		browser.assert.hasClass(OSWStorageOptionsGoogleDriveButton, 'OLSKLayoutElementTappable')
	});
	
	it('sends OSWStorageOptionsDelegateConnect', function () {
		browser.assert.text('#TestOSWStorageOptionsDelegateConnect', '1')
	});
	
	it('sets detail', function () {
		browser.assert.text('#TestOSWStorageOptionsDelegateConnectDetail', 'OSWStorageOptionsGoogleDrive')
	});

});

});
