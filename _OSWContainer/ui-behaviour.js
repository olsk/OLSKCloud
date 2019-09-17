const ContainerDelegate = {

	StorageOptionsDispatchSelect(inputData) {
		window.TestContainerDispatchOptionsSelect.innerHTML = parseInt(window.TestContainerDispatchOptionsSelect.innerHTML) + 1;

		window.TestContainerDispatchOptionsSelectValue.innerHTML = inputData.detail;
	},

};

const mod = {

	// SETUP

	SetupEverything () {
		new Main({
			target: document.body,
			props: {
				ContainerDelegate,
			},
		})
	},

	// LIFECYCLE

	LifecyclePageWillLoad() {
		mod.SetupEverything();
	},
	
};

window.OSWContainerStubBehaviour = mod;
