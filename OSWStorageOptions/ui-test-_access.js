import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OSWStorageOptions: '.OSWStorageOptions',
	OSWStorageOptionsHeading: '.OSWStorageOptionsHeading',
	OSWStorageOptionsDescription: '.OSWStorageOptionsDescription',
	OSWStorageOptionsAnchor: '.OSWStorageOptionsAnchor',
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

});
