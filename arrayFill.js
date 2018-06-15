// Array.prototype.fill() === Does Mutate the array

const arr1 = [2, 4, 5, "a", 17, "r", 9, 9];
// args
// 1. Value you want to fill in
// 2. The starting index for that value
// 3. The stopping index
//  It's a mutating function
arr1.fill("b", 1);
console.log(arr1);

// const arr2 = [1, 2, 3, 4];
// console.log(arr2.slice(1, 3));
// console.log(arr2);
// 
const arr2 = [2, 4, 5, "a", 17, "r", 9, 9];
arr2.fill("c", -3);
console.log(arr2);


// similar to splice...
let discountMonths = ['Jan', 'Feb', 'April', 'Nov'];
// 1. Where to start
// 2. how many to delete
// 3. what to insert
discountMonths.splice(3, 0, 'August', 'August', 'August');
console.log(discountMonths);