exports.OLSKControllerRoutes = function() {
	return [{
			OLSKRoutePath: '/stub/OSWOptionRemoteStorage',
			OLSKRouteMethod: 'get',
			OLSKRouteFunction: function(req, res, next) {
				return res.render(req.OLSKLive.OLSKLivePathJoin(__dirname, 'stub-view'));
			},
			OLSKRouteSignature: 'OSWOptionRemoteStorageStubRoute',
			OLSKRouteLanguages: ['en', 'fr', 'es'],
			OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
		}];
};
