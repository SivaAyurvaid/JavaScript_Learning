# JavaScript Learning Course Details 

1. Basic Questions 
2. Functions & Scope
3. Objects & arrays
4. Events & DOM Manipulation
5. Error handling
6. Advanced topics 
7. ES6 & Beyond  

### 1. Basic questions 
- Data types
- variables 
- is nan
- Equality & strict equality 
- Hoisting  


#### Data Types

1. Primitive 
    - Number 
    - string
    - boolean
    - null 
    - symbol
    - bigint

2. Non-Primitive 
    - objects
    - arrays 
    - functions (normal function, array functions)


#### Variables 

There are different types of variable assignment keywords is there (`Let`, `Var`, `Const`) 

* **VAR** * Variables functionality 

- Function scope variables 
- Worked only in functions 
- variable goes before hoisting 
- Re-declaration is possible 

* **LET** * variables functionality 

- LET is block scope variables (Only available is )
- Redeclaration is not possible on same block of let declaration
- Hoisting (Temporal deadzone)

* **CONST** * variables functionality 

- Block scope 
- Redecalaration is not possible on every place of code 
-  Hoisting (Temporal deadzone)

- CONST assignment re-declaration is not possible, if it is an object but you can manipulate object can"t re-declare with anther object or data type


#### IsNAN (Not a number)

Checks number is valid or not  

UseCases 
1. Validating user input 
2. Error handling in calculations
3. Comparing isNaN Vs Number.isNaN


#### Equality Opertor

1. == Equality Operator (Checks equality of same object regards of its data type) i.e 3 == '3' This case string 3 is equal to number 3 
(Checks only content not on datatype)

2. === Strict Equality Operator (Same of above but It checks data type also of equality validation)


#### HOISTING

Declaration on Top (After assigning varialbes in program Even out of scope)

There are 2 Phases in Javascript 
- Compilation phase
- Execution phase 


**Compilation phase**

- It runs through whole line of code in program 
(Takes out Assigned variables and Functions in program)

If variables assgined with keyword VAR, {
    In Compiler region Marked as Undefined 

    i.e 

    ```javascript
    console.log('Before assigning varialbe by var a = 10;', a)
    var a = 10;
    console.log('Variable assigned with keyword var a = 10;', a)

    ```

    ```output
    Before assigning varialbe by var a = 10; undefined
    Variable assigned with keyword var a = 10; 10
    ```

    SCOPE OF VARIALBE = FUNCTION OR GLOBALS
}
If varialbes assigned with keyword const, let {
    In Compiler region marked as Temporal dead zone

    ```javascript 
    console.log('\n LET KEYWORD HOISTING\n')
    console.log('Before assigning varialbe by let b = 10;', b) 
    let b = 10;
    console.log('Variable assigned with keyword let b = 10;', b)

    ```

    ```output

    Expects an error of ReferenceError: Cannot access 'b' before initialization

    ```
    SCOPE OF VARIABLES = BLOCK
    Because In compilation phase all let variables available but in temporal dead zone
    which means Before value is not assigned in execution phase, Let variable is not accessible in code
}

**Execution phase** 

Each variables which mentioned in Compilation phase assigned value stored in execution phase

### 2. Functions 
