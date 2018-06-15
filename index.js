// concantinationg 
 const name = `Hill`
// const hello = `Hello, ` + name;;

// console.log(hello);
// // Interpolation
// 
// const selectQuery = `SELECT * FROM users WHERE name = "` + name + `" AND city = "` + name + `"`;
// console.log(selectQuery);


// spintf
//Python
// newString = `There are %d kinds of people in the world. %s Those who understand binary and those who don\'t.` % (10, `Those who undedrstand binary`, , ,);


//Template Literals
// const hello = `Hello, ${name}`;
// console.log(hello);

// const selectQuery = `SELECT * FROM users WHERE name = "${name}" AND city = "${name}`;
// console.log(selectQuery);

// Multiline
// const string = `It was a rainy day.
// It was ver rainy.
// It was also warm.`
// console.log(string);

// const newHTML =`
// <div class="text">
// 	${name}
// </div>`
// console.log(newHTML);
// 
// Expressions
const anExpression = `43 * 1902 = ${43*1902}`;
console.log(anExpression);

let isMember = true;
const aTernary = `Your price is ${isMember ? "$2.00" : "$4.00"}.`;
console.log(aTernary);

isMember = false;
const aTernary2 = `Your price is ${isMember ? "$2.00" : "$4.00"}.`;
console.log(aTernary2);
