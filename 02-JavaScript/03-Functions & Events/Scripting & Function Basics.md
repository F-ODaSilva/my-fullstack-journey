# The JavaScript Ecosystem: Window, DOM, and Scripts

Before going any further it is important to understand some basic concepts that are essential to programming in JavaScript, these concepts are the following:
* Window Object
* Document Object Model
* Script
* Scope
### Window Object
The `window` object represents the *browser window*(or tab) that contains your web page. In a browser environment, it serves two main roles:
1. ***The Global Object:*** *Any variable or function you create in the global scope (not inside a function) automatically becomes a property or method of the `window` object.*
2. ***The Browser Interface:*** It provides the API (tools) to interact with the browser itself, things like the URL, the history and the screen size, these are all properties.
### Document Object Model
While the `window` object represents the *browser window* that contains your web page the *Document Object Model (DOM)*, an element is an object-oriented representation of an HTML tag this is the page itself, it contains elements that make up that page.

We are already mentioned about *elements* but it is helpful to understand these two terms:
* *Node:* The most basic unit in the DOM tree. Everything is a node (text, comments, attributes and tags).
* *Element:* A specific type of node that represents an HTML tag. When you use JavaScript to change a button's color or paragraph's text, you are interacting with an *Element Object*.
### Script
JavaScript as the name implies lives inside the `<script>` element, which in turn it lives inside the HTML file. The `<script>` element is used to embed or reference executable code like JavaScript, all of the JavaScript code needs to be placed inside this element for the DOM to interpret and the browser execute as the page loads or finishes loading.

The placement of the`<script>` element is important in the functioning of the code. It is best practice for one to place it before the `</body>` outside the head elements. This way the html markdown will load first and then the JavaScript code will load.

You can either insert the JavaScript directly into the `<script>` or you can create an *.js* file outside the HTML file and link to that file inside the `<script>` element.
```JS
// Example of a inline JS script element
<script type="text/javascript">
	console.log("Hello World");
</script>
// Example of a external JS file with a script element refering to it
<script type="text/javascript" src="script.js"></script>
```
### Scope
Scope is the "accessibility" or visibility of variables. It determines which parts of your code can see or use a specific variable. If a variable is "in scope," it is available for use; if it is "out of scope," your code will throw a **ReferenceError**.
There are five types of scope in JavaScript:
1. ***Global Scope:*** The Global Scope is the outermost layer. Any variable declared outside of a function or a block belongs to the global scope. These variables are "universal"—they can be accessed and modified from anywhere in your entire script, including inside functions or loops.
	* **Browser Context**: *In a browser, global variables declared with var are added to the window object. Variables declared with let or const are still global but do not attach themselves to the window.*
2. ***Function (Local) Scope:*** When you declare a variable inside a function, it belongs to that function's scope. It is hidden from the rest of the world. You can use the variable anywhere inside that function (and inside nested functions), but as soon as the function finishes executing, those variables are usually "cleaned up" and become inaccessible to the outside code. This applies to variables declared with var, let, and const.
3. ***Block Scope:*** This was introduced in ES6 (2015) and is tied specifically to curly braces { }. A block could be an if statement, a for loop, or even just a set of "naked" braces.
	* **Important Distinction**: *Only variables declared with let and const are block-scoped.*
	* **The "var" Exception**: *If you use var inside an if statement or a loop, it "leaks" out and is actually accessible outside those braces. This is why modern JavaScript prefers let and const.*
4. ***Lexical Scope (Static Scope):*** Lexical scope is a concept rather than a "place." It means that the scope of a variable is determined by where it was written in the source code. If you nest a function inside another function, the inner function has access to the variables of the outer function. JavaScript looks for a variable starting in the current scope; if it doesn't find it, it moves "up" to the next outer scope until it reaches the global scope.
5. ***Module Scope:*** In modern development, when you use JavaScript Modules (using *import* and *export*), each file becomes its own *"module"*. Variables declared in a module are local to that file only. They are not added to the Global Scope unless you explicitly export them and another file imports them. This helps prevent "naming collisions" where two different files use the same variable name.

