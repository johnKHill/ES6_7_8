// need to construct a String object explicitly to avoid auto-boxing
const aString = new String("Hi");
console.log(aString[Symbol.iterator]);

// for(let letter of aString){
//     console.log(letter);
// }

aString[Symbol.iterator] = function(){
    // return an object... this IS the iterator object
    // It must have a next property or it's not an iterator
    return {
        allDone: false,
        counter: 0,
        next: function(){
            if(!this.allDone){
                this.counter++;
                if(this.counter === 6){
                    this.allDone = true;                    
                }
                return {
                    value: "Haha, you expected letters and didn't get any!",
                    done: false
                }
            }else{
                return {
                    done: true
                }
            }
        }
    }
}

for(let letter of aString){
    console.log(letter)
}