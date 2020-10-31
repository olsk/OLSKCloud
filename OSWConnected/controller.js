exports.OLSKControllerRoutes = function() {
	return [{
			OLSKRoutePath: '/stub/OSWConnected',
			OLSKRouteMethod: 'get',
			OLSKRouteFunction (req, res, next) {
				return res.render(require('path').join(__dirname, 'stub-view'));
			},
			OLSKRouteSignature: 'OSWConnectedStubRoute',
			OLSKRouteLanguages: ['en', 'fr', 'es'],
			OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
		}];
};
