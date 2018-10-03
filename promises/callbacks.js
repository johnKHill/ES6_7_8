// Callbacks
// functions are first class objects
// Pass them around
// Store them inside a variable

/*const printUpper = function(text){
	console.log(text.toUpperCase());
}

const printNumber = function(number){
	console.log(number);
}


function run(callback, input){
	callback(input);
}
console.log(printUpper);

run(function(text){
	console.log(text.toUpperCase());
}, `Hello, World`);

$.getJSON(url,(data)=>{console.log(data)});

$.prototype.getJSON = function(url, callback){
	// jquery does its httprequestobject thing from url...
	// gets data.. saves as ajax data
	(data)=>(ajaxData);
}
*/



/*$('.btn').click(()=>{
	console.log('Button was clicked!')
})
somewhere in the bowels of jquery, there is ...
const $ = function(selector){
	if(selector.indexOf(`#`) > - 1){
		document.getElementById(select)
	}
}
$.prototype.click = function(callback){
	// jquery do some stuff...
	callback();
}*/


function a(x){
	console.log(x);
	return function(y){
		console.log(x + y);
	}
}

a(2)(3);

function b(num){
	const objectToReturn = {run: `Haha, this is messed up, isn't it?`}
	return objectToReturn;
}

console.log(b(2).run);

