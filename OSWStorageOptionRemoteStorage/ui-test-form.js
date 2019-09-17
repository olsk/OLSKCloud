import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OSWStorageOptionRemoteStorageForm', function () {

	before(function() {
		return browser.visit(kDefaultRoute.OLSKRoutePath);
	});

	it('sets OSWStorageOptionRemoteStorageAddressField placeholder', function () {
		browser.assert.attribute(OSWStorageOptionRemoteStorageAddressField, 'placeholder', 'example@example.com')
	});

	it('sets OSWStorageOptionRemoteStorageAddressField type', function () {
		browser.assert.attribute(OSWStorageOptionRemoteStorageAddressField, 'type', 'email')
	});

	it('sets OSWStorageOptionRemoteStorageAddressField autofocus', function () {
		browser.assert.attribute(OSWStorageOptionRemoteStorageAddressField, 'autofocus', '')
	});

	it('sets OSWStorageOptionRemoteStorageAddressField required', function () {
		browser.assert.attribute(OSWStorageOptionRemoteStorageAddressField, 'required', '')
	});

	context('Submit', function testSubmit () {

		before(function () {
			browser.assert.text('#TestStorageOptionRemoteStorageDispatchSubmit', '0')
			browser.assert.text('#TestStorageOptionRemoteStorageDispatchSubmitValue', 'undefined')

			browser.fill(OSWStorageOptionRemoteStorageAddressField, 'alfa@bravo.charlie')
			browser.click(OSWStorageOptionRemoteStorageConnectButton)
		});
		
		it('sends StorageOptionRemoteStorageDispatchSubmit', function () {
			browser.assert.text('#TestStorageOptionRemoteStorageDispatchSubmit', '1')
		});
		
		it('includes address', function () {
			browser.assert.text('#TestStorageOptionRemoteStorageDispatchSubmitValue', 'alfa@bravo.charlie')
		});
	
	});

});
