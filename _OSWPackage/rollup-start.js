import * as mod from './main.js';

import Main from '../_OSWContainer/__compiled/ui-behaviour.js';
mod.AppClass(Main);

const Widget = function () {
	this.attach = function (inputData) {
		mod.AppContainer(document.getElementById(inputData));
		mod.instanceCreate();
	}
}

export default Widget;
