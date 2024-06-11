let input = window.prompt("Enter number: ");

input = Number(input)

for (let i = 1; i < input; i++ ) {

    if (i%3 && i%5 === 0){
        console.log("FizzBuzz");  // If divisible by 3, output Fizz
    } else if (i%3 === 0) {
        console.log("Buzz"); // If divisible by 5, output Buzz
    } else if ( i%5 === 0){
        console.log("Fizz"); // If divisible by 3 and 5, output Fizzbuzz
    } else {
        console.log(i)
    }
}