
console.log('Function Before Hoisting checking of var function assignment ',greet_var) // Expecting greet_var is not a function 
// (Because var variable assignment available in Compilation phase), SO internal greet_var treated as variable, but suddenly execution phase
// function assigned so throws an error of `TypeError: greet_var is not a function`
console.log('Function Before Hoisting checking ',greet())


console.log('\nVAR KEYWORD HOISTING\n')
console.log('Before assigning varialbe by var a = 10;', a) 
// Output a is undefined (Because In Compilation phase var a is known) and console part is 
// verifed by execution phase which take reference of variable from Compilation phase
var a = 10;
console.log('Variable assigned with keyword var a = 10;', a)


console.log('\n LET KEYWORD HOISTING\n')
//console.log('Before assigning varialbe by let b = 10;', b) // ReferenceError: Cannot access 'b' before initialization
// variable b is assigned by Let keyword, with out assigned value in b in execution phase, Variable b is availabe but in Temporal dead zone (tdz (Not intialized))
// so It is not accessable like variable assigned by VAR keyword
let b = 10;
console.log('Variable assigned with keyword let b = 10;', b)


console.log('\n CONST KEYWORD HOISTING\n')
//console.log('Before assigning varialbe by const c = 10;', b) // ReferenceError: Cannot access 'c' before initialization
// variable c is assigned by CONST keyword, with out assigned value in c in execution phase, Variable c is availabe but in Temporal dead zone (tdz (Not intialized)) 
// so It is not accessable like variable assigned by VAR keyword
const c = 10;
console.log('Variable assigned with keyword const c = 10;', c)





function greet(){
    console.log('Hello world')
}

console.log('Function After Hoisting checking ',greet())



var greet_var = function(){
    console.log('function stored in var keywords')
}

console.log('Function After Hoisting checking of var function assignment ',greet_var)

console.log('Function After Hoisting checking of var function assignment VALUE ',greet_var())
