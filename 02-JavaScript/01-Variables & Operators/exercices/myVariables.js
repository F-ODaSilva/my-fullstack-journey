//To declare a variable it is used the keyword "let", "var" or "const".

let language = "JavaScript";
let score = "10";
console.log(language);
console.log(score);

// There is another way I can declare these values by using template literals
console.log(`${language} is a ${score} out of ${score} programming language`);

//Here I will give a value to the "length" and "width" variables.
let length = "300";
let width = "150";

//I wil display the area of the rectangle using the values of the last two variables.
console.log("The area of the rectagle is" + " " + length * width);

//I'll create two numeric integers each one with different values so I can calculate the remainder using "%" 
let num1 = "20";
let num2 = "5";
console.log(num1 % num2);

//Here  I will make the division and inform that the remainder is of both num1 and num2 is 'x'.
console.log("The result of the division is " + num1 / num2 + " " + " making the remainder" +" "+ num1 % num2);

const room = 35;
const establishment = "Grand Blue";
const street = "Cardiff St";

let adress = `${establishment} room n${room} at ${street}`;
console.log(adress);