const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKCloudStatus: '.OLSKCloudStatus',

	OLSKCloudStatusIdentity: '.OLSKCloudStatusIdentity',
	
	OLSKCloudStatusSyncStartButton: '.OLSKCloudStatusSyncStartButton',
	OLSKCloudStatusSyncStartButtonImage: '.OLSKCloudStatusSyncStartButtonImage',
	OLSKCloudStatusSyncStopButton: '.OLSKCloudStatusSyncStopButton',
	OLSKCloudStatusSyncStopButtonImage: '.OLSKCloudStatusSyncStopButtonImage',

	OLSKCloudStatusDisconnectButton: '.OLSKCloudStatusDisconnectButton',
	OLSKCloudStatusDisconnectButtonImage: '.OLSKCloudStatusDisconnectButtonImage',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('OLSKCloudStatus_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});
	
	it('shows OLSKCloudStatus', function() {
		return browser.assert.elements(OLSKCloudStatus, 1);
	});

	it('shows OLSKCloudStatusIdentity', function() {
		return browser.assert.elements(OLSKCloudStatusIdentity, 1);
	});
	
	it('shows OLSKCloudStatusSyncStartButton', function() {
		return browser.assert.elements(OLSKCloudStatusSyncStartButton, 1);
	});

	it('shows OLSKCloudStatusSyncStartButtonImage', function () {
		return browser.assert.elements(OLSKCloudStatusSyncStartButtonImage, 1);
	});

	it('hides OLSKCloudStatusSyncStopButton', function () {
		return browser.assert.elements(OLSKCloudStatusSyncStopButton, 0);
	});

	it('shows OLSKCloudStatusDisconnectButton', function() {
		return browser.assert.elements(OLSKCloudStatusDisconnectButton, 1);
	});

	it('shows OLSKCloudStatusDisconnectButtonImage', function () {
		return browser.assert.elements(OLSKCloudStatusDisconnectButtonImage, 1);
	});

	context('OLSKCloudStatusIsSyncing', function () {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKCloudStatusIsSyncing: true,
			});
		});

		it('hides OLSKCloudStatusSyncStartButton', function () {
			return browser.assert.elements(OLSKCloudStatusSyncStartButton, 0);
		});

		it('shows OLSKCloudStatusSyncStopButton', function () {
			return browser.assert.elements(OLSKCloudStatusSyncStopButton, 1);
		});

		it('shows OLSKCloudStatusSyncStopButtonImage', function () {
			return browser.assert.elements(OLSKCloudStatusSyncStopButtonImage, 1);
		});

	});

});
