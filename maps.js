// Map is just a key value pair. ITS FAR MORE PROTECTED than a regular object.
// I also comes with some cool methods specific to map.
// It is also an interable

/*const myContactsObj = {
	"Rob" : 555-1234,
	"Jim" : 555-2345,
	//function(){} : "Anything"
}*/
/*for(value of myContactsObj){
	console.log(value);
}*/


let keyFunction = ()=>{
	console.log("Hello, World");
}

let myContacts = new Map();
// get and set methods
myContacts.set("Rob", "555-1234");
const rob = myContacts.get("Rob");
console.log(rob);
myContacts.set(keyFunction, "Haha, I just used a function as key");
const huh = myContacts.get(keyFunction);
console.log(huh);

// size property
console.log(myContacts.size);

for(value of myContacts){
	console.log(value);
}

// clear method (clear the entire map)
/*myContacts.clear();
console.log(myContacts);*/

// entries method (get all the entries)... returns an iterable
/*console.log(myContacts.entries());

myContacts.forEach(()=>{
	console.log(value);
});*/

// keys method
console.log(myContacts.keys());
console.log(myContacts.values());