// Arrays

// const electricBrand = ["Tesla", "Mercedes", "BYD", "Havaal", "Volvo", "Ford", "Rivivan"];
// const elen = electricBrand.length;


// for (const elecVehic of electricBrand){
//     console.log(elecVehic);
// }

// Loops

// The standard for loop has...for(initializer; condition; final-expression)

/*
    initializer - sets a variable, usually incremented to count the number of times the loop happens
    condition - tells the computer when to stop looping, usually with a comparison operator to test truthiness of condition needed to be met
    final epression - tells the computer what to execute, to meet the condition required to stop
*/

// Loops can be stopped using the "break statement"

// The continue statement skips an iteration
function countdown(){
    for(i = 10; i > -1; i--){
        console.log(i);
        if (i == 0){
            console.log(`Blastoff!!`)
        }
    }
}

countdown();