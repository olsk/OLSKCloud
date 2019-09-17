module.exports = {
	OSWContainerRollupConfigCustom (inputData, options = {}) {
		if (typeof inputData !== 'object' || inputData === null) {
			throw 'OSWErrorInputInvalid';
		}

		inputData.output.format = 'umd';

		return inputData;
	},
	OLSKRollupConfigCustom (inputData, options) {
		return module.exports.OSWContainerRollupConfigCustom(inputData, options);
	}
};
