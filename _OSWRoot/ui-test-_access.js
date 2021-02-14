const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OSWRoot: '.OSWRoot',

	OSWStorageOptions: '.OSWOptionRemoteStorage',
	OSWStorageOptionsButtonRemoteStorage: '.OSWOptionRemoteStorage',
	
	OSWRootRemoteStorageError: '.OSWRootRemoteStorageError',
	OSWRootRemoteStorageNetworkOfflineAlert: '.OSWRootRemoteStorageNetworkOfflineAlert',
	OSWRootRenewButton: '.OSWRootRenewButton',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OSWRoot_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});
	
	it('shows OSWRoot', function() {
		browser.assert.elements(OSWRoot, 1);
	});
	
	it('hides OSWRootRemoteStorageError', function() {
		browser.assert.elements(OSWRootRemoteStorageError, 0);
	});
	
	it('hides OSWRootRemoteStorageNetworkOfflineAlert', function() {
		browser.assert.elements(OSWRootRemoteStorageNetworkOfflineAlert, 0);
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

	context('OSWRootRemoteStorageError', function test_OSWRootRemoteStorageError () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OSWRootRemoteStorageError: 'alfa',
			});
		});

		it('shows OSWRootRemoteStorageError', function () {
			browser.assert.elements(OSWRootRemoteStorageError, 1)
		});
		
		it('hides OSWRootRenewButton if Unauthorized', function() {
			browser.assert.elements(OSWRootRenewButton, 0);
		});

	});

	context('OSWRootRemoteStorageNetworkOffline', function test_OSWRootRemoteStorageNetworkOffline () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OSWRootRemoteStorageNetworkOffline: 'alfa',
			});
		});

		it('shows OSWRootRemoteStorageNetworkOfflineAlert', function () {
			browser.assert.elements(OSWRootRemoteStorageNetworkOfflineAlert, 1)
		});

	});

	context('OSWRootRemoteStorageErrorUnauthorized', function test_OSWRootRemoteStorageErrorUnauthorized () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OSWRootRemoteStorageError: 'Unauthorized',
			});
		});
		
		it('shows OSWRootRenewButton', function() {
			browser.assert.elements(OSWRootRenewButton, 1);
		});

	});

	context('OSWRootRemoteStorageConnected', function test_OSWRootRemoteStorageConnected () {

		before(function () {
			return browser.OLSKVisit(kDefaultRoute, {
				OSWRootRemoteStorageConnected: true,
			});
		});
		
		it('hides OSWStorageOptions', function() {
			browser.assert.elements(OSWStorageOptions, 0);
		});
		
		it('shows OSWConnected', function() {
			browser.assert.elements(OSWConnected, 1);
		});
	
	});

});
