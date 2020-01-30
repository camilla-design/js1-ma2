/*
// Question 1
// Create a function expression by assigning an anonmyous function to a variable called myFunctionExpression. 
//The function should console log your name.

const myFunctionExpression = function() {
    console.log("Camilla Reppen");
};
myFunctionExpression();

// Question 2
// Select the button in the HTML below by its class. Add a click event listener. 
//The callback function passed to the event listener should log the sentence I was clicked.

//You can pass the function in directly, declare it and pass it in by its name or assign it to a variable and pass it in by the variable name.

const button = document.querySelector(".btn");

const respondToClick = function() {
    console.log("I was clicked");
}
button.addEventListener("click", respondToClick);


// Question 3
// Select the input in the HTML below by its id. Add a keydown event listener. 
// The callback function passed to the event listener should log the value of the key that was pressed.

const textInput = document.querySelector("#firstName");

function callAfterKeyDown(event) {
    console.log("value: ", event.target.value);
}
textInput.addEventListener("keydown", callAfterKeyDown);
// Question 4
// Select the button in the HTML below by its tag. Add a mouseover event listener. 
// The callback function should add a class called hover to the button.

const button = document.querySelector("button");

function callOnHover() {
    button.classList.add("hover");
}

button.addEventListener("mouseover", callOnHover);

// Question 5
// Select the button in the HTML below by its data attribute and add a mouseout event listener to it. 
// The callback function should remove the class called hover from the button.

const button = document.querySelector(`[data-animal=dog]`);

function callMouseOut() {
    button.classList.remove("hover");
}
button.addEventListener("mouseout", callMouseOut);

// Question 6
// Select all the li tags from the HTML below. 
// Using a loop, add a mouseover event listener to each tag.

// The callback function should log the value of the data attribute on each element when the cursor moves over it.

const list = document.querySelectorAll("li");

for(let i = 0; i < list.length; i++) {
    list[i].addEventListener("mouseover", animalsList);
}
function animalsList(event) {
    console.log("value: ", event.target.dataset.animal);
}
list.addEventListener("mouseover", animalsList);

// Question 7
//Convert the if-else-if statement below to a switch statement. 
//Use the code inside the else block in the default block in the switch.
const animal = "cow";

switch(animal) {
    case "cat": 
        console.log("Meow");
        break;

    case "cow":
        console.log("Moo");
        break;

    case "bird":
        console.log("Tweet");
        break;
    
    default: 
        console.log("Harrumph");
}

// Question 8
// Convert the for loop code below to a forEach loop.
const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(sheep) {
    console.log(sheep);
});

// Question 9
// Create a timer that logs the word hello every half a second. 
// It must stop after its logged the word 6 times.

const intervalWords = setInterval(logWord, 500);

function logWord() {
    console.log("hello");
    if(counter === 5) {
        clearInterval(intervalWords);
    }
    counter++;
}
let counter = 0;

// Question 10
// Select the div from the HTML below. 
// Write code that updates the div's text to say Text updated after waiting 2 seconds. 
// You can use either innerText or innerHTML to update the text.

const container = document.querySelector("div");

function newDiv() {
    container.innerHTML = "Text updated";
}
setTimeout(newDiv, 2000);

*/