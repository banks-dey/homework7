




//Variable for use information
l//et name = "William";
//let age = 11;
//let email = "william@gmail.com";

//prompts

let name = prompt("What is your name?");
let age = prompt("How old are you?");
let email = prompt("What is your email address?"); 

//conditions

if (age < 12) {
    alert ( `Hi ${name}, you are ${age} years old and are too young to register. Sorry 😔😔`);
} else if (age >= 12 && age < 18) {
    alert (`Hi ${name}, you are ${age} years old and you have limited options to register for. We will keep in touch via your email: ${email} 👋👋`);
} else if ( age >= 18) {
    alert (`Hi ${name}, you are ${age} years old and you can register for any options of your choice. We will keep in touch via your email: ${email} 👋👋`);
}