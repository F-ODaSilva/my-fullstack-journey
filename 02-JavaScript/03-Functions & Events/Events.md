Events occur/fired/triggered when users interact with elements of the page, the page or even their hardware (mouse & keyboard). They can be trigger a particular function, different code can happen when different parts of the page are interacted by users. 
All of the events start with the keyword `on` followed by the interaction.
Here is a list of the most common events you'll deal with when getting started:

| Event       | Description                         |
| ----------- | ----------------------------------- |
| onchange    | Some HTML element has been modified |
| onclick     | An HTML element has been clicked on |
| onmouseover | An HTML element was hovered over    |
| onmouseout  | Mouse cursor moves off HTML element |
| onkeydown   | A keyboard button is pressed        |
| onload      | The HTML page has finished loading  |

## Event Types
There are several types of events that occur in the browser while you are browsing the web. Any of them can trigger a function in your JavaScript code.
### UI Events
These type of events occur whena user interacts with the browser's user interface rather than the webpage

| Event  | Description                                                      |
| ------ | ---------------------------------------------------------------- |
| load   | Web page has finished loading                                    |
| unload | Web page is unloading (usually because a new page was requested) |
| error  | Browser encounters a JavaScript error or an asset doesn't exist  |
| resize | Browser window has been resized                                  |
| scroll | User has scrolled up or down the page                            |
### Keyboard Events
These type of events occur when user interacts with the keyboard 

| Event    | Description                                                  |
| -------- | ------------------------------------------------------------ |
| keydown  | User first presses a key (repeats while key is depressed)    |
| keyup    | User releases a key                                          |
| keypress | Character is being inserted (repeats while key is depressed) |
### Mouse Events
Events that occur when a user interacts with a mouse, trackpad or touchscreen

| Event     | Description                                                    |
| --------- | -------------------------------------------------------------- |
| click     | User presses and releases a button over the same element       |
| dbclick   | User presses and releases a button twice over the same element |
| mousedown | User presses a mouse button while over an element              |
| mouseup   | User moves the mouse (not on touchscreen)                      |
| mouseover | User moves the mouse over an element (not on touchscreen)      |
| mouseout  | User moves the mouse off an element (not on touchscreen)       |
### Focus Events
They occur when an element gains or loses focus 

| Event    | Description         |
| -------- | ------------------- |
| focus    | Element gains focus |
| focusout | Element loses focus |
### Form Events
These type of events occur when a user interacts with a form field

| Event  | Description                                                                                                |
| ------ | ---------------------------------------------------------------------------------------------------------- |
| input  | Value in any `<input>` or `<textarea>` element has changed or any element with the contentdiable attribute |
| change | Value in select box, checkbox, or radio button changes                                                     |
| submit | User submits a form (using a button or a key)                                                              |
| reset  | User clicks on a form's reset button                                                                       |
| cut    | User cuts content from a form field                                                                        |
| copy   | User copies content from a form field                                                                      |
| paste  | User pastes content from a form field                                                                      |
| select | User selects some text in a form field                                                                     |


## Event Binding
There is a few ways to bind events to an HTML element, these event handlers let you indicate which event you are waiting for any  particular element.
There are three ways to do it:
* **HTML Event Handlers**
* **Traditional DOM Event Handlers**
* **Event Listeners**
### HTML Event Handlers
These type of events work as attributes inside an HTML element, that could respond to events on the element they were added to, meaning that its a inline expression. Its value calls the function that has to run when that event occurs.

----
==This type of evens are no longer used because it is better to separate the JavaScript from the HTML.==
Here is an example of the inline event handler:
```HTML
<!DOCUMENT html>
<html lang="en">
	<head>
		<title>HTML Event Handlers</title>
		<body>
			<button class="btn" id="eventButton" onmouseover="alert('You have hovered the button, click for more results')" onclick="alert('Button clicked')">Click Me!</button>
		</body>
	</head>
</html>
// This will result on alerting the user in the browser with text as soon has the useer hovers the button element and alert another text as soon as the button is clicked
```
As you can see from the previous example, if we wanted to create a more extensive and function/logic it would take a lot of space inside our HTML file.Thus to go around this we can create/build the logic inside the `<script>` element making our document/code, more readable, cleaner and organized:
```JS
<body>
	<h1>Hello welcome to your first JavaScript Event</h1>
	<p>Interact with the button below to see what happens</p>
</body>
	<button class="btn" onmouseover="buttonHover()" onclick="buttonClick()">Button</button>

<script>
	const button = document.querySelector(".btn");
	function buttonHover() {
		alert("Button is interactable, click it for more results");
	}

	function buttonClick() {
		const newPara = document.createElement('p'); // 1. Creates <p> element inside the HTML file
		newPara.className = 'dynamic.text'; // 2. This creates a class for the new paragraph
		newPara.textContent = 'This paragraph was added using a standard JavaScript event handler '; // 3. This will add the intended information inside the newly
		document.body.appendChild(newPara); // 4. THis will add the element to the body right after bellow the button 
}
</script>
```
### Traditional Event Handler
When using these type of events, you bind the event directly in JavaScript without adding event attributes to your HTML elements. The element remains clean with no event handlers in the HTML itself. Instead, all the event binding happens inside the `<script>`. 
```HTML
<body>
	<h1>Hello welcome to your first JavaScript Event</h1>
	<p>Interact with the button below to see what happens</p>

	<button class="btn">Button</button>
</body>
<script>
	const button = document.querySelector(".btn");
	function buttonHover() {
		alert("Button is interactable, click it for more results");
	}

	function buttonClick() {
		const newPara = document.createElement('p'); // 1. Creates <p> element inside the HTML file
		newPara.className = 'dynamic.text'; // 2. This creates a class for the new paragraph
		newPara.textContent = 'This paragraph was added using a standard JavaScript event handler '; // 3. This will add the intended information inside the newly
		document.body.appendChild(newPara); // 4. THis will add the element to the body right after bellow the button 
}

// 5. Add event binding after JavaScript functions assigning the functions as their value without paretheses
button.onmouseover = buttonHover; 
button.onclick = buttonClick;
</script>
```

