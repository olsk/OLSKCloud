const mod = {

	// SETUP

	SetupEverything() {
		console.log(OLSKStorageWidget);
	},

	// LIFECYCLE

	LifecyclePageWillLoad () {
		mod.SetupEverything();
	},

};

window.OSWPackageBehaviour = mod;
