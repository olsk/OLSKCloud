const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKCloudForm: '.OLSKCloudForm',

	OLSKCloudFormAddressField: '.OLSKCloudFormAddressField',
	OLSKCloudFormConnectButton: '.OLSKCloudFormConnectButton',

	OLSKCloudFormRegisterLink: '.OLSKCloudFormRegisterLink',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('OLSKCloudForm_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});
	
	it('shows OLSKCloudForm', function() {
		return browser.assert.elements(OLSKCloudForm, 1);
	});
	
	it('shows OLSKCloudFormAddressField', function() {
		return browser.assert.elements(OLSKCloudFormAddressField, 1);
	});
	
	it('shows OLSKCloudFormConnectButton', function() {
		return browser.assert.elements(OLSKCloudFormConnectButton, 1);
	});
	
	it('shows OLSKCloudFormRegisterLink', function() {
		return browser.assert.elements(OLSKCloudFormRegisterLink, 1);
	});

});
