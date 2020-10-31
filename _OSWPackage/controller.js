exports.OLSKControllerRoutes = function() {
	return [{
			OLSKRoutePath: '/stub/OSWPackage',
			OLSKRouteMethod: 'get',
			OLSKRouteFunction (req, res, next) {
				return res.render(require('path').join(__dirname, 'ui-view'));
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
