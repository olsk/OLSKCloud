(function OLSKPostinstallExternalAssets() {
	require('./node_modules/OLSKExpress/modules/OLSKAssets/main.js').OLSKAssetsCopyAssetsFromTo([
		'normalize.css',
				'OLSKUIAssets',
	], require('path').join(__dirname, 'node_modules'), require('path').join(__dirname, '_shared/__external'));
})();
