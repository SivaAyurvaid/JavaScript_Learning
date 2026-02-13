

// VAR keyword for variable assignment
function var_funct_variable(){
    console.log('Initial X value -> ',x_vars);
    var x_vars = 10;
    console.log('First X value -> ',x_vars);
    {
    var x_vars = 20;
    console.log('Inner block X value -> ',x_vars);
    }

    var x_vars = 30;
    console.log('Second X value -> ',x_vars);

    return x_vars

}

var_funct_variable()

var check_variable = 23;
console.log('VAR usage not it block',check_variable);


// LET variable assignment functional usages  
function let_funct_variable(){
    // console.log('Initial X value -> ',x_vars);
    var x_vars = 30;
    console.log('First X value -> ',x_vars);

    {
        let x_vars = 20;
        console.log('Updated X value -> ',x_vars)

        x_vars = 23 
        console.log("Updated x value with out any keyword -> ",x_vars)
    }
    console.log('Final X value -> ',x_vars);

}

let_funct_variable()


let let_check_variable = 23;
console.log('LET usage not it block',let_check_variable);


function const_funct_variable(){
    // console.log('Initial X value -> ',x_vars);
    const x_vars = 30;
    console.log('First X value -> ',x_vars);

    {
        const x_vars = 20;
        console.log('Updated X value -> ',x_vars)

        // x_vars = 23 
        console.log("Updated x value with out any keyword -> ",x_vars)
    }
    console.log('Final X value -> ',x_vars);

}

const_funct_variable()
const const_check_variable = 23;
console.log('CONST usage not it block',const_check_variable);

// CONST assignment re-declaration is not possible, if it is an object but you can manipulate object can"t re-declare with anther object or data type


const object = {name:'Shiv'};
console.log('Const assignment with object -> ',object);
object.age = 23;
console.log('After added a new key in given object -> ',object);

//x