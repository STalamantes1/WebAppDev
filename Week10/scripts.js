//Week 10 Lecture Notes
//Topic: DOM Selection and basic manipulation 
//Goal: Understand how JS can interact with HTML elements to change webpage content, styles and structure
//What is DOM? 
//The Document Object Model (DOM) is how the browser represents an HTML webpage so JavaScript can interact with it.

// Think of it this way:

// HTML creates the structure of a webpage.

// CSS controls how the webpage looks.

// JavaScript uses the DOM to change what appears on the webpage.

// For example, JavaScript can change a heading, update a background color, add new elements, or respond when someone clicks a button.

//JS to find the HTML element with the ID "title"
// const title=document.getElementById("title");

// //Change the text displayed in the heading 
// title.textContent="Welcome to my website";


// What happens?

// document represents the webpage.

// getElementById("title") finds the heading.

// const title stores a reference to that element.

// .textContent replaces the heading's original text.

// The browser immediately displays the updated heading without requiring a page refresh.


//Understanding the DOM Tree 
// The browser organizes HTML elements into a structure called the DOM tree.

// Simplified DOM tree showing parent and child elements.
// Key idea: Each HTML element is represented by a node in the DOM tree. JavaScript can locate these elements and modify them.


//Selecting HTML Elements 
//Before JS can change an element, it must first select that element 
//There are 3 common methods for this:

//getElementByID(), Selects an element using a unique ID 

//querySelector(), Selects the first matching element 

//querySelectorAll(), Selects all matching elements 


// //Select the first elements with class "main"
// const main=document.querySelector(".main");

// //Select every paragraph on the page 
// const paragraphs=document.querySelectorAll("p");


// //Change Text and Styles 
// //Once JS selects an element, we can modify its content and appearance 


// //Select the heading 
// const heading=document.getElementById("title");

// //change the text 
// heading.textContent="We have updated the text again"

// //Change the color of the text
// heading.style.color="red";

// //change the font size
// heading.style.fontSize="50px";

// //Change the background color
// heading.style.backgroundColor="Lightgray";

//Important Properties 
//.textContent: Changes or retrieves text
//.style.color: Changes text color 
// .style.backgroundColor: Changes background color 
// .style.fontSize: Changes font size 

//CSS uses background-color, but JS uses backgroundColor

//Selecting and Modifying Multiple Elements 
//What if we want to change every paragraph on a webpage?
//Instead of selecting them individually, we can use querySelectorAll() with a loop 


// Select all paragraph elements
// const paragraphs = document.querySelectorAll("p");

// // Loop through every paragraph
// paragraphs.forEach((paragraph, index) => {

//     // Change the text of each paragraph
//     paragraph.textContent = "Paragraph " + (index + 1);

//     // Change each paragraph's color
//     paragraph.style.color = "green";

// });
// Explanation:

// querySelectorAll("p") selects all paragraphs.

// .forEach() goes through each selected paragraph.

// paragraph represents the current paragraph.

// index tracks its position, starting at 0.

// .textContent and .style.color update each paragraph.

// This connects directly to the loops students learned earlier in the semester.

//Create new HTML Elements via JS 

// Select the unordered list
// const list = document.getElementById("links");

// // Create a new list item
// const item = document.createElement("li");

// // Give the list item some text
// item.textContent = "JavaScript";

// // Add the item to the existing list
// list.appendChild(item);


//Intro to Event Listeners 
//Select the button 
// const button=document.getElementById("toggle");

// //listen for a button click 
// button.addEventListener("click",() =>{

// //toggle the highlight class on the body 
// document.body.classList.toggle("highlight");

// });


// Select the heading
const greeting = document.getElementById("greeting");

// Ask the user for their name
const username = prompt("What is your name?");

// Check whether the user entered a name
if (username && username.trim() !== "") {

    // Display a personalized greeting
    greeting.textContent = "Hello, " + username + "!";

} else {

    // Display a default greeting
    greeting.textContent = "Hello there!";

}