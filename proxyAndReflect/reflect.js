// Reflect
// CS concept
// Reflection is to examine, introspect, or modify your program at run-time

// console.log(typeOf(data));

// Reflect and Proxy go hand and hand.
// Reflect is not instantiatedK or invoked
// Reflect is a stand alone global object, that has methods that are 1:1 with the proxy handlers

// console.log(Math.round(1.22242));
// console.log(Reflect.get());

// if Proxies provide traps to change objects
//     Reflect provides introspection to get data about object

//---------------------------------------------------------
// 1. Reflect.get()
// Reflect.get() takes 2 args:
// 1. target
// 2. property

const x = {
    a: 1,
    b: 2
}

console.log(Reflect.get(x, 'a')); 
// Isn't this the samething? Yes, they're just like getters
console.log(x.a);  

//console.log(Reflect.get(1,'a')); // can't call Reflect on a non-object

const arr = ["Joe", "Akash", "Mary"];
console.log(Reflect.get(arr, 2))

// Making Space
console.log("---------------------------------------------------")

const monster1 = {
  secret: 'easily scared',
  eyeCount: 4
};

const handler1 = {
    get: function(target, prop, receiver) {
        if (prop === 'secret') {
            return `${target.secret.substr(0, 4)} ... shhhh!`;
        } else {
            return Reflect.get(...arguments);
        }
    }
};

const proxy1 = new Proxy(monster1, handler1);

console.log(proxy1.eyeCount);
// expected output: 4

console.log(proxy1.secret);
// expected output: "easi ... shhhh!"



// ============reflect.has============
// works like hasOwnProperty and "in" keyword
const hgttg = {
    meaningOfLife: 42
}

console.log(hgttg.hasOwnProperty('meaningOfLife'))
// console.log(hgttg.hasOwnProperty('meaningOfLifedgdgfd'))
console.log('meaningOfLife' in hgttg);
console.log("-----------------------")
console.log(Reflect.has(hgttg,'meaningOfLife'))

// Making Space
console.log("---------------------------------------------------");


// ===========Reflect.apply()================
// The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
function sum(...array){
    // console.log(arguments)
    return array.reduce((number, total)=>{
        return number + total;
    })
}

sum.apply = function(){
    throw new Error("I broke apply, just for fun!!")
}

// console.log(sum([1, 2, 3]));
// console.log(sum.apply(null, [1, 2, 3]));
// console.log(Function.apply.call(sum, null, [1, 2, 3]));
// Reflect is replacing the Function.apply.call()
console.log(Reflect.apply(sum, null, [1, 2, 3]));


// Making Space
console.log("---------------------------------------------------");
// --------------------------------------------------------------
// ======================Reflect.defineProperty=================
// Reflect will replace Object.defineProperty
// Object.defineProperty = Allows you to define meta data about a property.
let bandit = {}
const diffLevel = 2;

if(diffLevel <= 2){
    Object.defineProperty(bandit, 'attack', {
        value: 15,
        writable: false
    })
    Reflect.defineProperty(bandit, 'run', { // You can use Reflect instead
    // Object.defineProperty(bandit, 'run', {
        value: ()=>{console.log("Bandit has fled")},
        writable: false
    })
}else{
    Object.defineProperty(bandit, 'attack', {
        value: 25,
        writable: false
    })
}

console.log(bandit.attack)
bandit.run()

// Reflect.defineProperty REPLACES Object.defineProperty
// Making Space
console.log("---------------------------------------------------");
// --------------------------------------------------------------
// ================Reflect.getOwnPropertyDescriptor()================ 
console.log(Object.getOwnPropertyDescriptor(bandit, 'attack'));
console.log(Reflect.getOwnPropertyDescriptor(bandit, 'attack')); // You can use Reflect instead

// - Reflect.deleteProperty replaces Object.deleteProperty
// - Reflect.getProperty replaces Object.getProperty
// - Reflect.setProperty replaces Object.setProperty
// - Reflect.isExtensible replaces Object.isExtensible

// **********************************************************************
// They're trying to moveing to a sungle API to make things more clean
// Proxy sets traps and Reflect has methods
// *********************************************************************