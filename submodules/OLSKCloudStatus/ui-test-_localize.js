const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
	};

	describe(`OLSKCloudStatus_Localize-${ OLSKRoutingLanguage }`, function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage,
			});
		});

		it('localizes OLSKCloudStatusSyncStartButton', function () {
			browser.assert.attribute(OLSKCloudStatusSyncStartButton, 'title', uLocalized('OLSKCloudStatusSyncStartButtonText'))
		});

		it('localizes OLSKCloudStatusDisconnectButton', function () {
			browser.assert.attribute(OLSKCloudStatusDisconnectButton, 'title', uLocalized('OLSKCloudStatusDisconnectButtonText'))
		});

		context('OLSKCloudStatusIsSyncing', function () {

			before(function() {
				return browser.OLSKVisit(kDefaultRoute, {
					OLSKRoutingLanguage,
					OLSKCloudStatusIsSyncing: true,
				});
			});

			it('localizes OLSKCloudStatusSyncStopButton', function () {
				browser.assert.attribute(OLSKCloudStatusSyncStopButton, 'title', uLocalized('OLSKCloudStatusSyncStopButtonText'))
			});
		
		});

		context('disconnect', function () {
		
			it('localizes OLSKCloudStatusDisconnectConfirm', function() {
				browser.assert.OLSKConfirmQuestion(function () {
					return browser.pressButton(OLSKCloudStatusDisconnectButton);
				}, uLocalized('OLSKCloudStatusDisconnectConfirmText'));
			});

		});

	});

});
