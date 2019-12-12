const mod = {

	// SETUP

	SetupEverything() {
		console.log(OLSKStorageWidget);
	},

	// LIFECYCLE

	LifecyclePageWillLoad () {
		moi.SetupEverything();
	},

};

window.OSWPackageBehaviour = mod;
