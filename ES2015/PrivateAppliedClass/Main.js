import internal from './internal.js';
import Foo from './Foojs';
const foo = new Foo();
console.log(internal(foo).prop); // -> 1;