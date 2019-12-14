const pathPackage = require('path');

module.exports = {
	OSWPackageRollupConfigCustom (inputData, options) {
		if (typeof inputData !== 'object' || inputData === null) {
			throw new Error('OSWErrorInputNotValid');
		}

		inputData.output.name = 'OLSKStorageWidget';

		inputData.output.file = pathPackage.join(__dirname, '__compiled/OLSKStorageWidget.js');

		if (!inputData.plugins.length) {
			return inputData
		};

		inputData.plugins.splice(inputData.plugins.indexOf(inputData.plugins.filter(function (e) {
			if (!e) {
				return false;
			}
			
			return e.name === 'svelte';
		}).pop()), 1, require('rollup-plugin-svelte')(Object.assign(require('OLSKRollupScaffold').OLSKRollupScaffoldSvelteConfig(options), {
			css (css) {
				css.code = require('fs').readFileSync(pathPackage.join(__dirname, '../_OSWRoot/__compiled/ui-style.css'), 'utf8').replace('ui-style', 'OLSKStorageWidget');

				return css.write(pathPackage.join(__dirname, '__compiled/OLSKStorageWidget.css'));
			},
		})));

		return inputData;
	},
	OLSKRollupConfigCustom (inputData, options) {
		return module.exports.OSWPackageRollupConfigCustom(inputData, options);
	},
};
