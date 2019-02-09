import internal from './internal.js';
import Foo from './FooClass.js';
const foo = new Foo();
console.log(internal(foo).prop); // -> 1;