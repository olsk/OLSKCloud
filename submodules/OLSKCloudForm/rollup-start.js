import RollupStart from './main.svelte';

const OLSKCloudForm = new RollupStart({
	target: document.body,
	props: {
		OLSKCloudFormDispatchSubmit (inputData) {
			window.TestOLSKCloudFormDispatchSubmit.innerHTML = parseInt(window.TestOLSKCloudFormDispatchSubmit.innerHTML) + 1;
			window.TestOLSKCloudFormDispatchSubmitData.innerHTML = inputData;
		},
	},
});

export default OLSKCloudForm;
