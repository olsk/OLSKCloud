import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OSWOptionRemoteStorageMisc', function () {

describe('OSWOptionRemoteStorageForm', function testOSWOptionRemoteStorageForm () {

	before(function() {
		return browser.visit(kDefaultRoute.OLSKRoutePath);
	});

	it('sets OSWOptionRemoteStorageAddressField placeholder', function () {
		browser.assert.attribute(OSWOptionRemoteStorageAddressField, 'placeholder', 'example@example.com')
	});

	it('sets OSWOptionRemoteStorageAddressField type', function () {
		browser.assert.attribute(OSWOptionRemoteStorageAddressField, 'type', 'email')
	});

	it('sets OSWOptionRemoteStorageAddressField autofocus', function () {
		browser.assert.attribute(OSWOptionRemoteStorageAddressField, 'autofocus', '')
	});

	it('sets OSWOptionRemoteStorageAddressField required', function () {
		browser.assert.attribute(OSWOptionRemoteStorageAddressField, 'required', '')
	});

	context('Submit', function testSubmit () {

		before(function () {
			browser.assert.text('#TestStorageOptionRemoteStorageDispatchSubmit', '0')
			browser.assert.text('#TestStorageOptionRemoteStorageDispatchSubmitValue', 'undefined')

			browser.fill(OSWOptionRemoteStorageAddressField, 'alfa@bravo.charlie')
			browser.click(OSWOptionRemoteStorageConnectButton)
		});
		
		it('sends StorageOptionRemoteStorageDispatchSubmit', function () {
			browser.assert.text('#TestStorageOptionRemoteStorageDispatchSubmit', '1')
		});
		
		it('includes address', function () {
			browser.assert.text('#TestStorageOptionRemoteStorageDispatchSubmitValue', 'alfa@bravo.charlie')
		});
	
	});

});

});