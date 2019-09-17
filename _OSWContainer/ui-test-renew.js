import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OSWContainerRenew', function () {

	before(function() {
		return browser.visit(`${ kDefaultRoute.OLSKRoutePath }?OSWContainerRemoteStorageError=Unauthorized`);
	});

	before(function () {
		return browser.pressButton(OSWContainerRenewButton)
	});
	
	it('sends ContainerDispatchOptionsRenew', function () {
		browser.assert.text('#TestContainerDispatchOptionsRenew', '1')
	});

});
