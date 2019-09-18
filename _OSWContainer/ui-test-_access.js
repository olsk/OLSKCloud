import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OSWContainer: '.OSWContainer',
	
	OSWContainerRemoteStorageError: '.OSWContainerRemoteStorageError',
	OSWContainerRenewButton: '.OSWContainerRenewButton',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OSWContainerAccess', function () {

	before(function() {
		return browser.visit(kDefaultRoute.OLSKRoutePath);
	});
	
	it('shows OSWContainer', function() {
		browser.assert.elements(OSWContainer, 1);
	});
	
	it('hides OSWContainerRemoteStorageError', function() {
		browser.assert.elements(OSWContainerRemoteStorageError, 0);
	});
	
	it('hides OSWContainerRenewButton', function() {
		browser.assert.elements(OSWContainerRenewButton, 0);
	});
	
	it('shows OSWStorageOptions', function() {
		browser.assert.elements(OSWStorageOptions, 1);
	});
	
	it('hides OSWConnected', function() {
		browser.assert.elements(OSWConnected, 0);
	});

	context('OSWContainerRemoteStorageError', function testOSWContainerRemoteStorageError () {

		before(function() {
			return browser.visit(`${ kDefaultRoute.OLSKRoutePath }?OSWContainerRemoteStorageError=alfa`);
		});

		it('shows OSWContainerRemoteStorageError', function () {
			browser.assert.elements(OSWContainerRemoteStorageError, 1)
		});

		
		it('hides OSWContainerRenewButton if Unauthorized', function() {
			browser.assert.elements(OSWContainerRenewButton, 0);
		});

	});

	context('OSWContainerRemoteStorageErrorUnauthorized', function testOSWContainerRemoteStorageErrorUnauthorized () {

		before(function() {
			return browser.visit(`${ kDefaultRoute.OLSKRoutePath }?OSWContainerRemoteStorageError=Unauthorized`);
		});
		
		it('shows OSWContainerRenewButton', function() {
			browser.assert.elements(OSWContainerRenewButton, 1);
		});

	});

	context('OSWContainerRemoteStorageConnected', function testOSWContainerRemoteStorageConnected () {

		before(function () {
			return browser.visit(`${ kDefaultRoute.OLSKRoutePath }?OSWContainerRemoteStorageConnected=true`);
		});
		
		it('hides OSWStorageOptions', function() {
			browser.assert.elements(OSWStorageOptions, 0);
		});
		
		it('shows OSWConnected', function() {
			browser.assert.elements(OSWConnected, 1);
		});
	
	});

});
