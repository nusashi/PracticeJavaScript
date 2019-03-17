// import Hello from './HelloWorld.js';
// import * as Module from './TemplateModule.js';
// import * as Class from './TemplateClass.js';
import FooClass from './PrivateAppliedClass/FooClass.js';
import internal from './PrivateAppliedClass/internal.js';

window.onload = () => {
	let tempInstance = new FooClass();
	let temp = internal(tempInstance).prop;
	window.alert(temp);

	Number.prototype.parseInt = function(value1,value2) {
		if(value2 === undefined || value2 === null) {
			return parseInt(value1);
		}else{
			return parseInt(value1,value2);
		}
	};

	window.alert(Number.parseInt('0x1111',16));
};