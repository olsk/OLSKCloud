exports.OLSKControllerRoutes = function() {
	return [{
			OLSKRoutePath: '/stub/OSWPackage',
			OLSKRouteMethod: 'get',
			OLSKRouteFunction: function(req, res, next) {
				return res.render(req.OLSKLive.OLSKLivePathJoin(__dirname, 'ui-view'));
			},
			OLSKRouteSignature: 'OSWPackageStubRoute',
			OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
		}];
};

exports.OLSKControllerSharedStaticAssetFolders = function() {
	return [
		'__compiled',
	];
};
