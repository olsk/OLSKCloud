let _AppClass;
export const AppClass = function (inputData) {
	_AppClass = inputData;
};

let _AppContainer;
export const AppContainer = function (inputData) {
	_AppContainer = inputData;
};

let appInstance;

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
	
	appInstance = new _AppClass({
		target: _AppContainer,
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
};
