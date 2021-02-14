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
				browser.assert.text('#TestOLSKCloudFormDispatchSubmit', '0');
				browser.assert.text('#TestOLSKCloudFormDispatchSubmitData', 'undefined');
			});

			before(function () {
				browser.fill(OLSKCloudFormAddressField, 'alfa@bravo.charlie');
			});

			before(function () {
				return browser.fire(OLSKCloudForm, 'submit');
			});
			
			it('sends OLSKCloudFormDispatchSubmit', function () {
				browser.assert.text('#TestOLSKCloudFormDispatchSubmit', '1')
				browser.assert.text('#TestOLSKCloudFormDispatchSubmitData', 'alfa@bravo.charlie')
			});
			
		});

	});

	describe('OLSKCloudFormConnectButton', function test_OLSKCloudFormConnectButton () {		

		context('submit', function () {

			before(function () {
				browser.pressButton(OLSKCloudFormConnectButton);
			});
			
			it('sends OLSKCloudFormDispatchSubmit', function () {
				browser.assert.text('#TestOLSKCloudFormDispatchSubmit', '2')
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
