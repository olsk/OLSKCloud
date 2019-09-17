import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OSWStorageOptions: '.OSWStorageOptions',

	OSWStorageOptionsHeading: '.OSWStorageOptionsHeading',
	OSWStorageOptionsDescription: '.OSWStorageOptionsDescription',
	OSWStorageOptionsAnchor: '.OSWStorageOptionsAnchor',

	OSWStorageOptionsButtonRemoteStorage: '.OSWStorageOptionsButtonRemoteStorage',
	OSWStorageOptionsButtonDropbox: '.OSWStorageOptionsButtonDropbox',
	OSWStorageOptionsButtonGoogleDrive: '.OSWStorageOptionsButtonGoogleDrive',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OSWStorageOptionsAccess', function () {

	before(function() {
		return browser.visit(kDefaultRoute.OLSKRoutePath);
	});
	
	it('shows OSWStorageOptions', function() {
		browser.assert.elements(OSWStorageOptions, 1);
	});
	
	it('shows OSWStorageOptionsHeading', function() {
		browser.assert.elements(OSWStorageOptionsHeading, 1);
	});
	
	it('shows OSWStorageOptionsDescription', function() {
		browser.assert.elements(OSWStorageOptionsDescription, 1);
	});
	
	it('shows OSWStorageOptionsAnchor', function() {
		browser.assert.elements(OSWStorageOptionsAnchor, 1);
	});
	
	it('shows OSWStorageOptionsButtonRemoteStorage', function() {
		browser.assert.elements(OSWStorageOptionsButtonRemoteStorage, 1);
	});
	
	it('shows OSWStorageOptionsButtonDropbox', function() {
		browser.assert.elements(OSWStorageOptionsButtonDropbox, 1);
	});
	
	it('shows OSWStorageOptionsButtonGoogleDrive', function() {
		browser.assert.elements(OSWStorageOptionsButtonGoogleDrive, 1);
	});
	
	it('hides OSWStorageOptionRemoteStorage', function() {
		browser.assert.elements(OSWStorageOptionRemoteStorage, 0);
	});

	context('ClickOSWStorageOptionsButtonRemoteStorage', function testClickOSWStorageOptionsButtonRemoteStorage () {

		before(function () {
			return browser.pressButton(OSWStorageOptionsButtonRemoteStorage);;
		});
	
		it('hides OSWStorageOptionsDescription', function() {
			browser.assert.elements(OSWStorageOptionsDescription, 0);
		});
		
		it('hides OSWStorageOptionsAnchor', function() {
			browser.assert.elements(OSWStorageOptionsAnchor, 0);
		});
		
		it('hides OSWStorageOptionsButtonRemoteStorage', function() {
			browser.assert.elements(OSWStorageOptionsButtonRemoteStorage, 0);
		});
		
		it('hides OSWStorageOptionsButtonDropbox', function() {
			browser.assert.elements(OSWStorageOptionsButtonDropbox, 0);
		});
		
		it('hides OSWStorageOptionsButtonGoogleDrive', function() {
			browser.assert.elements(OSWStorageOptionsButtonGoogleDrive, 0);
		});
	
		it('shows OSWStorageOptionRemoteStorage', function() {
			browser.assert.elements(OSWStorageOptionRemoteStorage, 1);
		});
	
	});

});
