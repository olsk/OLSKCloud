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
	
	it('hides OSWOptionRemoteStorage', function() {
		browser.assert.elements(OSWOptionRemoteStorage, 0);
	});

	const uHideOptions = function () {
		
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
		
		it('shows OSWOptionRemoteStorage', function() {
			browser.assert.elements(OSWOptionRemoteStorage, 1);
		});

	};

	context('ClickOSWStorageOptionsButtonRemoteStorage', function testClickOSWStorageOptionsButtonRemoteStorage () {

		before(function () {
			return browser.pressButton(OSWStorageOptionsButtonRemoteStorage);;
		});
	
		uHideOptions()

	});

	context('OSWStorageOptionsDropboxIsDisabled', function testOSWStorageOptionsDropboxIsDisabled () {

		before(function () {
			return browser.visit(`${ kDefaultRoute.OLSKRoutePath }?OSWStorageOptionsDropboxIsDisabled=true`);
		});
	
		it('hides OSWStorageOptionsButtonDropbox', function() {
			browser.assert.elements(OSWStorageOptionsButtonDropbox, 0);
		});
	
	});

	context('OSWStorageOptionsGoogleDriveIsDisabled', function testOSWStorageOptionsGoogleDriveIsDisabled () {

		before(function () {
			return browser.visit(`${ kDefaultRoute.OLSKRoutePath }?OSWStorageOptionsGoogleDriveIsDisabled=true`);
		});
	
		it('hides OSWStorageOptionsButtonGoogleDrive', function() {
			browser.assert.elements(OSWStorageOptionsButtonGoogleDrive, 0);
		});
	
	});

	context('OSWStorageOptionsBothDisabled', function testOSWStorageOptionsBothDisabled () {

		before(function () {
			return browser.visit(`${ kDefaultRoute.OLSKRoutePath }?OSWStorageOptionsDropboxIsDisabled=true&OSWStorageOptionsGoogleDriveIsDisabled=true`);
		});
	
		uHideOptions()
	
	})

});
