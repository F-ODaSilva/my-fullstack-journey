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

// 1. Create the function
function handleForm(event) {
    // 2 . Create method that prevents the browser from reloading when user clicks on submit.
    event.preventDefault();
    // 1. Create some of the variables that we will be using globally through out the page
    let userName = document.getElementById("userName").value;
    let lastName = document.getElementById("userLastName").value;
    let occupation = document.getElementById("userOcuppation").value;
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

// CHANGING THE SIZES AND STYLES OF ELEMENTS (Headings & Paragraphs) 
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
    let paragraphs = document.querySelectorAll(".text-justify.para.change");

    for (let para of paragraphs) {
        para.style.fontWeight = "400"; //4.  Change the font weight of the element
        para.style.color = "black";
        para.classList.remove("text-justify"); // 5. Remove class from the element so the next can be added and functional 
        para.style.textAlign = "center";
    }
}

// CHANGE BOX STYLE
function changeBoxStyle() {
    let boxes = document.querySelectorAll(".col.h-100.w-50.py-3");
    
    boxes.forEach((box) => {
        box.style.backgroundColor = "whitesmoke";
    })
} 

// HIGHLIGHTING ALL PARAGRAPHS WHEN MOUSE MOVES OVER
/* 
It is really a straight forward task that could be done in CSS but in order to make this work in JavaScript you would be doing we must understand the following things:
    1. We would have to write all the event handlers inside the html document and create ids for all of them (that would be teadious);
    2. Because we are basically hovering on them there is no way that a button can be used;
    3. Even if we run a forEach for it will only make the paragraphs higlight in real time as the document loads
So whats the solution here? Create an event listener that will "listen" to the actions we are expecting to happen when these elements are interacted.
This helps us keep not only our code clean but the whole logic shorter and easier to manage. Even if there are more elements being added later through out the exercise we just need to add the respective class to it.
*/

// 1. Create the variable that holds all the <p> elements with the class of para with .querySelectorAll() method 
let highlightPara = document.querySelectorAll("p.para");

// 2. Go through all the elements and make each one become p   
highlightPara.forEach(p => {
    // 3. Using the parameter p create the event listener that will trigger the initial action/function (mouseenter)
    p.addEventListener("mouseenter", () => {  // 4. Use an arrow function to be more direct instead of creating a separate function inside the function (better for readability)
        p.style.backgroundColor = "yellow"; // 5. Change background-color
        p.style.color = "black"; // 6. Chnage font color
        console.log("Paragraph has been highleted."); // 7. Check if its working
    });
    // 8. Create another event listener that will reverse the changes applied previously
    p.addEventListener("mouseleave", () => {
        p.style.backgroundColor = "";
        p.style.color = "";
    })
});

// PRO TIP
/*
Insted ofcreating all of these methods just to chage the style one can use the CSS file and create a class (.highlight) and set the desired styles. Back inside out JavaScript file we would write the event listener shorter. Like this:

highlightPara.forEach(p => {
    p.addEventListener("mouseenter", () => {
        p.classList.add("highlight");
    });

    p.addEventListener("mouseleave", () => {
        p.classList.remove("highlight");
    });
});

*/

// HIDE BACKGROUND IMAGE
function deleteBackground(){
    // 1. Create variable that encapsulates the background image
    let background = document.querySelector("div.background");

    // 2. Remove the background-image  using the method mentioned before .classList.remove
    background.classList.remove("background"); // the correct way is to name the class without the css syntax (.className) 
}

// ALTERNATE IMAGES 
/*
Here I will create an event that will be triggered the moment the user hovers the mouse on top of an image making it alternate to a different image and back to the old image when the user moves the muse out of the is element. 
Using my previous knowledge it is a farely easy task but with some minor caviats.
This time I wont use an event handler but an event listener insted because to get more use to this method instead of going back and forth files
*/ 

// 1. Create variable that will retrive the image element
const altImage = document.querySelector("#imageContainer img.card-img-top");
// 2. Create the event listener that will alter the image when user hovers the mouse on top of the element
altImage.addEventListener("mouseenter", () => {
    // alert("User has hovered an image!"); // 3. Create an alert that will 
    altImage.src = "images/desktop-2.jpg"; // 4. Change image using the method ".src" and select the image from the file tree
    console.log(`${userName} hovered and altered image`); // 5. Console.log message with the user data from form.
}) 
// 6. Create the event listener that reverts the image back to its original
altImage.addEventListener("mouseleave", () => { 
    altImage.src ="images/desktop.jpg" 
})

// ALERT WHEN USER RIGHT-CLICKS AN IMAGE
/*
As the title implies an alert will be displayed as soon as the event  (mouser right button) is triggered this will using the method above it is easier and more efficient than going back and forth files 
*/ 

// 1. Create variable tha t holds the element we want the event to occur
// Knowing that we have two elements with the same class inside the same parent container we use advanced selectors to help us idetify and manipiulate the desired element. The simpler and fastest way is to use the following method bellow
const imageRClick = document.querySelector("#imageContainer img.card-img-top.last") // last-of-type will look for the last item of its type
/*
But imagine we have a lot of images with the same class (6), how would we go by doing this. We use .querySelectorAll to create a NodeList and then retrive the item we want. Here is an example:
    1. const elementGroup = docuemnt.querySelectorAll("#elementContainer element.class");
    2. let wantedElement = elementGroup[2] // 3rd element
    3. let lastElement = elementGroup[elementGroup.lenght-5] // last element
Keep in mind that an array index starts with 0 
*/ 
// 2. Create the event listener
imageRClick.addEventListener("contextmenu", (event) => {
    // 3. Prevent default contextmenu be dispalyed when event triggers so further action can be triggered
    event.preventDefault();
    alert("You slected the laptop setup!");
}) 