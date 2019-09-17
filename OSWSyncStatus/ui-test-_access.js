import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OSWSyncStatus: '.OSWSyncStatus',

	OSWSyncStatusDisconnectButton: '.OSWSyncStatusDisconnectButton',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OSWSyncStatusAccess', function () {

	before(function() {
		return browser.visit(kDefaultRoute.OLSKRoutePath);
	});
	
	it('shows OSWSyncStatus', function() {
		browser.assert.elements(OSWSyncStatus, 1);
	});
	
	it('shows OSWSyncStatusDisconnectButton', function() {
		browser.assert.elements(OSWSyncStatusDisconnectButton, 1);
	});

});
