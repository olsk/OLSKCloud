import RollupStart from './main.svelte';

const OLSKCloudForm = new RollupStart({
	target: document.body,
	props: {
		OLSKCloudFormDispatchStorage (inputData) {
			window.TestOLSKCloudFormDispatchStorage.innerHTML = parseInt(window.TestOLSKCloudFormDispatchStorage.innerHTML) + 1;
			window.TestOLSKCloudFormDispatchStorageData.innerHTML = inputData;
		},
	},
});

export default OLSKCloudForm;
