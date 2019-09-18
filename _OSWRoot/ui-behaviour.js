const ContainerDelegate = {

	TestOSWStorageOptionsDelegateConnect(inputData) {
		window.TestOSWStorageOptionsDelegateConnect.innerHTML = parseInt(window.TestOSWStorageOptionsDelegateConnect.innerHTML) + 1;

		window.TestOSWStorageOptionsDelegateConnectValue.innerHTML = inputData.detail;
	},

	TestOSWRootDelegateRenew(inputData) {
		window.TestOSWRootDelegateRenew.innerHTML = parseInt(window.TestOSWRootDelegateRenew.innerHTML) + 1;
	},

};

const mod = {

	// SETUP

	SetupEverything () {
		new Main({
			target: document.body,
			props: Object.assign(Object.fromEntries((new window.URLSearchParams(window.location.search)).entries()), {
				ContainerDelegate: Object.fromEntries(Object.entries(ContainerDelegate).map(function (e) {
					return [e[0].replace('Test', ''), e[1]];
				})),
			}),
		})
	},

	// LIFECYCLE

	LifecyclePageWillLoad() {
		mod.SetupEverything();
	},
	
};

window.OSWRootStubBehaviour = mod;
