// More ES8 on top of the Async and Await methods
// These are new methods against the "Object object" 
// These two make it easier to work with objects that need to behave like arrays
// *****Object.values() and Object.entries()*****
const footballer = {
    name: "Wayne Rooney",
    position: "Forward",
    club: "ManU",
    scoringAverage: 1.2
}
// 1.) Object.value() -- creates an Array with all the values of the properties in that Object
// const footballerVals = Object.values(footballer);
// console.log(footballerVals)

// 2.) Object.entries() --gets the full key value pair and puts each one into an index in an array.
// so, you get an Array of arrays...
const footballerEntries = Object.entries(footballer);
// console.log(footballerEntries); 
// console.log(footballerEntries[0][1]);


// 1st using the For in as an example 
// const footballerVals = [];
// for (prop in footballer) {
//     footballerVals.push(footballer[prop])
// }
// console.log(footballerVals);

//-------------------------------------------------------
// These are prototypes of string just like the toUppercase() utility function
// You can run these against any string
// use if you need to format entries to be the same length...ie(databases)
const name = "Wayne Rooney";
// 1.) padEnd() -- takes 2 args:
// 1. How long you want the string to behave
// 2. What should be added in the extra characters... default: " "
// DOES NOT MUTATE the string
// BUT RETURNS A MUTATION OF the string at the end
console.log(name.padEnd(20,"b") + "test");
console.log(name);

// 2.) str.padStart() -- takes 2 args too:
// 1. How long you want the string to behave
// 2. What should be added in the extra characters... default: " "
// DOES NOT MUTATE the string
// BUT RETURNS A MUTATION OF the string at the beginning
console.log(name.padStart(20,"a"));


//-------------------------------------------------------
// Object.getOwnPropertyDescriptors() - method to run against objects
// 1. it goes through and looks at every property and the 4 decriptors that exists...
// value, writable, enumerable, configurable

const descriptors = Object.getOwnPropertyDescriptors(footballer);
console.log(descriptors)

//------------------------------------------------------------------
// Trailing commas in functions
// already existed for arrays, es1
const worldCupClubs = [
    `England`,
    `Senegal`,
    `France`,
    `Russia`,
]
console.log("\n");
// ES5, added for objects
const england = {
    name: "England",
    place: "3rd",
}
console.log(england);

// ES8, added for functions
function sum(x, y,) {
    return x + y
}
console.log(sum(2,3,));