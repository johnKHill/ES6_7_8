// Replace the constructor with the "class" keyword
// A static method is run against the class instead of the object
// // Prototypical inheritance - subclasses => keyword is extends and Super
class SuperHero{
	constructor(name, strength, speed, weapon, cape){
		this._name = name;
		this._strength = strength;
		this._speed = speed;
		this._weapon = weapon;
		this._cape = cape;
	}
	powerup(){
		this.strength += 5;
	}
	get name(){
		console.log("Getting Name");
	}
	set name(newName){
		console.log("Setting Parent name");
		this._name = newName;
	}
	static goodHero(){
		return true;
	}
}


// New Class that has everything SuperHero has
class Human extends SuperHero{
	constructor(healthPoints, ...superHeroStuff){
		super(...superHeroStuff);
		this.healthPoints = healthPoints;
		console.log(healthPoints);
		console.log(superHeroStuff);
	}
	set name(newName){
		console.log("Special name function for Humans");
		this._name = newName;
	}
}

const billDetails = [20, "Bill", 10, 8, "Fast Feet", true];
const hero3 = new Human(...billDetails);
hero3.name = "Harry";
console.log(hero3);

const hankDetails = ["Hank", 10.0, 5, "Fist", true];
// const philDetails = ["Phil", 15, 1, "Fist2", false];
 let hero1 = new SuperHero(...hankDetails);
// let hero2 = new SuperHero(...philDetails);
// hero1.name = "George";

//console.log(hero1.name);
// console.log(hero2);

// hero1.powerup();
// hero1.speed = 2;
console.log(hero1);
// console.log("Is hero good? ",SuperHero.goodHero());


