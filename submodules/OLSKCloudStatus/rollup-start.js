import RollupStart from './main.svelte';

const OLSKCloudStatus = new RollupStart({
	target: document.body,
	props: Object.assign({
		OLSKCloudStatusIdentityText: Math.random().toString(),
		OLSKCloudStatusIsSyncing: false,
		OLSKCloudStatusDispatchSyncStart: (function () {
			window.TestOLSKCloudStatusDispatchSyncStart.innerHTML = parseInt(window.TestOLSKCloudStatusDispatchSyncStart.innerHTML) + 1;
		}),
		OLSKCloudStatusDispatchSyncStop: (function () {
			window.TestOLSKCloudStatusDispatchSyncStop.innerHTML = parseInt(window.TestOLSKCloudStatusDispatchSyncStop.innerHTML) + 1;
		}),
		OLSKCloudStatusDispatchDisconnect: (function () {
			window.TestOLSKCloudStatusDispatchDisconnect.innerHTML = parseInt(window.TestOLSKCloudStatusDispatchDisconnect.innerHTML) + 1;
		}),
	}, Object.fromEntries(Array.from((new window.URLSearchParams(window.location.search)).entries()).map(function (e, index, coll) {
		return e;
	}))),
});

export default OLSKCloudStatus;
