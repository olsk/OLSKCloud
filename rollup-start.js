import RollupStart from './main.svelte';

const OLSKCloud = new RollupStart({
	target: document.body,
	props: Object.assign({
		OLSKCloudDispatchRenew: (function () {
			window.TestOLSKCloudDispatchRenew.innerHTML = parseInt(window.TestOLSKCloudDispatchRenew.innerHTML) + 1;
		}),
		OLSKCloudFormDispatchSubmit: (function () {}),
		OLSKCloudStatusIsSyncing: false,
		OLSKCloudStatusDispatchSyncStart: (function () {}),
		OLSKCloudStatusDispatchSyncStop: (function () {}),
		OLSKCloudStatusDispatchDisconnect: (function () {}),
	}, Object.fromEntries(Array.from((new window.URLSearchParams(window.location.search)).entries()))),
});

export default OLSKCloud;
