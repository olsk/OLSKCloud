exports.OLSKControllerRoutes = function() {
	return [{
			OLSKRoutePath: '/stub/OSWOptionRemoteStorage',
			OLSKRouteMethod: 'get',
			OLSKRouteFunction (req, res, next) {
				return res.render(require('path').join(__dirname, 'stub-view'));
			},
			OLSKRouteSignature: 'OSWOptionRemoteStorageStubRoute',
			OLSKRouteLanguageCodes: ['en', 'fr', 'es'],
			OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
		}];
};
