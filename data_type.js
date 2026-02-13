const { type } = require("node:os")

// Primitive 
let number = 23 
let character = 'Hello world'
let boolean = false 
let data;
let symbol = Symbol('unique')
let bigints =  123456789078988994n;


// Non primitive 

let obj = {
    name:'Shiv',
    age : 23

}

let arrays = ['Apple', 'Banana', 'Cherry', 'Dragon fruit']


// Normal function 
function greet(){
    return "Welcome world"
}

const greetings=()=>{
    return "Welcome world"
}  
// Arrow function

// Printing out 

console.log('\nPrimitive\n')
console.log(typeof(number))
console.log(typeof(character))
console.log(typeof(boolean))
console.log(typeof(data))
console.log(typeof(symbol))
console.log(typeof(bigints))
console.log('Null -> ',typeof(null))
console.log('Undefined -> ',typeof(undefined))
console.log('NaN -> ',typeof(NaN))

console.log('\nNon-primitive\n')
console.log(typeof(obj))
console.log(typeof(arrays))
console.log(greet(),greetings())
console.log(typeof(greet),typeof(greetings()))
