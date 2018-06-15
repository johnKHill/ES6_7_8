
const x = Array.from(`Robert`);
console.log(x);

const y = Array.from(`${3 + 5}49`);
console.log(y);

let harry = `Mr. and Mrs. Hill, of number 4.`;
let lotr = `Mr. and Mrs. James, of number 2.`;
let orwell = `Mr. and Mrs. Hogan, of number 6.`;

let lines = Array.from([harry, lotr, orwell],(lines)=> {
	return `<li>${lines}</li>`;
});
console.log(lines);

let numbers = Array.from([2,3,4],(num)=> num+num);
console.log(numbers);