exports.OLSKControllerRoutes = function() {
	return [{
			OLSKRoutePath: '/stub/OSWRoot',
			OLSKRouteMethod: 'get',
			OLSKRouteFunction (req, res, next) {
				return res.render(require('path').join(__dirname, 'ui-view'));
			},
			OLSKRouteSignature: 'OSWRootStubRoute',
			OLSKRouteLanguageCodes: ['en', 'fr', 'es'],
			OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
		}];
};
