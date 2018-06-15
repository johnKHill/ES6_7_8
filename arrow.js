// NORMAL WAY OF WRITING A FUNCTION
// const myArray = [1, 2, 3];
// myArray.map(function(elem, i) {
// 	console.log(elem);
// });


// ARROW FUNCTION
// myArray.map((elem, i)=>{
// 	console.log(elem);
// });

// I created a weather api acct/key (openweathermap.org) to run this method
//JQUERY
$('.city').each(function(){
	const city = $(this).attr('city');
	$.getJSON(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=imperial`)
	// .then(function(response){
	//console.log(this)
	.then((response)=> {
		console.log(this)

		console.log(response)
		$(this).html(`${response.main.temp} &deg;f`)
	});
})


// Creating a Timer with the Arrow function
// function Timer(){
// 	setInterval(()=> {
// 		console.log(this)
// 	}, 250)
// }

// const timer = new Timer();
