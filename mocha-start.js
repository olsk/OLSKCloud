(function OLSKMochaBrowser() {
	if (process.env.OLSK_TESTING_BEHAVIOUR !== 'true') {
		return;
	}

	const Browser = require('zombie');

	Browser.localhost('loc.tests', 3001);
	
	require('OLSKTesting')._OLSKTestingZombieExtend(Browser);

	global.OLSKBrowser = Browser;

	global.browser = new OLSKBrowser();
})();

let languageDictionary = {};
(function OLSKMochaLocalizedStrings() {
	if (process.env.OLSK_TESTING_BEHAVIOUR !== 'true') {
		return;
	}

	const pathPackage = require('path');
	const OLSKInternational = require('OLSKInternational');
	const OLSKString = require('OLSKString');

	let baseDirectory = pathPackage.join(__dirname);
	languageDictionary = require('glob').sync('*i18n*.y*(a)ml', {
	  matchBase: true,
	  cwd: baseDirectory,
	}).filter(function(e) {
	  return OLSKInternational.OLSKInternationalIsTranslationFileBasename(pathPackage.basename(e));
	}).map(function (e) {
		return pathPackage.join(baseDirectory, e);
	}).reduce(function(coll, item) {
		let languageID = OLSKInternational.OLSKInternationalLanguageID(pathPackage.basename(item));

		return (coll[languageID] = Object.assign(coll[languageID] || {}, require('js-yaml').safeLoad(require('fs').readFileSync(item, 'utf8')))) && coll;
	}, {});

	global.OLSKTestingLocalized = function(translationConstant, languageCode) {
		let outputData = OLSKInternational.OLSKInternationalLocalizedString(translationConstant, languageDictionary[languageCode]);

		return typeof outputData === 'string' ? outputData.replace('TRANSLATION_MISSING', '') : outputData;
	};

	global.OLSKTestingStringWithFormat = OLSKString.OLSKStringWithFormat;
})();

(function OLSKMochaPreprocess() {
	const fs = require('fs');
	const oldRequire = require('olsk-rollup-plugin-localize')()._OLSKRollupI18NReplaceInternationalizationToken;
	const replaceFunctions = [
		require('OLSKTesting')._OLSKTestingMochaReplaceES6Import,
		function (inputData) {
			return (oldRequire({
				code: inputData,
			}, languageDictionary) || {
				code: inputData,
			}).code;
		},
	];

	require.extensions['.js'] = function(module, filename) {
		if (filename.match('OLSKRollup')) {
			return;
		};

		try {
			return module._compile(replaceFunctions.reduce(function (coll, item) {
				return item(coll);
			}, fs.readFileSync(filename, 'utf-8')), filename);
		} catch (err) {
			// console.log(code); // eslint-disable-line no-console
			throw err;
		}
	};
})();

(function OLSKMochaErrors() {
	process.on('unhandledRejection', () => {
		// console.log('Unhandledd Rejection at:', arguments)
		// Recommended: send the information to sentry.io
		// or whatever crash reporting service you use
	});
})();
