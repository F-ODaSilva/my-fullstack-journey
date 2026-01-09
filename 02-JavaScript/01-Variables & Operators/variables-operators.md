# What is a script?
Before talking about variables and operators or any other script is a set of instrunctions that are interpreted by computers to tell it what to do in order to accomplish a certain task. These scripts usually use data that are processed that insomehow the are inputted in the program and then output the results.
# Variables 
These data must be stored somwhere for them to be used, processed accordingly to the set of instrunction we have chosen for them, these containers are called **variables**.

The variables **variables** are a *"type"* of container that hold information. THey can be used arithmetically, and values that can be changed, when dcalred they are assigned to a storeage space in memory  and give it a name for us to reference tthe data with it, dues using a bit of the computer's memory for our program to use.

## Declaring Variables
There are a set of strep3489s/rules you must follow to declare a variable, in which are the following:
##### 1. Initialize 
	An initializer is the same implies the first thing that comes and starts the expression, by using let, const, var and this tells what type of container it is.
##### 2. Naming
	 You declare the name variable, you can name it whatever you will like but for better readability, understanding and practices:
	 *  It contains only letters, numbers, underscores and dollars-signs. 
	 *  It can not contain spaces. 
	 *  It  always should start with a letter 
   	 *  It is not a reserved word (ES6 case only words)
	 *  It starts with lowercase

##### 3. Assign 
	 By assigning we mean that we use an operator to link the previous data to link this the information we want to store. This operator is an equal sign.

##### Close 
	After the assignment we place the informatio that serves as the value of the variable followef by an expression that closes the statement in this case a semicolon.
#### Example
```JS
	let username = Mathew 
```
>From now on youll be coding a lot and it is important to always commment out your code for better understanding and readability for other and yourself this is part of a process called ***clean code***
>For you to comment you need to write `//
## Types of Variables
There are three types of variables in ES6 that determine what kind of container it is and how we can we manipulate it. 
### let
This type of variable it can be altered inside the scope of the coding block it was called.  
### var 
This variable was deprecated in ES5, and it can also be altered but in a global scope  
### const 
Finally the variable that as when declared it can not be altered later when you call it, but it works the same as the let in terms of scoping 

### Data Types
##### Numeric
 Numeric or integers are data types that describe any kind of numbers, including decimals (float), negative and they are not comma separated.
 They can hold boolean numeric values, thus:
```JS
// Example of intigers:
let positive = 1;
let negative = -1;
let age = 22;
let height = 1,83;  
```
###### Positive
 > 1 = This gives one bit of information that is hold in the computer that its software interpets as **true**.
###### Negative
 > 0 = This is interpreted and understood to the computer as **false**.
##### Boolean
 A boolean is a variable that holds only two values: **true** or **false**.
 ```JS
// Example of booleans:
let yes = true;
let no = false;  
```
##### String
A string is a text based data type that can be manipulated and they must be inside quotation mark. You can have an empty string this is a string with ni value that it can be added later on, numeric characters can be part of the string.
```JS
// Example of strings:
let name = "Jane Doe" 
let username = "StarBearer44"
let street = "Buckinggham St. 64" 
let age = "24"
```

##### Array
An array is a set of multiple values of the same family or contain a certain similarity.
These must be inside brackets with the values  comma separated. 
```JS
// Example of intigers:
let groceries = ["oranges","milk","eggs","cheese"];
let students = ["Lisa","Axel","Chris"];
let grades = [];  
```
##### Object
An object is a data type that stores collection of related data that describes the whole variable that holds several other types of variables holding information or action.
```JS
// Example of objects:
let class2025 = newclass2025{
names = [Axel, Marcelo, Lisa],
class = "B", 
classTeacher = "James Mack"
}

console.log(class2025.names[2]);
console.log(class2025.class);
console.log(class2025.classTeacher);
```
### Type Identification
JavaScript helps programmers write less code because it has a feauture that in some programming languages don't have, its ability to detect automatically  what type of variable it is using its value.
#### Type Inspection
Every now and then you would want to check some data to know what it is data type property.
This is  done by making use of a built-in  function ``typeOf``.
```JS
typeOf name;   // returns a string
typeOf groceries // returns an array
typeOf class2025  // returns an object
typeOf yes  // returns a boolean
typeOf negative // returns an integer
```

#### Type Transformation
In some cases along your way programming you will stumble that you will need to change or transform some ***data type*** to another ***data type***. Take a look a the next block of code:
```JS
// Image a scenario where you would want to take to persons ages and it appears you have both of these data but with different data types. How would this go at first?

const childOne = {
	name: "Gabriel",
	age: 15,
};

const childTwo = {
	name: "Sarah",
	age: "8",
};

  

let pOne = childOne.name + " is older than " + childTwo.name + " by " + childOne.age + childTwo.age;
// View result
console.log(pOne); // Output: Gabriel is older than Sarah by 158

  
/* This happens because Sarah's age is a string and JavaScript takes Gabriel's age as string two.

To pass Sarah's age in to an integer and dispal the correct answer we use Number( ) and encaapsulate the whole expression in ()
*/
let pTwo = childOne.name + " is older than " + childTwo.name + " by " + (childOne.age - Number(childTwo.age));
// View result
console.log(pTwo);  // Output: Gabriel is older than Sarah by 7

