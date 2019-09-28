exports.OLSKControllerRoutes = function() {
	return [{
			OLSKRoutePath: '/stubs/OSWRoot',
			OLSKRouteMethod: 'get',
			OLSKRouteFunction: function(req, res, next) {
				return res.render(req.OLSKLive.OLSKLivePathJoin(__dirname, 'stub-view'));
			},
			OLSKRouteSignature: 'OSWRootStubRoute',
			OLSKRouteLanguages: ['en', 'fr'],
			OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
		}];
};