The key difference is that you assign functions to event properties on the DOM element using the syntax `element.onevent = functionName;`, where you reference the function **without parentheses**. This tells the browser to execute when the event occurs, rather than executing it immediately. By doing all of this you separate your HTML from your event logic, you keep your markup clean and your JavaScript organized, making it much easier to maintain and update complex functionality as your application grows.
### Event Listeners
They are a more modern form to bind and treat events in JavaScript, they allow one event to trigger multiple functions. As a result they are less likely to be conflicts between different scripts that run on the same page.
The main advantage is that you can attach multiple listeners to the same element for the same event without overwriting previous handlers.
The standard syntax for these type of events is:
```JS
element.addEventListener(event, functionName)
```
To remove an event listener instead of using **"add"** you replace it with **"remove"**:
```JS
element.removeEventListener(event, functionName)
```
Here is an practical example of it:
```JS
const button = document.querySelector(".btn");

function handleClick() {
  alert("Button was clicked!");
}

button.addEventListener("click", handleClick);
```
#### The Event Object(The `e` Keyword)
When an event fires,  the browser automatically passes an event object to your function. This object contains information about the event. You can access it by adding a parameter (typically named `e`, `event` or `evt`) to you function:
```JS
function handleClick(e) {
 console.log(e); // This logs the entire event object 
}
button.addEventListener("click", handleClick);
```
A more complex and understandable example of this its bellow:
```JS
<body>
  <input type="text" id="userInput" placeholder="Enter your name">
  <button id="submitBtn">Submit</button>
  <div id="output"></div>
</body>

<script>
  //1. Get the DOM elements
  const inputField = document.getElementById('userInput');
  const submitBtn = document.getElementById('submitBtn');
  const outputDiv = document.getElementById('output');

  //2. Define a function that will be called when the button is clicked
  function handleSubmit(e) {
    // e is the event object that contains information about the click event
    
    //3. Get the value that the user typed in the input field
    const userName = inputField.value;
    
    //4. Check if the input field is empty
    if (userName === '') {
      // If empty, show an alert and stop the function
      alert('Please enter your name');
      return;
    }
    
    //5. Create a new paragraph element to display the message
    const newMessage = document.createElement('p');
    
    //6. Add text content to the paragraph with the user's name
    newMessage.textContent = 'Hello, ' + userName + '! Welcome to the javascript event listener example.';
    
    //6. Add some styling to the paragraph
    newMessage.style.color = 'green';
    newMessage.style.fontSize = '18px';
    newMessage.style.marginTop = '20px';
    
    //7. Add the paragraph to the output div
    outputDiv.appendChild(newMessage);
    
    //8. Clear the input field so the user can enter another name
    inputField.value = '';
    
    //9. Log the event object to see what information it contains
    console.log('Event object:', e);
    console.log('Element that triggered event:', e.target);
  }
  
  //10. Attach the event listener to the button
  // When the button is clicked, the handleSubmit function will be called
  // The event object is automatically passed to the function
  submitBtn.addEventListener('click', handleSubmit);
</script>
```
##### Useful Event Object Properties:
Like any other object the event object can have properties that are helpful to developers use manipulate and extract information.
These are the properties that an event can use:
###### e.target
This relates to the element that triggered the event
```JS
//1. Create function
function handleClick(e) {
	console.log(e.target); //2. Check for the current element if it is the button elememt
	e.target.style.backgroundColor = "limegreen"; //3. Change background-color off button 
}

//4. Attach the event listener to the button
button.addEventListener("click", handleClick); 
```
###### e.type 
This property in a way is self-explanatory, it tells the type of event that occurred or has been triggered.
```JS
const input = document.querySelector('input'); 

input.addEventListener('click', function(e) { // Mouse event 
 console.log(e.type); // Logs: click
}); 
input.addEventListener('mouseover', function(e) { // Mouse event
	console.log(e.type); // Logs: mouseover 
});
```
###### e.preventDefault
This property stops the default behavior of an element occurring.
```JS
const link = document.querySelector('a');

link.addEventListener('click', functio(e) {
	// Without the property the link would go to a new page
	// With the preventDefault property, it stops from going to a new page
	e.preventDefault();
	console.log('Link click was prevented!'); 
})
```
###### e.stopPropagation
```JS
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

parent.addEventListener('click', function(e) {
	console.log('Parent was clicked');
})

child.addEventListener('click', function(e) {
	// Without stopPropagation(), the parent click would also trigger 
	// With stopPropagation(), only the child click happens 
	e.stopPropagation();
	console.log('Child was clicked (parent was not triggered)');
})
```
#### Arrow Functions In Event Listeners
As we learned in the previous functions chapter we can shorten our functions in a way that it simplifies our code by using `=>` and removing the function name. This can be adopted inside event listeners. 
Bellow is an example of its usage:
```JS
button.addEventListener("click", (e) => {
	console.log("Button clicked!");
	console.log(e.target);
})
```

