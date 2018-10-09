// ES7 - Exponentiation, Includes, and Rest parameter destructuring


// const proxy1 = new Proxy({}, handler);

// 1. Exponentiation
const x = 2 * 2 * 2 * 2 * 2;
const x2 = 2 ** 5; // ** raises the 2 to the 5th Power 
console.log(x);
console.log(x2);

console.log("------------------More Exponentials------------------");
// use your paraentheses
// urnary operators are not valid

const a = 3 ** 2.5;
console.log(a);
const b = 100 ** -1;
console.log(b);

const c = NaN ** 3;
console.log(c);

const d = 2 ** 3 ** 2;
console.log(d)

const e = 2 ** (3 ** 2);
console.log(e)

const f = (2 ** 3) ** 2;
console.log(f)


// Making Space
console.log("----------------------------------------------------");
// ---------------------------------------------------------------
// 2. Includes, is far more readable
// is essentially the same as indexOf except!!!!
// it returns a boolean
// 1. Motivation
const arr = [1, 2, 3,4 ,5, NaN];
if(arr.indexOf(2) > -1) {  // indexOf uses strict comparison
    console.log("Number Found")
}else{
    console.log("Number Not Found!")
}

// Includes doesn't go through the trouble of finding the index
        // It just simply lets you now true/false
        // So, it's much more clearer
const inArray = arr.includes(28);
console.log(inArray)

// Making Space
console.log("---------------------------------------------------")
console.log(2 === 2);
console.log(2.6 === 2.6);
console.log(2.6 === 2.65);
console.log(NaN === NaN);

console.log(arr.indexOf(NaN)); // doesn't think its in the array
console.log(arr.includes(NaN));



// Making Space
console.log("-------------------------------------------------------")
// ---------------------------------------------------------------------

// 3. Destructuring Rest parameters
const someJSON = {
    name: "Wayne Rooney",
    position: "Forward",
    club: "Mancgester United"
}

const { name, position, club } = someJSON;
console.log(position);


function sum(...[a,b]){
        // console.log(numbers)
        return a + b
}

console.log(sum(2, 3));
