// Set
// A set is ver similar to an array... except it is not an array. (no push, no pop, etc.)
// It can hold any data typeofAll elements are unique
// A set is iterable (insertion order)

/*let employeeId = new Set([`a12`, `e7`, `c2`, `a12`]);
console.log(employeeId);
employeeId.forEach((emp)=>{
	console.log(emp);
})*/

let employeeSet = new Set();
console.log(employeeSet);

const obj = {
	name: `Jane`,
	position: `CTO`,
	tenrure: `12 years`
}

// size property (length in array)
employeeSet.add(obj);

employeeSet.add(obj);

console.log(employeeSet);

// add
// clear - empty the Set
// delete a particular elementsentries - like Map, returns and iterable, each element in the iterable
// is an array, [0] key = value, [1] value = value
// console.log(employeeSet.entries());
// forEach
// has - check for presence of an element
// keys, values

employeeSet.has(obj);