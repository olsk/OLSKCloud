let _AppClass;
export const AppClass = function (inputData) {
	_AppClass = inputData;
};

let appContainer, appInstance;

const OSWPackageValidateOptionsObject = function (inputData) {
	if (typeof inputData !== 'object' || inputData === null) {
		throw new Error('OSWErrorInputNotObject');
	}

	return true;
};

export const instanceCreate = function () {
	if (instanceExists()) {
		instanceDestroy();
	}

	if (typeof document !== 'undefined') {
		appContainer = document.createElement('div');
		document.body.appendChild(appContainer);
	}
	
	appInstance = new _AppClass({
		target: appContainer,
		props: {},
	});
};

export const instanceExists = function () {
	return !!appInstance;
};

export const instanceDestroy = function () {
	appInstance.$destroy();
	appInstance = undefined;

	if (typeof document === 'undefined') {
		return;
	}

	appContainer.remove();
	appContainer = undefined;
};
