import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OSWStorageOptionRemoteStorage: '.OSWStorageOptionRemoteStorage',

	OSWStorageOptionRemoteStorageHeading: '.OSWStorageOptionRemoteStorageHeading',

	OSWStorageOptionRemoteStorageAddressField: '.OSWStorageOptionRemoteStorageAddressField',
	OSWStorageOptionRemoteStorageConnectButton: '.OSWStorageOptionRemoteStorageConnectButton',

	OSWStorageOptionRemoteStorageHelpAnchor: '.OSWStorageOptionRemoteStorageHelpAnchor',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OSWStorageOptionRemoteStorageAccess', function () {

	before(function() {
		return browser.visit(kDefaultRoute.OLSKRoutePath);
	});
	
	it('shows OSWStorageOptionRemoteStorage', function() {
		browser.assert.elements(OSWStorageOptionRemoteStorage, 1);
	});
	
	it('shows OSWStorageOptionRemoteStorageHeading', function() {
		browser.assert.elements(OSWStorageOptionRemoteStorageHeading, 1);
	});
	
	it('shows OSWStorageOptionRemoteStorageAddressField', function() {
		browser.assert.elements(OSWStorageOptionRemoteStorageAddressField, 1);
	});
	
	it('shows OSWStorageOptionRemoteStorageConnectButton', function() {
		browser.assert.elements(OSWStorageOptionRemoteStorageConnectButton, 1);
	});
	
	it('shows OSWStorageOptionRemoteStorageHelpAnchor', function() {
		browser.assert.elements(OSWStorageOptionRemoteStorageHelpAnchor, 1);
	});

});
