const ContainerDelegate = {

	TestStorageOptionsDispatchSelect(inputData) {
		window.TestContainerDispatchOptionsSelect.innerHTML = parseInt(window.TestContainerDispatchOptionsSelect.innerHTML) + 1;

		window.TestContainerDispatchOptionsSelectValue.innerHTML = inputData.detail;
	},

	TestStorageOptionsDispatchRenew(inputData) {
		window.TestContainerDispatchOptionsRenew.innerHTML = parseInt(window.TestContainerDispatchOptionsRenew.innerHTML) + 1;
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

window.OSWContainerStubBehaviour = mod;
