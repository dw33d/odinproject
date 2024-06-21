// Objects are important
// basically what dictionaries are in python

let user = new Object();
 user = {
    username: "jbourne",
    age: 23,
    phone_number:  734566789,
    Day_Job: "Accountant",
    Night_Job: "United States Assassin",
}

 user.activity = true; // Will only show up in the browser console, not the code editor
 user.activity = false;

 console.log(user);

console.log(user.username);
console.log(user.age);
console.log(user.phone_number);

if (user.activity === true){
    console.log("Jason Bourne is an active member of the United States Governement, and operating as an agent under the CIA.")
} else {
    console.log("Jason Bourne is not a memeber of the US Government, nor is operating under the CIA. Is to be terminated")
}

