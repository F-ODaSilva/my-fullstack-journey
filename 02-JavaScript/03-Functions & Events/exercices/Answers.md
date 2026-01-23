# Quiz Resolution

1. A script is a set of instructions that hold information/data that can be manipulated to follow/create a desired outcome.
These scripts can be added to an HTML file using the `<script>` tag, it is recommended to place it before the `</body>` tag this is where all the logic is stored and functions.
This logic can be externally linked if its too extense, by adding an attribute called `src` where the name of the JavaScript file is stored.

    ```JS
        <script src="script.js"></script>
    ```

2. Scope is programming language terminology that serves as a guide to our program in coraltion to our variables visibility, meaning that it is connected to the positionting of our variables.
There are mainly five types of scope, but the most commonly used  are three:
   * Global Scope
   * Local Scope
   * Block Scope

3. Function declaration is a form or an extensive method of writing down a function it uses all the keywords, it stands alone as statement.
In the other hand a function expression is a function assigned to a variable.
Hoisting the function decloration the function can be called before it it is written, while the function expression can not do the same because the variable containing the function must be created before it is called.

4. The limitations of arrow functions compared to the tradtional functions are the following:
    * No arguements available.
    * It's not dynamic due to the lack of use of `this`.
    * No constructor used.

5. High order functions are functions that return functions and function as arguments.

6. These are the selection methods and description are the following (**they all start with "document"**):
    * **.getElementById() -** It selects the element with the same id.
    * **.getElementByClassName() -** It selects every element inside the document. It uses an HTMLCollction fetching method thus making it unavailabe for loop ss such as .forEach().
    * **.querySelector() -** It selects the first element that matches the chosen element or class inside the mehods parameter.
    * **.querySelectorAll() -** It selects all the elements with the same name/class using a NodeList thus making it possible to turn this elements into values of an array an loop through them using a .forEach().
  
7. This is the pseudo-code for creating a new `<li>` element, adding text-content to it and appending it to to an `<ul>` in the DOM:
    1. Create an a variable using the keyword `const` encapsulating an array `marvelHeroes = ['Hulk, 'Vision', 'Iron Man', 'Captain America', 'Thor']`;  
    2. Create a variable with the keyword `const` with the name of `listContainer` its value being `document.createElement(<ul>)`;
    3. Using the previous variable set an `id` with the name of `hero-list` using the method `.setAttribute('id', 'hero-list')` so we can esily call it when we are about to manipulate it futher on (good practice if there is more `<ul>` inside the HTML file);
    4. Create a function called using the keyword `function` with the name of `addListItems()`  a parameter called `heroName`;
    5. Inside the function we called `listItem` with its value being `document.createElement('li')`;
    6. Using the same variable set a `class` using the method `.setAttribute('class', 'hero list-item')`;
    7. Use the variable `listItem` we apply the method `.textContent` (to add content string/text content to the `<li>` element) and set the array equally to it giving it the same name as the parameter so it can be used later on;
    8. Return the `heroName` using the keyword `return`;
    9. Loop thorugh the array `marvelHeroes` using a `.forEach(hero)` the (hero will work as a argument later representing the current individual string being processed from the array);
    10. Then we use the function `addListItem(hero)` assing in it to a variable using `const` with the name of `newLi`;
    11. We add this new list item(`newLi`) to the `listContainer`(`<ul>`) by using the method `.appendChild(newLi)`. We finally close the function;
    12. The last and final step is to append this this list container to the DOM, using `document.body.appendChild(listContainer)`.
8. The best way to modify/manipulate attributes are the following:
    * **.add()**
    * **.remove()**
    * **.toggle()**
    * **replace()**
9. You style an HTML element by first assign this element to a variable (for better readability and organization) and use the method `.style()`, inside the brackets we can use CSS properties and syntax but wrapped arround `''` or `""`. `listContainer.style("background-color: salmon")`;
10. Three usedul event object handlers are the following:
    * e.target
    * e.type
    * e.preventDefault
