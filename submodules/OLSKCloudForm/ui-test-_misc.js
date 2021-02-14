const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKCloudForm_Misc', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	describe('OLSKCloudFormAddressField', function test_OLSKCloudFormAddressField () {
		
		it('sets type', function () {
			browser.assert.attribute(OLSKCloudFormAddressField, 'type', 'email')
		});

		it('sets placeholder', function () {
			browser.assert.attribute(OLSKCloudFormAddressField, 'placeholder', 'example@5apps.com')
		});

		it('sets autofocus', function () {
			browser.assert.attribute(OLSKCloudFormAddressField, 'autofocus', '')
		});

		it('sets required', function () {
			browser.assert.attribute(OLSKCloudFormAddressField, 'required', '')
		});

		context('submit', function () {

			before(function () {
				browser.assert.text('#TestOLSKCloudFormDispatchStorage', '0');
				browser.assert.text('#TestOLSKCloudFormDispatchStorageData', 'undefined');
			});

			before(function () {
				browser.fill(OLSKCloudFormAddressField, 'alfa@bravo.charlie');
			});

			before(function () {
				return browser.fire(OLSKCloudForm, 'submit');
			});
			
			it('sends OLSKCloudFormDispatchStorage', function () {
				browser.assert.text('#TestOLSKCloudFormDispatchStorage', '1')
				browser.assert.text('#TestOLSKCloudFormDispatchStorageData', 'alfa@bravo.charlie')
			});
			
		});

	});

	describe('OLSKCloudFormConnectButton', function test_OLSKCloudFormConnectButton () {		

		context('submit', function () {

			before(function () {
				browser.pressButton(OLSKCloudFormConnectButton);
			});
			
			it('sends OLSKCloudFormDispatchStorage', function () {
				browser.assert.text('#TestOLSKCloudFormDispatchStorage', '2')
			});
			
		});

	});

	describe('OLSKCloudFormRegisterLink', function test_OLSKCloudFormRegisterLink () {

		it('sets href', function () {
			browser.assert.attribute(OLSKCloudFormRegisterLink, 'href', 'https://5apps.com/users/sign_up?site=storage')
		});

		it('sets target', function () {
			browser.assert.attribute(OLSKCloudFormRegisterLink, 'target', '_blank')
		});
		
	});

});
