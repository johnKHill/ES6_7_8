// Proxy and Reflect
// Proxy = middleman.
// Proxies allow you to cut off almost any part of the process of object change
// -- create middleware!
// -- we do this with traps!
// Review the Proxy documentation on MDN:
// traps --- is a methods that provide property access for getting information.
// 1. Exclusive control over accessing and setting objects
// 2. validation
// 3. logic/middleware

// Proxy is a constructor. Takes 2 args:
// 1. object to proxy
// 2. object serving as the handler

// This handler is the middleman
let handler = {
    // has as a property, each "trap" you want to set.
    // get, which is the trap, will run anytime anyone accesses this object
    // And it takes 2 args:
        // 1. Target object (the object acted on)
        // 2. Property that was accessed
    get: (target, propName)=>{
        // console.log(target);
        // console.log(propName);
        return target[propName];
        
    },
    // set trap takes 3 args:
    // 1. Target object (the object acted on)
    // 2. Property that was set
    // 3. New Value
    set: (target, propName, newValue)=>{
        console.log(target);
        console.log(propName);
        console.log(newValue);
        if (propName == "age"){
            if (typeof(newValue) !== "number") {
                throw new TypeError("Age must be a valid number")
            }else {
                target[propName] = newValue
            }
        }else {
            target[propName] = newValue
        }
    },
    has: (target, propName)=>{
        console.log("Checking if has...")
        return true
    }
}

let newObj = new Proxy({}, handler)
newObj.name = "Hill";
newObj.job = "Fullstack Software Engineer";
// console.log("Name: ", newObj.name);
// console.log("Job: ", newObj.job);
// console.log("Age: ", newObj.age);
newObj.age = 36;
console.log("Age: ", newObj.age);
// newObj.age = "Ha ha";
console.log(newObj.age)
if ("name" in newObj){
    console.log("I found it")
}

// Making some space for a clean build
console.log("\n");
console.log("\n");


// ==========================================================

// Make a proxy out of a constructor/class object
class Car{
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    printInfo() {
        console.log(this.make, this.model)
    }
}

let aCar = new Car(`toyota`, `camry`);
// console.log(aCar);

let carHandler = {
    get: (targt, propName)=>{
        console.log(`Someone is trying to get ${propName} property`)
    }
}
let carProxy = new Proxy(aCar, carHandler);
console.log(carProxy.make)


// Making some space for a clean build
console.log("\n");
console.log("\n");

//===========================================================
// apply trap
function sum(x, y) {
    return x + y;
}

const sumHandler = {
    //apply trap takes 3 args:
        // 1. target
        // 2. the this
        // 3. argumentlist for this call
    apply: (target, thisArg, argsList) =>{
        // console.log("Someone called a funtion")
        return target(argsList[0], argsList[1])*100
        // target(argsList[0], argsList[1]
        //     same as 
        //     sum(2,9)
    }
}

const sumProxy = new Proxy(sum, sumHandler);

console.log(sum(2,9));
console.log(sumProxy(2,9));
// ==========================================================
// There are 13 total methods that we can grab
// handle.getPrototypeOf()
// handle.setPrototypeOf()
// handle.isExtensible()
// handle.preventExtensions()
// handle.getOwnPropertyDescriptor()
// handle.defineProperty()
// handle.has()
// handle.get()
// handle.set()
// handle.deleteProperty()
// handle.ownKeys()
// handle.apply()
// handle.construct()