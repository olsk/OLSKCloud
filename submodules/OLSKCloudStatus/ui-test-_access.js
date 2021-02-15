const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKCloudStatus: '.OLSKCloudStatus',

	OLSKCloudStatusError: '.OLSKCloudStatusError',

	OLSKCloudStatusIdentity: '.OLSKCloudStatusIdentity',
	
	OLSKCloudStatusSyncStartButton: '.OLSKCloudStatusSyncStartButton',
	OLSKCloudStatusSyncStartButtonImage: '.OLSKCloudStatusSyncStartButtonImage',
	OLSKCloudStatusSyncStopButton: '.OLSKCloudStatusSyncStopButton',
	OLSKCloudStatusSyncStopButtonImage: '.OLSKCloudStatusSyncStopButtonImage',

	OLSKCloudStatusDisconnectButton: '.OLSKCloudStatusDisconnectButton',
	OLSKCloudStatusDisconnectButtonImage: '.OLSKCloudStatusDisconnectButtonImage',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OLSKCloudStatus_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});
	
	it('shows OLSKCloudStatus', function() {
		browser.assert.elements(OLSKCloudStatus, 1);
	});

	it('hides OLSKCloudStatusError', function () {
		browser.assert.elements(OLSKCloudStatusError, 0);
	});
	
	it('shows OLSKCloudStatusIdentity', function() {
		browser.assert.elements(OLSKCloudStatusIdentity, 1);
	});
	
	it('shows OLSKCloudStatusSyncStartButton', function() {
		browser.assert.elements(OLSKCloudStatusSyncStartButton, 1);
	});

	it('shows OLSKCloudStatusSyncStartButtonImage', function () {
		browser.assert.elements(OLSKCloudStatusSyncStartButtonImage, 1);
	});

	it('hides OLSKCloudStatusSyncStopButton', function () {
		browser.assert.elements(OLSKCloudStatusSyncStopButton, 0);
	});

	it('shows OLSKCloudStatusDisconnectButton', function() {
		browser.assert.elements(OLSKCloudStatusDisconnectButton, 1);
	});

	it('shows OLSKCloudStatusDisconnectButtonImage', function () {
		browser.assert.elements(OLSKCloudStatusDisconnectButtonImage, 1);
	});

	context('OLSKCloudStatusErrorText', function () {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKCloudStatusErrorText: Math.random().toString(),
			});
		});

		it('shows OLSKCloudStatusError', function () {
			browser.assert.elements(OLSKCloudStatusError, 1);
		});

	});

	context('OLSKCloudStatusIsSyncing', function () {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKCloudStatusIsSyncing: true,
			});
		});

		it('hides OLSKCloudStatusSyncStartButton', function () {
			browser.assert.elements(OLSKCloudStatusSyncStartButton, 0);
		});

		it('shows OLSKCloudStatusSyncStopButton', function () {
			browser.assert.elements(OLSKCloudStatusSyncStopButton, 1);
		});

		it('shows OLSKCloudStatusSyncStopButtonImage', function () {
			browser.assert.elements(OLSKCloudStatusSyncStopButtonImage, 1);
		});

	});

});
