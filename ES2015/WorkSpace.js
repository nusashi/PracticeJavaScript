import Hello from './HelloWorld.js';
import * as Module from './TemplateModule.js';
import * as Class from './TemplateClass.js';


window.onload = () => {
	Hello();
	Module.templateFunc1();
	let tempInstance = new Class.TemplateClass('test');
};