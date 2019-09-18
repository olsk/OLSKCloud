import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OSWRoot: '.OSWRoot',
	
	OSWRootRemoteStorageError: '.OSWRootRemoteStorageError',
	OSWRootRenewButton: '.OSWRootRenewButton',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OSWRootAccess', function () {

	before(function() {
		return browser.visit(kDefaultRoute.OLSKRoutePath);
	});
	
	it('shows OSWRoot', function() {
		browser.assert.elements(OSWRoot, 1);
	});
	
	it('hides OSWRootRemoteStorageError', function() {
		browser.assert.elements(OSWRootRemoteStorageError, 0);
	});
	
	it('hides OSWRootRenewButton', function() {
		browser.assert.elements(OSWRootRenewButton, 0);
	});
	
	it('shows OSWStorageOptions', function() {
		browser.assert.elements(OSWStorageOptions, 1);
	});
	
	it('hides OSWConnected', function() {
		browser.assert.elements(OSWConnected, 0);
	});

	context('OSWRootRemoteStorageError', function testOSWRootRemoteStorageError () {

		before(function() {
			return browser.visit(`${ kDefaultRoute.OLSKRoutePath }?OSWRootRemoteStorageError=alfa`);
		});

		it('shows OSWRootRemoteStorageError', function () {
			browser.assert.elements(OSWRootRemoteStorageError, 1)
		});

		
		it('hides OSWRootRenewButton if Unauthorized', function() {
			browser.assert.elements(OSWRootRenewButton, 0);
		});

	});

	context('OSWRootRemoteStorageErrorUnauthorized', function testOSWRootRemoteStorageErrorUnauthorized () {

		before(function() {
			return browser.visit(`${ kDefaultRoute.OLSKRoutePath }?OSWRootRemoteStorageError=Unauthorized`);
		});
		
		it('shows OSWRootRenewButton', function() {
			browser.assert.elements(OSWRootRenewButton, 1);
		});

	});

	context('OSWRootRemoteStorageConnected', function testOSWRootRemoteStorageConnected () {

		before(function () {
			return browser.visit(`${ kDefaultRoute.OLSKRoutePath }?OSWRootRemoteStorageConnected=true`);
		});
		
		it('hides OSWStorageOptions', function() {
			browser.assert.elements(OSWStorageOptions, 0);
		});
		
		it('shows OSWConnected', function() {
			browser.assert.elements(OSWConnected, 1);
		});
	
	});

});
