// Value and reference
// Primitives and Objects
//string, number, boolean, null, undefined, symbol
/*let str = `Popeye`;
let numb = 3;
let boll = true;
let n = null;
let undef = undefined;
let s = Symbol(`mySymbol`);

let name = str; // We have copied the VALUE of str
str =`Olive Oil`;
console.log(name);

// Object are stored by reference
let obj = {
	name: `Popeye`
}

let cartoon = obj; // We didn't make a copy of the value of obj
// we made a copy of what's in obj... which is a refernce
console.log(obj);
console.log(cartoon);

cartoon.girlfriend = `Olive Oil`;
console.log(obj); // I didn't change this
console.log(cartoon);

let arr = [1, 2, 3];
let arr2 = arr;
arr2.push(4);
console.log(arr); // I didn't change this*/

let name = `Garfield`;
console.log(name);

console.log(name.toUpperCase());
console.log(name);
name = `Odie`;
console.log(name);

let x = 5;
function sum(x, y){
 x = x + y;
}

sum(x, 3);
console.log(x);

let arr = [1, 2, 3];
arr.push(1);
console.log(arr);