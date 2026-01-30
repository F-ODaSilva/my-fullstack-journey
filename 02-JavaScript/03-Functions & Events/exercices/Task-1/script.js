// This file will hold every function for the events on this task. 

/*
When having several elements with the same class its more complex than what we are used to, because ".querySelector/.querySelectorAll" returns a NodeList, in this case, having several elements of the same class, it will return a list/array of all of these elements, so it wont apply any "changes" you want it to do/happen. Because its not considering the element one by one.

In other hand as seen previously ".querySelector" it will return the first element of its kind inside the DOM tree. Take a look at the following block of code:
*/

// 1. Create variable that encapsulates the element using .querySelector method
    let titleExample = document.querySelector('.heading .title.change'); // 2. .heading (parent element) + " "(the space indicates the following line / >) + .title.change (the actual element)
    console.log(titleExample); // 3. Console.log the result to check what's the result  
// 4. Create a variable that encapsulates all the elements with the same class  using .querySelectorAll method
    let titlesExample = document.querySelectorAll('.heading .title.change');
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
    let  titles = document.querySelectorAll('.heading .title.change');

    // 3. Using the previous variable loop thought the NodeList/array using the .forEach method 
    titles.forEach(title => { // Arrow function shorten for .forEach(function(title) {})
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
    let paragrahps = document.querySelectorAll('.heading .para.change');

    for(let para of paragraphs) {
        para.style.fontWeight = "200";  //4.  Change the font weight of the element
        para.style.textAlign = "justify";   
        para.style.color = "black"  
    }
} 