```
By using a built-in fuction called Number() that transforms whatever that is inside into a integer.
There is more built-in function like that: 
1. **Number()**
	* It transform the data into an ***intiger***.
2. **String()**
	* It transform the data into an ***string***.
3. **Boolean()**
	* It transform the data into a ***bolean***, everything that is greater than 0 is **true** (x > 0) or not an empty string is equally **true**.
4. **Array()**
	* It transform the data into an ***array*** every word that is inside creates a way that can turn each characters into a value inside of the array.  

# Operators
## Mathematical Operations
Doing calculations is a very important part of any programming language, you can do it using data types that are not necesseraly integers. 
They do not differ a lot with the normal maths you'd do, byt with some slight differences such as symbols as norms, due to the nature of being inside a programming languages.

| Operation          | Symbol |
| ------------------ | :----: |
| **Addition**       | **+**  |
| **Subtraction**    | **-**  |
| **Multiplication** | *****  |
| **Division**       | **/**  |
| **Modulus**        | **%**  |
| **Increment**      | **++** |
| **Decrement**      | **--** |
### Assignment
This operator assigns a value to a variable, this does not work as the usual mathematical operator due to nature of being used in a programming language. 
```JS
// Assign the value 10 to x 
let x = 10; 
// Assign the value 2 to y
let y = 2;  
```
As you can see the values are equal to the variable you created.
### Addition
This operator has several feautures, it not only can add numbers but it can add (concatenate) strings, in the following titles you'll see with more detail about these feautures: 
#### Adding Numbers
Using the variabes of the previous example we will add them together:
```JS
// Assign value "x + y" to z
let z = x + y;
// Output: 12
```
#### Adding Strings
As mentioned before the ==addition== operator is flexible enough to concatenate strings as well but it works in different way:
###### Normal Addition
```JS
let firstName = "Jhon";
let lastName = "Doe";
let username = firstName + lastName;
// Output: JhonDoe  
```
###### Addition with spacing 
As you can see there is no space between the to when you add the strings together. 
For you to add a this space you must create it or use a template literal:
```JS
let fullName = firstName + " " + lastName;
let full_name = `${firstName} ${lastName}`;
// Output: Jhon Doe 
```
###### Assignment Addition
Sometimes you'd like to add something and assign it to a new variable.
``` JS
let text1 = "I am ";
text1 += "hungry";
// Output: "I am hungry"
``` 
###### Adding Strings & Numbers 
In some cases you would like to add the numbers and strings, lets say the name of a street or a username with numbers in it and so on, as mentioned before in the example of [[#Type Transformation]].
Here we wont trasnform the types but rather add them in a way that they make sense, take a look at the following examples:
```JS 
const room = 35;
const hotel = "Grand Blue";
const street = "Cardiff St";

let adress = `${hotel} Hotel room nº${room} at ${street}`;
console.log(adress);
// Output: Grand Blue Hotel room n35 at Cardiff St

let phrase = "I'm in room " + room 
console.log(phrase);
// Output: I'm in room 35
```
>If you add a *number* and a *string*, the result will be a string
### Subtraction
This operator is not as sofisticated as the addition operator but it has some of its feautures.
##### Normal Subtraction
Using the variables we used before we we will subtract them:
```JS 
//Assign value "x + y" to z 
let z = x + y;
// Output: 8 
```
##### Assignment Subtraction
```JS
let x -= y
// x = x - y
// Output: 8
```
### Multiplication
The multiplication operator it adds the same number the amount of times its intended there is not much difference between normal math and programming math, the key difference its in their symbol. 
In JavaScript it is used an asterix.
##### Normal Multiplication
```JavaScript
let z = x * y;
// Output: 20 
```
##### Assignment Multiplication
```JS 
let x *= y
// Output: 20 
```
### Division
Like the multiplication operator the same works with the division,   the division symbol that you're normally used to see in normal math in JavaScript we use a different symbol.
##### Normal Division
```JS
let z = x / y;
// Output: 6
``` 
##### Assignment Division
```JS
let x /= y;
// Output: 6
```
### Modulus 
This operator is special one, It is important to solve many computational problems.
When given two numbers, JavaScript divides them first and calculates the the remainder if there is any it will output it, if not it will ouput 0.
Im other words the modulus operator result is the remainder of a division problem. 
```JS
let division = 152 % 10;
// Output: 15
let remainder = 152 % 10;
// Output: 2
```
### Increment
This operator works the same as the addition operator, but in this case it increments single operand (*variable*, *element of an array*, *or a property of an object*). The operator converts its operand to a number, adds 1  to that number, and assigns the incremented value back into the variable, element or property.
This is called pre-increment.
###### pre-increment
```JS
let i = 1, j = ++i;
// Output: i and j are both 2 
```
There is a special feature called post-increment operator, it increments its value but it gives an unincrimented value of that operand.
###### post-increment
```JS
let i = 1; J = i++; 
// Output: i is 2, j is 1
```
These operators are commonly used to control the counter of a **for loops**.
### Decrement
This operator works the same as the incremment operator, but it this case it works as the subtraction too, due to is nature.
Like the ++ operator, the return operator, depends on its position relative to the operand. When used after its operand no line break is allowed between the operand and operator.
###### pre-increment
```JS
let i = 1, j = ++i;
// Output: i and j are both 2 
```
###### post-increment
```JS
let i = 1; J = i++; 
// Output: i is 2, j is 1
```
## Logical Operators
