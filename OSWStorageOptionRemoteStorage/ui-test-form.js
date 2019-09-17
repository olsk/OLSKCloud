import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OSWStorageOptionsForm', function () {

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

});
