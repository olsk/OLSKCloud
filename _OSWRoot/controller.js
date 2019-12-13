exports.OLSKControllerRoutes = function() {
	return [{
			OLSKRoutePath: '/stub/OSWRoot',
			OLSKRouteMethod: 'get',
			OLSKRouteFunction (req, res, next) {
				return res.render(req.OLSKLive.OLSKLivePathJoin(__dirname, 'ui-view'));
			},
			OLSKRouteSignature: 'OSWRootStubRoute',
			OLSKRouteLanguages: ['en', 'fr', 'es'],
			OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
		}];
};
