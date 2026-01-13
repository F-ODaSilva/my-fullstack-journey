# The JavaScript Ecosystem: Window, DOM, and Scripts
Before going any further it is important to understand some basic concepts that are essential to programming in  JavaScript, these concepts are the following: 
* Window Object
* Document Object Model
* Script
* Scope
 
### Window Object
The `window` object represents the *browser window*(or tab) that contains your web page. In a browser environment, it serves two main roles:
	1. *The Global Object:* Any variable or function you create in the *global scope* (not inside a function) automatically becomes a property or method of the `window` object.
	2. *The Browser Interface:* It provides the API (tools) to interact with the browser itself, things like the URL, the history and the screen size, these are all properties.

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
Scope is the "accessibility" or visibility of variables. It determines which parts of your code can see or use a specific variable. If a variable is "in scope," it is available for use; if it is "out of scope," your code will throw a ReferenceError.
There are five types of scope in JavaScript:
1. ***Global Scope:*** The Global Scope is the outermost layer. Any variable declared outside of a function or a block belongs to the global scope. These variables are "universal"—they can be accessed and modified from anywhere in your entire script, including inside functions or loops.
	* **Browser Context**: *In a browser, global variables declared with var are added to the window object. Variables declared with let or const are still global but do not attach themselves to the window.*
2. ***Function (Local) Scope:*** When you declare a variable inside a function, it belongs to that function's scope. It is hidden from the rest of the world. You can use the variable anywhere inside that function (and inside nested functions), but as soon as the function finishes executing, those variables are usually "cleaned up" and become inaccessible to the outside code. This applies to variables declared with var, let, and const.
3. ***Block Scope:*** This was introduced in ES6 (2015) and is tied specifically to curly braces { }. A block could be an if statement, a for loop, or even just a set of "naked" braces.
   * **Important Distinction**: *Only variables declared with let and const are block-scoped.*
	* **The "var" Exception**: *If you use var inside an if statement or a loop, it "leaks" out and is actually accessible outside those braces. This is why modern JavaScript prefers let and const.*
	
4. ***Lexical Scope (Static Scope):*** Lexical scope is a concept rather than a "place." It means that the scope of a variable is determined by where it was written in the source code. If you nest a function inside another function, the inner function has access to the variables of the outer function. JavaScript looks for a variable starting in the current scope; if it doesn't find it, it moves "up" to the next outer scope until it reaches the global scope.

5. ***Module Scope:*** In modern development, when you use JavaScript Modules (using *import* and *export*), each file becomes its own *"module"*. Variables declared in a module are local to that file only. They are not added to the Global Scope unless you explicitly export them and another file imports them. This helps prevent "naming collisions" where two different files use the same variable name.

Now tht we have a basic understanding of the JavaScript ecosystem we can now start talking in depth about the following concepts:
1. **Functions**
2. **Events**

# Functions
Browsers require very detailed instructions about what we want them to do, therefore, complex and long scripts are required, programmers use functions to organize their code and make these instructions executable.They group a series of statements together to perform a specific task. If different parts of a script repeat the same task you can reuse the function to execute execute them.
## What is a function?
A function is  a block of JavaScript code that is defined once but may be executed, or invoked, any number of times.There are two types of functions:
* **User-Defined:** *This type of functions are created and mantained by the user/programmer to complete a specific task.*
* **Built-In:** *This type of functions are already inside the JavaScript language and are readily available for us to use.An example of this are the `alert()` or `String()`, there are several functions already implemented in JavaScript that programmers have written for many common and complex tasks.*
## Declaring a function
To create a function, you use the `function` keyword followed by the name that works as an **identifier** followed by parentheses, this in return is followd by curly braces where the statements that perform the task are encapsulated serving as the **body** or **code block** of the function that works as the logic.
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
	
}
```




> Parameters are subtle different from arguments but they are interchangeably connected.













