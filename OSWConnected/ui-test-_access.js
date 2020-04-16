import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OSWConnected: '.OSWConnected',

	OSWConnectedAddress: '.OSWConnectedAddress',
	OSWConnectedSyncButton: '.OSWConnectedSyncButton',
	OSWConnectedDisconnectButton: '.OSWConnectedDisconnectButton',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OSWConnected_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});
	
	it('shows OSWConnected', function() {
		browser.assert.elements(OSWConnected, 1);
	});
	
	it('shows OSWConnectedAddress', function() {
		browser.assert.elements(OSWConnectedAddress, 1);
	});
	
	it('shows OSWConnectedSyncButton', function() {
		browser.assert.elements(OSWConnectedSyncButton, 1);
	});
	
	it('shows OSWConnectedDisconnectButton', function() {
		browser.assert.elements(OSWConnectedDisconnectButton, 1);
	});

});
