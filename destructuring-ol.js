//*****************
// Object Literal
// ****************
// 
// 3 primary ways of making an Object
// #1
/*let x = new Object();
console.log(x);*/


// #2 Another way
/*let x = Object.create(null);
console.log(x);*/

// #3 A 3rd way (best way-> Object literal)
/*let x = {
	a: 1,
	b:2
};
console.log(x);*/

// More Objects
/*const stuffFromElseWhere = {
	name: "Hill",
	career: "Software Engineer",
	language: "JS",
	aMethod: function(){
		console.log("I enjoy learning JavaScript!")
	}
}
const name = stuffFromElseWhere.name;
const aMethod = stuffFromElseWhere.aMethod();

// Making more objects
const newThing = {
	name: name,
	aMethod: aMethod,
}

// ******* Do this *********
const newThing2 = {
	name,
	aMethod(){
		console.log("I learn JavaScript");
	}
}

console.log(newThing);
console.log(newThing2);*/



//******************
 // Desconstructing
 //*****************
const someJSON= {
	vote_cont: 541,
	id: 460793,
	video: false,
	vote_average: 5.9,
	title: "Olaf's Frozen Adventure",
	popularity: 96.893887,
	poster_path: "/As8WTtxXs9e3cBit3ztTf7zoRmm.jpg",
	original_language: "en",
	original_title: "Olaf's Frozen Adventure",
	genre_ids: [
		12,
		16,
		35,
		10751,
		14,
		10402
	],
	backdrop_path: "/9K4QqQZg4TVXczBGDiVY4Aey3Rn.jpg",
	adult: false,
	overview: "Olaf is on a mission to harness the best holiday traditions for Anna, Elsa, and Kristoff.",
	release_date: "2017-10-27"
}


// OLD WAY
// const title = someJSON.title;
// const overview = someJSON.overview;
// const release_date = someJSON.release_date;

// processData({
// 	title,
// 	overview,
// 	release_date
// });

// COOL NEW WAY `CHI CHING`
// This is destructoring at it's simplest form
// We are destructoring an object into variables we want
// This is all done in a single line opposed to the OLD WAY
const { title, overview, release_date} = someJSON;
// console.log(title);
// console.log(release_date);
processData({
	title,
	overview,
	release_date
})


// const{ title: movieTitle, overview: movieOverview, release_date: x} = someJSON;
// console.log(x);


// Good way to destructure code
/*function processData(data){
	// Something important happens.....
	const { title, release_date, overview } = data;
	console.log(`${title} is an awesome flick. 
	It came out on ${release_date}.${overview}`);
}*/


// The VERY BEST WAY to destructure code
function processData({ title, release_date, overview }){
	//console.log(`${title} is an awesome flick. It came out on ${release_date}.${overview}`);
}

// go into nested objects
// grab the 1st and 2nd genre_ids
/*const { genre_ids: {[0]: firstGenre, [1]: secondGenre} } = someJSON;
console.log(firstGenre);
console.log(secondGenre);*/


// Another mind blowing way of destructuring
/*getArea({height: 200, width: 70})
// Named params in a function
function getArea({width, height}){
	// ...
	console.log(width);
}*/


//*******************
//Destructuring ARRAYS
//********************
/*const [first, second, third] = someJSON.genre_ids;
console.log(first, second, third);
const [,,,fourth, fifth] = someJSON.genre_ids;
console.log(fourth, fifth);
//using the rest operator
const [,two,...others] = someJSON.genre_ids;
console.log(others);*/



//*****************
// Common UseCases (Aweful Way)
//***************
function userProfile(userData){
	//Aweful Way
	const name = userData.name;
	const address = userData.address;
	//...
}


// (Better Way)
function userProfile(userData) {
	// Better Way
	const {name, address} = userData;
}


// (Best Way)
function userProfile({name, address}){
	// Best Way
}


