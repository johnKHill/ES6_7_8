// Iterables
// 1. Iterables can be iterated over with for..of 
// 2. Iterables have an iterator defined for them
// Default : Array, Map, WeakMap, String, TypedArray, Set, WeakSet
// 3. It has a [Symbol.iterator] property (the defined iterator, #2)
const aString = "Hello"
console.log(aString[Symbol.iterator]);
const obj = {name: "Fred"}
console.log(obj[Symbol.iterator]);

// for..of, Produces the value, use this mostly
for(let letter of aString){
    console.log(letter)
}

//for loop
for(let i = 0; i < aString.length; i++) {
    console.log(aString[i]);
}

// for..in (the little brother), Produces the key/property on any data type
for(let key in aString){
    console.log(aString[key])
}



//--------------------------------------
// JavaScript Demo: Symbol.iterator
const iterable1 = new Object();

iterable1[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

for(let value of iterable1){
    console.log(value)
}
// expected output: Array [1, 2, 3]