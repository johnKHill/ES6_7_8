// Generators Are Iterators!
    // Generators help you write Iterators easier
        // they have a next(), like iterators and returns always:
            // a "value" and a "done" 
function* counter(){
    let i = 0;
    while(true){
        const dataFromNext = yield i++;
        if(dataFromNext){
            i = 0;
        }
    }
}

const myGenerator = counter();
console.log(myGenerator);
console.log(myGenerator.next().value);
console.log(myGenerator.next().value);
console.log(myGenerator.next().value);
console.log(myGenerator.next().value);
console.log(myGenerator.next().value);
console.log(myGenerator.next().value);
console.log(myGenerator.next(true).value); // resets counter after true is passed
console.log(myGenerator.next().value);
console.log(myGenerator.next().value);

// Making some Space
console.log("---------------------------------------------");
// --------------------------------------------------------

// #1.
// function myIterator(myArray){
//     let i = 0;
//     return {
//         next: ()=>{
//             if(i < myArray.length){
//                 return {
//                     value: myArray[i++],
//                     done: false
//                 }          
//             }else{
//                 return {
//                     done: true
//                 }
//             }
//         }
//     }
// }

// #2. the refactor
function* myIterator(myArray){
    for(let i =0; i < myArray.length; i++){
        yield myArray[i];
    }
}


const anArray = [1, 13, 43, 12, 45, 3, 8, 65, 4];

const gen = myIterator(anArray);
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

for(let elem of gen){
    console.log(elem)
}

console.log("---------------------------------------------------")
// -------------------------------------------------------------
// Generators and also call other Generators
function* inigo(){
    yield "Hello. My name is Nigo Montoya."
    yield "You killed my father. Prepare to die."
}

function* countR(){
    yield "Good heavens, are you still trying to win?"
    yield "You've got an overdeveloped sense of vengeance, that's going to get you in trouble someday."
    yield* inigo();
    yield* inigo();
    yield* inigo();
    yield "Stop saying that!"
    yield* inigo();
}

const princessBride = countR();
// console.log(princessBride.next().value);
// console.log(princessBride.next().value);

// console.log(princessBride.next().value);
for(let lines of princessBride){
    console.log(lines)
}