Now that we have a basic understanding of the JavaScript ecosystem we can now start talking in depth about the following concepts:
1. **Functions**
2. **Events**
# Functions
Browsers require very detailed instructions about what we want them to do, therefore, complex and long scripts are required, programmers use functions to organize their code and make these instructions executable.They group a series of statements together to perform a specific task. If different parts of a script repeat the same task you can reuse the function to execute execute them.
## What is a function?
A function is a block of JavaScript code that is defined once but may be executed, or invoked, any number of times.There are two types of functions:
* **User-Defined:** *This type of functions are created and maintained by the user/programmer to complete a specific task.*
* **Built-In:** *This type of functions are already inside the JavaScript language and are readily available for us to use.An example of this are the `alert()` or `String()`, there are several functions already implemented in JavaScript that programmers have written for many common and complex tasks.*
## Declaring a function
To create a function, you use the `function` keyword followed by the name that works as an **identifier** followed by parentheses, this in return is followed by curly braces where the statements that perform the task are encapsulated serving as the **body** or **code block** of the function that works as the logic.
Here is the general syntax of a function in JavaScript:
```JS
function functionName(parameters){
	statements;
	return(expression)
}
```
As you can see there is some concepts that we did not mentioned before that are inside the syntax above.

#### Parameters
They are variables that are declared in a function definition (inside the parentheses after the identifier), they store the data needed to perform the logic tha the function specifies, they are filled when data is passed to the function as the function is called.

Parameters are comma separated and behave like local variables to the function.

#### Return
This is optional, because not every JavaScript function requires to return a value, this value will be returned/passed back to whatever code called the function. It not only returns but it also ends the execution of the function, therefore all statements added after the return keyword will not be executed.

## Calling a Function
Declaring the function isn't sufficient, you must declare them, then all the statements between its curly braces with just one line of code.
To run the code in the function you create a simple expression its name followed with the parentheses.
You can call the same function as many time as you want whitin the same JavaScript file.

This is the syntax for calling a function:
```JS
function greetinf() {
	document.write('Hello');
}
// Code before Hello World!
greeting();
// Code after Hello World!
```
You can call the function before the it has been declared due to the global scope. For now we will declare the function before calling it.
### Calling Functions That Need Information
When you call a function that has parameters, you specify the values it should use in the parentheses that follow its name. These values are called **arguments**, and they can be provided as values or as variables.

Here is the syntax for passing arguments to a function:
```JS
function getArea(width, height){
	return width * height;
}
getArea(3, 5);
// This will return 15 
// To display the result of the function you can do it two ways:

// Option 1: Changing the return keyword for console.log()
function getArea(width, height){
	console.log(width * height);
}
getArea(4, 6); // This will return 24 

// Option 2: Calling a function inside the console.log()
function getArea(width, height){
	console.log(width * height)
}
console.log(getArea(2, 5)); // This will return 10
```
>Parameters are subtle different from arguments but they are interchangeably connected.
### Variable Assignment Via Function Invocations
You can make can create variables to that encapsulate the same function with different arguments, here's an example for this:

