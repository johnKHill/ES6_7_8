// Promises

// JavaScript is async.

console.log("1");
setTimeout(()=>{
	console.log("2");
},0);

for(let i = 0; i < 10000000; i++){
	// looping...
}
console.log("Loop done");

// Initial request to get list of movies
// With that list of movies, comes all their id's. 
// Take the id's and get specific information.
// With each movie data, we want to get the cast list
// 
$.getJSON(MovieURL,(movieData)=>{
	$.getJSON(specificMovieURL, (thisMovie)=>{
		$.getJSON(specificMovieCastURL, (castData)=>{
			// finally, we can do something with:
			// 1. movieData
			// 2. thisMovie
			// 3. castData
		})
	})
})
$.prototype.getJSON = function(url, callback){
	//doing stuff....
	callback(dataIGot)
}



// JS libraries to FAKE PROMISES
// -Bluebird
// -Q

// What is a Promis?
// -All a promise is , is a JS constructor (class) that gives you a few methods.
// - Hopefully, these methods make your code easier to read

// Methods:
// - then
// - all
// - race
// -- resolve
// -- reject


let myFirstPromise = new Promise();
console.log(myFirstPromise);



























































































































































































