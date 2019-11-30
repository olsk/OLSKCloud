import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OSWStorageOptions: '.OSWStorageOptions',

	OSWStorageOptionsHeading: '.OSWStorageOptionsHeading',

	OSWStorageOptionsDescription: '.OSWStorageOptionsDescription',
	OSWStorageOptionsAnchor: '.OSWStorageOptionsAnchor',

	OSWStorageOptionsButtonRemoteStorage: '.OSWStorageOptionsButtonRemoteStorage',
	OSWStorageOptionsDropboxButton: '.OSWStorageOptionsDropboxButton',
	OSWStorageOptionsGoogleDriveButton: '.OSWStorageOptionsGoogleDriveButton',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OSWStorageOptionsAccess', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
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
	
	it('shows OSWStorageOptionsDropboxButton', function() {
		browser.assert.elements(OSWStorageOptionsDropboxButton, 1);
	});
	
	it('shows OSWStorageOptionsGoogleDriveButton', function() {
		browser.assert.elements(OSWStorageOptionsGoogleDriveButton, 1);
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
		
		it('hides OSWStorageOptionsDropboxButton', function() {
			browser.assert.elements(OSWStorageOptionsDropboxButton, 0);
		});
		
		it('hides OSWStorageOptionsGoogleDriveButton', function() {
			browser.assert.elements(OSWStorageOptionsGoogleDriveButton, 0);
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
			return browser.OLSKVisit(kDefaultRoute, {
				OSWStorageOptionsDropboxIsDisabled: true,
			});
		});
	
		it('hides OSWStorageOptionsDropboxButton', function() {
			browser.assert.elements(OSWStorageOptionsDropboxButton, 0);
		});
	
	});

	context('OSWStorageOptionsGoogleDriveIsDisabled', function testOSWStorageOptionsGoogleDriveIsDisabled () {

		before(function () {
			return browser.OLSKVisit(kDefaultRoute, {
				OSWStorageOptionsGoogleDriveIsDisabled: true,
			});
		});
	
		it('hides OSWStorageOptionsGoogleDriveButton', function() {
			browser.assert.elements(OSWStorageOptionsGoogleDriveButton, 0);
		});
	
	});

	context('OSWStorageOptionsBothDisabled', function testOSWStorageOptionsBothDisabled () {

		before(function () {
			return browser.OLSKVisit(kDefaultRoute, {
				OSWStorageOptionsDropboxIsDisabled: true,
				OSWStorageOptionsGoogleDriveIsDisabled: true,
			});
		});
	
		uHideOptions()
	
	})

});
