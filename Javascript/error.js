// The anatomy of an error

/*
    An error is an object built into the Javascript Language.
*/

const a = 'Hello';
const b = 'World';

console.log(c); // This creates an Uncaught ReferenceError: "var" is not defined

/* 
    Error comes in 3-parts: 
                            Error Type(The type of error) 
                            + Error Message(What is wrong) 
                            + Location (Where the error in question is)

*/


// This creates another Uncaught ReferenceError: "var" is not defined
const y = 5;
const z = 10;

function add(){
    return c;  // C is not defined here
}

function print(){
    add(); // We are calling a function with a non defined variable
}

print() // Calling a function that is calling a function with a non defined variablecalling a function with a non defined variable



// Common errors:

/* 
    Syntax error: when code is grammatically incorrect;
    Reference error: Variables that are referenced but non existant or are spelled incorrectly;
    Type error: Argument/operand passed to a function/operator with incorrect type
                Modifying an immutable value
                Inappropriate use of a value
*/

// Error tips

/* 
    1. Read the error message, it is your friend;
    2. Google the error message(ALWAYS);
    3. Use the debugger;
    4. Use the console methods;
*/