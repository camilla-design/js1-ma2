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

function callAfterButtonClick() {
    console.log("I was clicked");
};
button.addEventListener("click", callAfterButtonClick);

// Question 3
// Select the input in the HTML below by its id. Add a keydown event listener. 
// The callback function passed to the event listener should log the value of the key that was pressed.
const firstName = document.querySelector("#firstName");

function callAfterAKeyIsReleased(event) {
    console.log("value", event.target.value);
};

firstName.addEventListener("keydown", callAfterAKeyIsReleased);

// Question 4
// Select the button in the HTML below by its tag. Add a mouseover event listener. 
// The callback function should add a class called hover to the button.

const buttonTwo = document.querySelector("button");

function callOnMouseOver() {
    console.log("Moves over the button");
};
button.addEventListener("mouseover", callOnMouseOver);


// Question 5
// Select the button in the HTML below by its data attribute and add a mouseout event listener to it. 
// The callback function should remove the class called hover from the button.

const dataAttribute = document.querySelector("dog");

function callMouseOut() {
    console.log("mouse out");
};

button.addEventListener("mouseout", callMouseOut);

