// This file will hold every function for the events on this task.

// ALERT WHEN PAGE FINISHES LOADING
// To create an alert when the page finishes loading we can use the "window" object with the ".onload" method and assign it a function.
window.onload = function () {
    alert("Page has loaded you can now interact with it. Have fun!");
};

//ALERT FORM
/*
    Here we will create a function that will retrive the forms user data and alert it alongside dispalying it in the console. Forms are an important part of the development journey because it is insde there you collect data, manipulate it, and reuse them. It has a lot of logic behind it due to validation. So we must go step by step to ensure the best experience possible not only for the users but for developers too.
*/
// 1. Create some of the variables that we will be using globally through out the page
let userName = document.getElementById("userName").value;
let lastName = document.getElementById("userLastName").value;
let occupation = document.getElementById("userOcuppation").value;

// 2. Create the function
function handleForm(event) {
    // 3 . Create method that prevents the browser from reloading when user clicks on submit.
    event.preventDefault();
    // 4. Create variabales that retrieve the values form the select boxes
    let yearsPro = document.getElementById("yearsProgramming").value;
    let interest = document.getElementById("workArea").value;
    // 5. Create variables that retrieve the value from the checkboxes
    let isReady = document.getElementById("checkResolve").checked; //Thhe method .checked will return tru or false depending if the user checked or not the box on the page
    // 6. Create a conditional statement that will check for the value of the boolean and display a message if its true, if false it will display another message.
    function checkBoxResolve(check) {
        if (check == true) {
            return "is 100% ready to embark on their carrer in " + interest + " 💪😌";
        } else {
            return "unfortunately is not ready or sure, plesase find the resolve to continue 😅";
        }
    }

    // 9. Create messsage with all of the data
    let message = `
${userName} ${lastName} is a ${occupation} and has ${yearsPro} years of expierence.
Interest: ${interest}.
${userName} ${checkBoxResolve(isReady)}
    `;
    // 10. Console the form submission to check if everything is working properly
    console.log("----Form Submission----");
    console.log(message);

    // 11. Final and last step alert the message
    alert(message);
}

/*
When having several elements with the same class its more complex than what we are used to, because ".querySelector/.querySelectorAll" returns a NodeList, in this case, having several elements of the same class, it will return a list/array of all of these elements, so it wont apply any "changes" you want it to do/happen. Because its not considering the element one by one.

In other hand as seen previously ".querySelector" it will return the first element of its kind inside the DOM tree. Take a look at the following block of code:
*/

// 1. Create variable that encapsulates the element using .querySelector method
let titleExample = document.querySelector(".heading .title.change"); // 2. .heading (parent element) + " "(the space indicates the following line / >) + .title.change (the actual element)
console.log(titleExample); // 3. Console.log the result to check what's the result
// 4. Create a variable that encapsulates all the elements with the same class  using .querySelectorAll method
let titlesExample = document.querySelectorAll(".heading .title.change");
console.log(titlesExample); // 5. Conosole.log final result to check what's the result
/*
    As you can see the titleExample returns the first element of its kind and it can be manipulated  while the titlesExample returns an array, this is the actual message:
    NodeList [ h2.title.change, h2.title.change]
​    0: <h2 class="title change">​ 1: <h2 class="title change">
​    length: 2
    Making it impossible to manipulte using the method we've been using before.For it to be manipulated we have to loop trough the array, the best way to do this is using the .forEach method.  
*/

// FOREACH METHOD
// 1. Create function
function changeHeadingSize() {
    // 2. Create the variable that will hold the elements using the .querySelectorAll method
    let titles = document.querySelectorAll(".heading .title.change");

    // 3. Using the previous variable loop thought the NodeList/array using the .forEach method
    titles.forEach((title) => {
        // Arrow function shorten for .forEach(function(title) {})
        title.style.fontSize = "30px"; // 4. Change the size of the element
        title.style.color = "black"; // 5. Change the color of the element
        title.style.fontWeight = "600"; // 6. Change font weight of the element
    });
}

/*
Another simpler and more clear way of doing this is by using the for...of loop, we can do this by changing one of the remaining buttons.
*/

// FOR ... OF LOOP
// 1. Create function
function changeParaStyle() {
    let paragrahps = document.querySelectorAll(".heading .para.change");

    for (let para of paragraphs) {
        para.style.fontWeight = "200"; //4.  Change the font weight of the element
        para.style.textAlign = "justify";
        para.style.color = "black";
    }
}