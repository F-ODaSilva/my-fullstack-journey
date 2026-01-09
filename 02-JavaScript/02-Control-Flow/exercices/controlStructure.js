//Here I declared three variables and assigned them numbers as values.
let num1 = 4
let num2 = 23
let num3 = 85

//After declaring the variables i will write a conditional statement that will compare the num1 and num2 variables using "if" and "else" statements and displaying the logic behind it plus the end greater number.
if (num1 > num2) {
    console.log(num1 + " is greather than " + " " + num2);
} else {
    console.log(num2 + " is gretaher than " + num1);
    console.log(num2);
}
console.log();
//In the previous line I used an empty log so I can break a line in between sections so it will improve the readability.

if (num1 % 8 >= 0) { //if num1 (4) fits completely in 8 it will be an even number if it doesn't it will have a remainderand it will be an odd number.
    console.log("Even");
} else {
    console.log("Odd");
}
console.log();

//in this next section I will sort on decreasing way the three numbers from the variables using conditional statements.

if (num1 > num2 && num1 > num3) { //If number 4 is greater than 23 and 85 (False)
    if (num2 > num3) { //Here I compare the remainder comparisons.But it will on run if the previous line of code is True 
        console.log(num1 + "," + num2 + "," + num3);
    } else { //False
        console.log(num1 + "," + num3 + "," + num2);
    }
} else if (num2 > num1 && num2 > num3) { //If number 23 is greater than 4 and 85 (False)
    if (num1 > num3) { //False
        console.log(num2 + "," + num2 + "," + num3);
    } else { //False
        console.log(num2 + "," + num3 + "," + num2);
    }
} else if (num3 > num1 && num3 > num2) { //If number 85 is greater than 4 and 23 (True). So now it will execute and see if see one of the conditional statements are True according to this statement.
    if (num1 > num2) { //False
        console.log(num3 + "," + num1 + "," + num2);
    } else { //True
        console.log(num3 + "," + num2 + "," + num1); //This line of code will displayed 
    }
}
console.log();

//This next lines willbe a for loop that will dispaly the numbers from 0 to 20 and the code will stup running at the time it reaches 20.
for (let i = 0; i < 21; i++) { //First I have to declare a variable with the number i want to start (0) and compare that variable to the number i want it to loop it too (it must be one unit above the intended number in this case is 20 but I must write 21 (it wont display 21)) the i++ means that each time the loop runs it adds 1 one more (0+1; 1+1; 2+1...).
    console.log(i);
}
console.log();

//In this section I will write a while loop code that will do display the numbers from 0 to 20.
let a = 0
do { //A while loop must start with do, this means that the code is doing something while the other ones runs
    console.log(a);
    a++; //It is important to add the ++ so it adds 1 each time the loop runs.
} while (a < 21);
console.log();

//Ill write a for loopthat will display even numbers between 1 and 20
for (let b = 1; b < 21; b++) {
    if (b % 2 == 0) { //I use the conditional statement so I can check if the remainder of b each time the code iterates and the value of b is qual to 0 (no remainder)
        console.log(b);
    }
}

let size = 5 //Here i made a variable so can choose the max amount of times i want the * to appear. 
let z = "*" // Here is the variable that I will assign the value that I want to display 
for (let x = 0; x < size; x++) { //x=0 if 0 is lesser than 5 (true) (run the next line) add 1 more to x after its done
    console.log(z);
    z += "*"; //This will add a * after the last * of every iteration. 
}

//I will compute a Greatest Common Divisor in the next block of code
let p = 24
let l = 36


for (i = 1; i <= p && i <= l; i++) {//We should start with a value (i=1), and if i is less than p and l it will run.
    if (p % i == 0 && l % i == 0)//if both are completely divisible by i we will reach a number that is common for both
        gcd = i;
}
console.log("The greatest common divisor is " + gcd)