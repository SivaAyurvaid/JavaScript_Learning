

console.log("Numerical number -> ",isNaN(1234))
console.log('String number -> ',isNaN("1234567890"))
console.log('String number with bigint -> ',isNaN("1234567890n"))
console.log('String character -> ',isNaN("abcd"))
console.log('String character of NaN -> ',isNaN("NaN"))
console.log('undefined -> ',isNaN(undefined)) //
console.log('NaN -> ',isNaN(NaN))
console.log('Null -> ',isNaN(null)) // as default it consider as number of 0 in usually in javascript

// Common issues of using isNaN 
console.log('\n\n',"Common erros even through given value is not number but IsNaN returns false")
console.log('Empty string -> ',isNaN(''))
console.log('Boolean data type (true) -> ',isNaN(true))
console.log('Boolean data type (false) -> ',isNaN(false))

// Fixing  issues  
console.log('\n\nFixing by Number.IsNaN method')
console.log('Number object after release by ES-6 -> ',Number.isNaN(123n))
console.log('Number object giving Empty string -> ',Number.isNaN(''))
console.log('Number object giving Boolean data type (true) -> ',Number.isNaN(true))
console.log('Number object giving Boolean data type (false) -> ',Number.isNaN(false))
console.log('Number object giving Null -> ',Number.isNaN(null))
console.log('Number object giving undefined -> ',Number.isNaN(undefined))



// validation user input is number of not

let userInput = '123'

if (isNaN(userInput)){
    console.log('Please enter valid number')
}
else{
    console.log('Number accepted')
}

// Error handling 

let result = Math.sqrt(25)

if (isNaN(result)){
    console.log(result)
    console.log('Calculation result is not possible')
}
else{
    console.log('Calculation completed result -> ', result)
}


// Strict match of isnan on given number 
console.log('checking by isnan -> ',isNaN('123'))
console.log('strictly checking by Number.isnan by string number -> ',Number.isNaN(truee))
console.log('strictly checking by Number.isnan by numerical number -> ',Number.isNaN(123))