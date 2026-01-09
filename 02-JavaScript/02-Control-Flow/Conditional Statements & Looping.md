
# Statements 
Before getting into "**Conditional Statements & Looping**" it is important for us to understand te what are statements and control structures. 
Statements are JavaScript sentences or commands, they terminate with semicolons. If expressions are evaluated to produce a value, statements are executed to make things happen. 
Previously we made use of several statements such as: 
* *Expression Statements*
* *Declaration Statements*
* *Compound and Empty Statements*

JavaScript programs are nothing more than a sequence of statements to execute. JavaScript interpreter executes these statements one after another in the order they are wirtten. Another way is to alter this default order of execution using a number of statements that we call control structures that do just this.

Control have the capacity to alter the flow of your program to change within a unit of code or function. They can determine whether or not given statements can be executed. 
There are three controls structure groups: 
* *Conditional Statements*
* *Loops* 
* *Jumps*
### Comparasion Operators
Another thing before going forward, it is important to understand the basic logical commands we use these operators to compare values or variables in programming. These  operators work well with the first two  control structures we mentioned before. 
They return a boolean upon use within these statements.

| Operator | Description                                    |
| -------- | ---------------------------------------------- |
| >        | Greater than                                   |
| <        | Less than                                      |
| >=       | Greater than or equal to                       |
| <=       | Less than or equal to                          |
| ==       | Equals                                         |
| ===      | Absolute equality (equal value and equal type) |
| !=       | Not equal                                      |
# Conditional Statements
They allow us to perform different actions for different conditions. They run different code depending on **true** or **false** conditions. 
This type of control structures have the ability to execute or skip other statements depending on the value of a specified expression, they work as decision point on your code and are also sometimes known as "branches". 
They include the following:
* **if**
* **if...else**
* **else...if **
* **switch**
* **ternary(?:)**
## If Statement 
The name itself helps identify the nature of this conditional statement, it works essentially as a question, and helps us compare two or more variables or scenarios and perform a certain action based on the outcome of the comparison. They contain a condition inside brackets, then they are evaluated if to **true** or **false**. If the conditions is **true** then the indented statement is executed. If the condition is **false**, then the indented statement is skipped.
They posses the following syntax: 
```JS
if (condition) {
	indented statements;
};
```
##### Usage
The **`if` statement** is used when you need to specify a **code block** to be executed, if a specified condition is **true**. 
#### Examples:
```JS
let a = 10, b= 10;
if (a === b) {
	console.log("The variable a is equal to the variable b.");
}
// The condition is true therefore it will output the message. 

let username = "";
if (username == null){
	username = "Jhon Doe";
	console.log(username);
}
// The output will be "Jhon Doe"
// This can be simplified too
if (!username){ // If there is no username (is null, undefined, false, 0, "" or Nan)
	username = "Jhon Doe"; // give it a new value
	console.log(username); // Output value
}
```
## If...Else Statements
The **`if`** statements are one of the most important concepts in programming, but on their own, they are limited. We can say that the **`else`** statement is an alternative path for the logic if previous condition of the **`if`** statement turns out to be false. 
They help the programmer avoid writing repetetive if statements, the else statement will do give us a single alternative.
The syntax of for these type of statements is the following:
```JS
if (condition) {
	indented statements;
} else {
	indented statements;
}
```
###### Usage
Use **`else` statement** to specify a **code block** if the **`if` statement** condition is **false**.
#### Example:
```JS 
let num = 15;
if (num < 12) { // Statement is false 
	console.log("The variable num is lower than 12");
} else {
	console.log("The variable num is greater than or equal to 12"); // Condition met so message will display. 
}

// Conditional statement  that checks for time and displays message accordingly

let currentTime = 5; 
if (hour < 12 ) { // Statement is true
	console.log("Good morning!"); // This message will be display
} else {
	console.log("Good night!"); 
}
```
### Else If Statement
The **`else...if`** statement, with this statement we can add more conditions to the if statement different from the **`if...else`** statement you can have multiple **`else...if`** statement is false, the condition of the next is checked and so on until it reaches one the that is true, when none of them is true the else statement with its indented block of statement is executed. 
In JavaScript the **`else...if`** statement has the following syntax: 
```JS
if (condition1) {
	indented statements;
} else if (condition2) {
	indented statements;
} else if ( condition3) {
	indented statements; 
} else if (condition4) {
	indented statements;
} else {
	indented statements;
}
```
###### Usage
The **`else-if statement`** is used to specify a **`new condition`** to test, if the first condition is false.
There are some rules one must follow for this type of statement:
1. It must contain one if.
2. It must contain one else. 
3. You can have as many else if statements under an if, but only one else right at the bottom. That works as a fail-safe if the other statements fail.
4. Ensure that your indentation is done correctly. 
5. They must always end with an open curly bracket.
#### Example: 
```JS
let num = 10; 

if (num > 12) {
	console.log("The variable num is greater than 12");
} else if (num >= 10) {
	console.log("The variable num is greater than 10");
} else if (num < 5) {
	console.log("The variable num is lesser than 10");
} else {
	console.log("The variable num is between 5 and 10");
}
```
#### Logical Operators
Logical operators are symbols in programming language that combine or modify logical expressions, producing a boolean result based on the thruth values of the the inputs, they are fundamental in programming, math and digital circuits and they control the flow of a program. 
Check [[Variables & Operators#Operators#Logical Operators]]

| Operator | Description |
| -------- | ----------- |
| &&       | AND         |
| \|\|     | OR          |
| !        | NOT         |
#### Example:
```JS
/* Lets create a if-else satement that checks for the time given and prompts a message according to the time of the day using logical operators and comparison operatos */

let hour = 8; // Specify current time being tested 

if (hour >= 5 && hour < 12) {
    // 5:00 to 11:59
    console.log("Good morning!");
} else if (hour >= 12 && hour < 18) {
    // 12:00 to 17:59
    console.log("Good afternoon!");
} else if (hour >= 18 && hour <= 23) {
    // 18:00 to 23:59 (Greeting for the evening)
    console.log("Good evening!");
} else if (hour >= 0 && hour < 5) {
    // 0:00 to 4:59 (The early/late night hours)
    console.log("Good night!");
} else {
    // Catches any input outside of the 0-23 range (e.g., 24, 25, -1, or non-numbers)
    console.log("Error: Invalid hour value. Please provide a number from 0 to 23.");
}

/*Now imagine you would want to turn this more interactive how would you go about and do this while using the operator || (OR)*/

// 1. Get user input using prompt(). It returns a string.
ler hourInput = prompt("Please enter current hour (0 to 23):");
// 2. Convert input string to an integer number.
let hour = parseInt(hourInput);

// Check if the input is a valid number between 0 and 23.
if (isNaN(hour) || hour < 0 || hour > 23) { //isNan() checks if the value of hour "Is a Not A Number"
 console.log("Error: Please enter a valid number between 0 and 23."); 
} else if (hour >= 5 && hour < 12) {
  // 5:00 to 11:59
   console.log(`The time is ${hour}:00. Good morning!`); 
} else if (hour >= 12 && hour < 18) {
 // 12:00 to 17:59
console.log(`The time is ${hour}:00. Good afternoon!`); 
} else if (hour >= 18 && hour <= 23) {
 // 18:00 to 23:59
console.log(`The time is ${hour}:00. Good evening!`); 
} else { // This handles 0, 1, 2, 3, 4 
 // 0:00 to 4:59 
console.log(`The time is ${hour}:00. Late night / Good night!`); }

/*Another example of the || (OR) in use to check if the current season*/
// 1. Get user input using prompt(). It returns a string.
let seasonInput = prompt("What is the current season?"); 

//2. Normalize the input to handle different capitalization (summer vs Summer vs SUMMER)  
let currentSeason;

if (seasonInput) {
	// If input exists, clean it up (remove spaces, make lowercase)
	currentSeason = seasonInput.trim().lowerCase();
} else {
	// If the user cancelled the prompt or didn't type anything
	currentSeason = ''; // Set to an empty string to avoid errors
	console.log("No season was entered.");
}
// 3. Conditional check using the OR (||) operator
if (currentSeason === "Winter" || currentSeason === "Summer" ) {
	// This code runs if the season is EITHER 'summer' OR 'winter' 
	console.log("The current season is either the hottest or the coldest time of year.");
	console.log("Time to check your air conditioner or your heater!");
} else {
	// This code runs if the season is NEITHER 'summer' NOR 'winter' (i.e., Spring or Autumn/Fall) 
	console.log("The current season is mild. Enjoy the moderate weather!"); 
	console.log("The season entered was: " + seasonInput);
}
```

### Ternary Operator
Now that you understand how **`if...else`** statements work, you can explore the **ternary operator**. This is a powerful **shorthand** that replaces the usual keywords with symbols: `condition ? value_if_true : value_if_false`. The ternary operator is extremely helpful for assigning values based on short, single-line conditions. However, it should be avoided for complex, multi-line logic (like our previous time-greeting example), as heavily-nested ternary operators significantly reduce code **readability** and can be difficult to debug.

Lets take the examples above and turn them into ternary expressions:
```JS
// ⏰ Time Greeting

let hour = 8; // Example time

let timeGreeting = 
	(hour >= 5 && hour < 12) ?
		`The time is ${hour}:00. Good morning!` // True (5-11)
	: (hour >= 12 && hour < 18) ? 
		`The time is ${hour}:00. Good afternoon!` // False, but check next (12-17)
	: (hour >= 18 && hour <= 23) ?
	  `The time is ${hour}:00. Good evening!` // False, but check next (18-23)
	: (hour >= 0 && hour < 5) ?
	`Error: Invalid hour value.`; // Final else (if none of the above are true)
	
	console.log(timeGreeting) // THe greeting is printed here
```
> Notice how the nesting is heavy, for this level of complexity a standard **`else...if`** structure is genrally much more readable and preferred. 
```JS
// 🥶 Season Check
let currentSeason = "spring",

let seasonMessage = 
	(currentSeason === "summer" || currentSeason === "winter")
	? `The season is ${currentSeason}. This is either the hottest or the coldest time of year.` // Value if TRUE
	: `The season is ${currentSeason}. This is a mild and transitional period.`; // Value if FALSE (i.e., spring or autumn)
```
### Switch Statement
A **switch statement** is another alternative to `if...else` logic, designed specifically for scenarios where you need to compare a **single variable** against many different specific values. Instead of writing repetitive `else if (variable === value)` blocks, you use the `switch` keyword to open a block and list various `case` options inside. If a match is found, the code executes until it hits a `break` command. This structure is often cleaner and easier to read than a long chain of `else if` statements, though it is generally less flexible because it only checks for strict equality (it cannot easily check ranges like "greater than 5").
The syntax for this statement is the following:
```JS
switch(expression)
{
case 1:
Do something;
break;
case 2:
Do something else;
break;
default:
Else do this;
break;
```
###### Usage 
Use `switch` to specify many **alternative code blocks** to be executed for a **single variable**.
#### Example: 
```JS
let seasonInput = prompt("What is the current season?");
let currentSeason = seasonInput ? seasonInput.trim().toLowerCase() : '';

// checking the single variable 'currentSeason'
switch (currentSeason) {
    case "summer":
    case "winter":
        // This runs if the case is 'summer' OR 'winter' because there is no break between them
        console.log(`The season is ${currentSeason}. This is an extreme temperature season.`);
        break; // Stops the code here

    case "spring":
    case "autumn":
        // This runs if the case is 'spring' OR 'autumn'
        console.log(`The season is ${currentSeason}. This is a mild, transitional season.`);
        break; // Stops the code here

    default:
        // This acts like the final 'else'
        console.log("Unknown season entered.");
}
```

# Looping Statements
As conditionl statements are statements that gives us control of the flow of logic by have several paths according to a specific set of conditions. 
Loops are the simplifier of repetetive tasks, this facilitates the job of every programmer and its invaluable in solving problems in programming. There are four looping statements:

1. **`while`**
2. **`do/while`**
3. **`for`**
4. **`for/in`**
Another use for loops its to iterate  over the elements of an array. There are no doubts that they are an **efficient**,**flexible**,**scalable**,**maintainable**,**featurable** tool.
## While Loops
As the name implies, a **`while` loop** runs repeatedly _while_ a specific condition remains **true**. It evaluates the expression first: if the value is **false**, the loop is skipped entirely. If it is **true**, the code block executes, and then the loop checks the condition again to decide whether to repeat the process or stop.
```JS
while (expression)
	statement(s);
}
```
### Example:
```JS
// ♻️ Algorithm Control
/*
	In this example there will be acounter in which each iteration there will be a sum of two variables, one of them is the total of the final sum of the loop (each iteration).
	This while loop will posses an expression as any other while loop with a condition that is going to set the number of iterations the statement will loop.   
*/

// 1. Declare the variables that we will be using
let a = 2; 
let sum = 0; // Sum initially is equal to 0 by default because no operation was effectuated

// 2. Create loop 
while(sum <= 250) { // Give a condition 
	sum += a; // Equivalent to sum = sum + a
	console.log(`The value of sum currently is: ${sum}`);
	a++ // incrementing the value
	console.log(`The value of a is : ${a}`); 
} 
```
> It is important to understand that a **`while`** **loop** will run forever if the condition rhat should control the loop end never becoming **false**.

### Do While Loop
A **`do...while` loop** is similar to the while loop as it uses the same function (*while*) but there is some key differences between them, the loop expression is tested before the loop can run by the **`do`** and the **`while`** is at the bottom, this loop runs only once and is used to test something when you want to check for example if you logic is correct.

It is less commonly used than the **`while` loop** do its lack of uncertainty. This type of loop has the following syntax: 
```JS 
do{
	statement
} while (expression); 
```
### Example:
```JS 
// ⏲️ Timer 
/*
In this example a digital timer will be created where it works as a loop and it displays the current number and a complete message. The user must give the amount of time representing a number. 
*/

// Create variables encapsulating the prompt messages where user will give its values (username & time). 
let userName = prompt('What should I call you?')
let userTime = prompt('Please ennter your desired time (s):');

// Validate userName
if ( userName == "" || userName == null ) { 
	console.log('User name required!!!! Please enter name:');
// Validate userTime
} else if ( userName == "" || userName == null || isNaN(userTime) ){
	
} else {
	console.log(`Welcome ${userName}!✨`);

	// Convert userInput into number 
	userTime = parseInt(userTime)	
	
	// Countdown Timer
	do (
	  console.log(`Time remaining ${userTime} seconds`);
	  userTime--; // Use decrement operator
	) while (userTime > 0); // Condition that sets the timer off,as long as the counter is greater than zero loop will stop
	
	console.log(`Timer Complete! ⏲️🎉`);
}
```