```JS

function calculateArea(width, height){
    const area = width * height;
    return area;
}
let wallOne = calculateArea(3, 5); // This variable holds the value 15
let wallTwo = calculateArea(8, 5); // This variable holds the value 40

console.log(wallOne);
console.log(wallTwo);
```
### Named Functions vs. Anonymous Function Expressions
In JavaScript, there are two main ways to create a "recipe" (function), and the difference mostly comes down to when you can use them and if they have a name.
#### Function Declaration(The "Stand-Alone" Way)
It is the standard function that we've being using it contains an identifier/name.
The browser reads these first. You can call the the function at the top of your file even if you write the actual code at the very bottom. They are better for general and reusable tools. It can called before definition.
#### Function Expression(The "Variable" Way)
You create a variable and encapsulate it into a variable.
Usually, the function itself has no name; the variable is its name, the browser only knows this function exists once it reaches that specific line of code. You cannot call it before it is defined. It us better for passing into other functions (callbacks). They must be defined before calling.
```JS
let area = function(width, height){
	return width * height;
};
let size = area(3, 4);
```
#### Arrow Functions(Shorter Syntax For Function Expressions)
Arrow functions were introduced in **ES6** and are commonly used in modern JavaScript. Arrow functions allow to a shorter syntax for function expressions, by skipping the `function` and  `return` keywords plus the **curly brackets**.
It uses a the `=>` symbol. It is always written as a function expression. It's syntax is the following:
```JS
let variableName = (parameters) => {
	return epression;
} 
// Shorter Syntax
let variableName = (parameters) => expression
// One Parameter
let varaiableName = parameter => expression
// No Parameter
let variableName = () => expression
```
It is important to understand that functions are not declarations.
##### Usage
###### When To Use Arrow Functions
* For short functions
* For callbacks and array methods
* When you do not need your own **this** (later on explained)
###### When Not To Use Arrow Functions
* As object methods 
* When you need your own **this**
* When using function declarations
## Methods
A method is a special type of function that is stored in a property of an object. They are also built'in JavaScript functions that we can use some you may have already used, here are some common examples:

