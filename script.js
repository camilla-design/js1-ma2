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

function respondToClick() {
    console.log(`the button was clicked`);
}

document.addEventListener("click", function(){
    console.log("I was clicked");
});

// Question 3
// Select the input in the HTML below by its id. Add a keydown event listener. 
// The callback function passed to the event listener should log the value of the key that was pressed.
document.addEventListener(`keydown`, logkey);

function logkey(id) {
    log.textContent += `${id.code}`;
}
document.onkeydown = logkey;