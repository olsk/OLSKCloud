import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OSWContainer: '.OSWContainer',
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
	
	it('shows OSWStorageOptions', function() {
		browser.assert.elements(OSWStorageOptions, 1);
	});

	context('RemoteStorageConnect', function testRemoteStorageConnect () {

		before(function () {
			return browser.visit(`${ kDefaultRoute.OLSKRoutePath }?OSWContainerRemoteStorageDidConnect=true`);
		});
		
		it('hides OSWStorageOptions', function() {
			browser.assert.elements(OSWStorageOptions, 0);
		});
	
	});

});
