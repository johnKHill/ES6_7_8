// for..of

const arr = [1, 2, 3, 10, 11, 12];
// referencing exactly what's in the index of the array
for(let i = 0; i < arr.length; i++){
	//console.log(arr[i]);
}

// for..in (exactly what's in the array too)
for(let key in arr){
	//console.log(key);
}


// For Objects
/*const obj = {
	name: "Rob",
	occ: "teacher",
	language: "JS"
}

for(let key in obj){
	console.log(key);
}*/

// Specifically to => Array.prototype.forEach
/*arr.forEach((value, i)=>{
	console.log("Value",value);
	console.log("Index",i);
});*/


//*******************************
// For..of => will work on any iterable
// //****************************
// for..in interates over the keys of the iterator
for(let key in arr){
	//console.log(key);
}

//********Versus************
// for..in iterates over the value of the iterator
for(let value of arr){
	console.log(value);
}


//Best!!!!!!!!
const str = `Johknotter Hill`;
for(let letter of str){
	console.log(letter);
}