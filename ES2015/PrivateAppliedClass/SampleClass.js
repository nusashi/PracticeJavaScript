'use strict';
import ns from './namespace.js';
 
const privates = ns();
 
export default class Foo {
	constructor() {
		const self = privates(this);
		self.privateProp = 1;
		this.prop = 2;
 
		self.privateMethod1 = privateMethod1.bind(this);
		self.privateMethod2 = privateMethod2.bind(this);
	}
 
	method() {
		const self = privates(this);
		return self.privateProp + self.privateMethod1();
	}
}
 
function privateMethod1() {
	const self = privates(this);
	return self.privateProp + this.prop;
}
function privateMethod2() {
	return this.method();
}