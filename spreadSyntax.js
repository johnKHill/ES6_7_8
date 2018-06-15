// Spread Syntax = My stuff is already an array. You got separate params, unpack it.

//**************
// Function #1 
//************
// function sum(a, b, c, d, e){
// 	return a + b + c + d + e;
// }
// const numbers =[1, 2, 3, 4, 5];
//const uglyWay = sum(numbers[0], numbers[1]);
//console.log(uglyWay);

//const oldWay = sum.apply(null, numbers);
//console.log(oldWay);

// const spreadWay = sum(...numbers);
// console.log(spreadWay);




//*********************************
// Function #2 
//********************************
// function memberDiscount(price, discount = 0.2, tax= 0.06 ){
// 	return (price - (price * discount)) * (1 + tax);
// }

// const member1 = [48.99, .3, .09];
// const member1FinalPrice = memberDiscount(...member1);
// console.log(member1FinalPrice);



//**************
// Function #3
//************
// function aReducer(state, action){
// 	//let newState = Object.assign({}, state);
// 	let newState = {...state};
// 	newState.newProperty = action.payload;
// 	console.log(newState);
// 	console.log(state);
// 	return newState;
// }

// const currState = {
// 	a:1,
// 	b:2,
// 	c:3	
// }

// action = {
// 	type: "done",
// 	payload: 30
// }

// aReducer(currState, action);



//**************
// Function #4
// Create objects from constructors
//************
// function Ball(radius, x, y) {
// 	this.r = radius;
// 	this. x = x;
// 	this. y = y;
// }

// let ballArg = [50, 100, 100];
// //const ball = new Ball(ballArg[0],ballArg[1],ballArg[2]);
// //const ball = Ball.apply(new Ball(), ballArg);

// // NEW OBJECT FROM CONSTRUCTOR WITH SPREAD SYNTAX
// const ball2 = new Ball(...ballArg);
// console.log(ball2);

// // Spread with an ARRAY
// const numberSet = [444, 645, 23, 354, 756, 45, 5, 223, 32];
// console.log(Math.min(...numberSet));

// // Drop multiple elements into an array (SPREAD IS UNPACKING THE ARRAY ALL AT ONCE)
// const others = [`a`, `b`, `c`];
// const myArray = [1, 2, 3, 4,...others, 6, 7, 8];
// console.log(myArray);



let myArray2 = [1, 2, 3, 4];
//let myArray3 = myArray2.slice(); // makes a copy
let myArray3 = [...myArray2];
myArray3.push(5);
console.log(myArray2);
console.log(myArray3);

























