| Method             | Description                                                                 |
| ------------------ | --------------------------------------------------------------------------- |
| **chartAt()**      | *returns a character in a string at the given index*                        |
| **indexOf()**      | *returns the index of a the first occurrence of a<br>character in a string* |
| **charCodeAt()**   | *returns the ascii number of the character at the given index in a string*  |
| **fromCharCode()** | *returns the character of the given ascii number*                           |
| **replace()**      | *replaces a matched substring with a new substring*                         |
| **split()**        | *splits a string into an array of substrings*                               |
| **toUpperCase()**  | *returns the given string all in upper case*                                |
| **toLowerCase()**  | *returns the given string in all lower case*                                |
| **join()**         | *opposite of split(). Joins all array elements into a string*               |
| **pow()**          | *returns a base to the exponent power*                                      |
| **min()**          | *returns the smallest valued element*                                       |
| **max()**          | *returns the largest value element*                                         |
| **round()**        | *returns a number rounded to the nearest integer*                           |
There are some very important built-in methods that you will use to get your JavaScript interact with your HTML(*DOM*). Some of the most commonly methods that are used to get information about your HTML page are the following:
* Selection Methods
* Content Methods
* Attribute & Class Methods
* Structural Methods
* Behavioral/Interactivity Methods
## Selection Methods
These group of methods helps developers find elements and select them within the HTML file, this is essential to manipulate any desired element.
This find starts with the usage of the keyword `document` followed by the function/method (camel cased), here are the core selection of methods:
* `document.getElementById()`- *This method is the most efficient way to access a single, specific element. Because IDs must be unique within an HTML document, the browser can find the element almost instantly. It is generally used for "anchor" elements, in this case the main containers or important buttons that your script need s to control frequently.*
* `document.getElementsByClassName()`- *This method is used when you want to select every element on the page that shares a specific CSS class. Because classes are not unique, this returns an **HTMLCollection** which is  list like array of all matching elements*
* `document.querySelectorAll()`- *This returns a **NodeList** of all matching elements. It is more modern than `.getElementsByClassName()` because **NodeList** allows you to use the `.forEach()` method to directly loop though items.*
* `document.querySelector()`- *This method is used and preferred because it returns the first element it finds that matches the class. It is simpler to use because you don't have to deal with a list/collection if you only need one item.It allows you to use CSS selector syntax (`.class-name`, `#id`, or `div > p`)*.
## Context Methods
This type of methods allow us to add, read or change data held within an HTML element. Rather than changing how a element looks or where is located, it focus on the information it conveys- such as the text in a paragraph, the HTML structure of a list, or the data typed into a form. They serve as the primary way to update the interface dynamically without going into the HTML dues displaying results, change messages, or read user input.
* `.textContent`- *This property is used to read or change the raw text inside an element. It is the "safe" way to handle text because it treats everything as literal characters; if you try to insert a `<b>` tag, it will literally show the characters "`<b>`" on the screen rather than making the text bold. It is the go-to choice for updating labels, usernames, or descriptions.*
* `innerHTML`- *This property allows you to inject entirely new HTML structures into an element. It is powerful because you can build complex layouts (like a whole table or a list of images) as a string and drop them into the page in one go. However, it must be used carefully to avoid security vulnerabilities.*
* `.value`- *This is a specialized property used strictly for form elements like `<input>`, `<textarea>`, and `<select>`. While other elements use text content, form fields store their data in the `value` property. This is what you will use 100% of the time when you want to "get" what a user has typed into a search bar or a login form.*
## Attribute & Class Methods
These tools are used to modify the **"identity"** and **"metadata"** of an HTML element without changing its core tag type. While *Class Methods* allow you to trigger predefined CSS styles by adding or removing class names, *Attribute Methods* give you direct access to a tag's unique properties, such as the source of an image or the destination of a link. Together, they enable you to create visual transitions, update media content, and change how an element behaves or appears to the user in response to interaction.
- `.classList` (add, remove, toggle)- *Rather than changing individual CSS styles (like `element.style.color = "red"`), modern developers use `.classList`. This allows you to prepare a class in your CSS file (e.g., `.is-hidden` or `.active-tab`) and then simply "switch" that class on or off using JavaScript. It keeps your design (CSS) and your logic (JS) neatly separated.*
- `.setAttribute()`- *This is a general-purpose method for modifying any attribute on an HTML tag that isn't a class. For example, you would use this to change the `src` of an `<img>` tag to show a different picture, or to update the `href` of a link. It is the most direct way to change the metadata of an element.*
## Structural Methods
Structural methods allow you to modify the "skeleton" of your webpage by adding, moving, or deleting HTML elements in real-time. Instead of just changing existing text or colors, these tools let you build new parts of the page from scratch—like adding a new task to a list or removing a popup. They are essential for creating dynamic interfaces that grow or shrink based on how the user interacts with your application.
- `document.createElement()`- *Think of this as a factory. It creates a new HTML element in the browser's memory, but it doesn't put it on the screen yet. This is the first step in creating dynamic content, such as adding a new "To-Do" item to a list or generating a "Success" message after a form is submitted.*
- `.appendChild()`- *Once you have created an element with `createElement`, you must tell the browser where it belongs. `appendChild` takes that new element and "wires it" into the existing DOM tree, usually as the last child of a parent container. It is the bridge between a piece of code sitting in memory and a visible piece of the web page.*   
- `.remove()`- *This is the delete button for the DOM. When called on an element, it is immediately pulled out of the document and disappears from the screen. This is essential for interactive interfaces, such as "deleting" a post, closing a pop-up modal, or clearing a notification.*
## Behavioral/Interactivity Methods
These methods serve as the "nerves" of your web page, allowing your JavaScript code to listen for and respond to user actions. Their primary purpose is to establish a connection between a specific event—such as a mouse click, a key press, or a page scroll—and the logic you want to execute in response. By using these methods, you transform a static HTML document into a functional application that "reacts" to the user's presence. Note that while these methods set up the connection, the detailed mechanics of how different types of **Events** work will be covered in depth in a later section.
* `.addEventListener()`- *This is the most important method for creating "alive" websites. It tells the browser to "sit and wait" for a specific user action (like a `click`, `scroll`, or `keypress`) on a specific element. When that action happens, it triggers a function. It is superior to older methods (like `onclick`) because you can attach multiple listeners to the same element without them overwriting each other.*