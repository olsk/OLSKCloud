const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKCloudForm_Misc', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	describe('OLSKCloudForm', function test_OLSKCloudForm () {
		
		it('classes OLSKDecor', function () {
			return browser.assert.hasClass(OLSKCloudForm, 'OLSKDecor');
		});

	});

	describe('OLSKCloudFormAddressField', function test_OLSKCloudFormAddressField () {

		it('classes OLSKDecorInput', function () {
			return browser.assert.hasClass(OLSKCloudFormAddressField, 'OLSKDecorInput');
		});
		
		it('sets type', function () {
			return browser.assert.attribute(OLSKCloudFormAddressField, 'type', 'email')
		});

		it('sets placeholder', function () {
			return browser.assert.attribute(OLSKCloudFormAddressField, 'placeholder', 'example@5apps.com')
		});

		it('sets autofocus', function () {
			return browser.assert.attribute(OLSKCloudFormAddressField, 'autofocus', '')
		});

		it('sets required', function () {
			return browser.assert.attribute(OLSKCloudFormAddressField, 'required', '')
		});

	});

	describe('OLSKCloudFormConnectButton', function test_OLSKCloudFormConnectButton () {		

		it('sets disabled', function () {
			return browser.assert.attribute(OLSKCloudFormConnectButton, 'disabled', '')
		});

		context('valid', function () {

			before(function () {
				browser.fill(OLSKCloudFormAddressField, 'alfa@bravo.charlie');
			});

			it('sets disabled', function () {
				return browser.assert.attribute(OLSKCloudFormConnectButton, 'disabled', null);
			});
			
		});

		context('submit', function () {

			before(function () {
				browser.assert.text('#TestOLSKCloudFormDispatchSubmit', '0');
				browser.assert.text('#TestOLSKCloudFormDispatchSubmitData', 'undefined');
			});

			before(function () {
				return browser.fire(OLSKCloudForm, 'submit');
			});

			before(function () {
				browser.pressButton(OLSKCloudFormConnectButton);
			});
			
			it('sends OLSKCloudFormDispatchSubmit', function () {
				browser.assert.text('#TestOLSKCloudFormDispatchSubmit', '2')
				browser.assert.text('#TestOLSKCloudFormDispatchSubmitData', 'alfa@bravo.charlie')
			});
			
		});

	});

	describe('OLSKCloudFormRegisterLink', function test_OLSKCloudFormRegisterLink () {

		it('sets href', function () {
			return browser.assert.attribute(OLSKCloudFormRegisterLink, 'href', 'https://5apps.com/users/sign_up?site=storage')
		});

		it('sets target', function () {
			return browser.assert.attribute(OLSKCloudFormRegisterLink, 'target', '_blank')
		});
		
	});

});
