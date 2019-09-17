import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OSWContainer: '.OSWContainer',
	
	OSWContainerRemoteStorageError: '.OSWContainerRemoteStorageError',
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
	
	it('shows OSWStorageOptions', function() {
		browser.assert.elements(OSWStorageOptions, 1);
	});

	context('OSWContainerRemoteStorageError', function testOSWContainerRemoteStorageError () {

		before(function() {
			return browser.visit(`${ kDefaultRoute.OLSKRoutePath }?OSWContainerRemoteStorageError=alfa`);
		});

		it('shows OSWContainerRemoteStorageError', function () {
			browser.assert.elements(OSWContainerRemoteStorageError, 1)
		});

	});

	context('OSWContainerRemoteStorageDidConnect', function testOSWContainerRemoteStorageDidConnect () {

		before(function () {
			return browser.visit(`${ kDefaultRoute.OLSKRoutePath }?OSWContainerRemoteStorageDidConnect=true`);
		});
		
		it('hides OSWStorageOptions', function() {
			browser.assert.elements(OSWStorageOptions, 0);
		});
	
	});

});
