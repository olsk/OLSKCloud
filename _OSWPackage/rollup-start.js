import mod from './main.js';

import Main from '../_OSWRoot/__compiled/ui-behaviour.js';
mod.ValueClass(Main);

const Widget = function (inputData) {
	mod.ValueRemoteStorage(inputData);

	this.attach = function (inputData) {
		mod.ValueContainer(document.getElementById(inputData));
		mod.CommandInstanceCreate();
	}
}

export default Widget;
