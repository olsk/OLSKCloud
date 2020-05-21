import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OSWOptionRemoteStorage_Misc', function () {

describe('OSWOptionRemoteStorageHelpAnchor', function() {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('sets target', function () {
		browser.assert.attribute(OSWOptionRemoteStorageHelpAnchor, 'target', '_blank')
	});
	
});

describe('OSWOptionRemoteStorageForm', function test_OSWOptionRemoteStorageForm () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('sets OSWOptionRemoteStorageAddressField placeholder', function () {
		browser.assert.attribute(OSWOptionRemoteStorageAddressField, 'placeholder', 'example@5apps.com')
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

	context('Submit', function test_Submit () {

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
