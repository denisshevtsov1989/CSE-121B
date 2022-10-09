
// 1. First Declaration
function mySuperFunction() {
    // Do stuff here
};

// 2. Function Expression
const mySuperFunction = function () {
    // Do stuss here
};

// 3. ArrowFunction (Lambda)
const mySuperFunction = () => {
    // Do stuff here
};

/* Activity 1
   GPA Calculator*/
// 1. Display the option for the user
// 2. Accept input from the user
// 3. Perform the requested operation with the user provided arguments
// 4. Display the result of the operation

function getGrades(inputSelector) {
    // get grades from the input box
    let inputSelector = document.getElementById("#grades").placeholder;
    // split them into an array (String.split(','))
    inputSelector.split(',');
    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    inputSelector.map(' ');
    // return grades
    return inputSelector;
}

function lookupGrade(grade) {
    // converts the letter grade to it's GPA point value and returns it
}

function calculateGpa(grades) {
    // gets a list of grades passed in
    // convert the letter grades to gpa points
    // calculates the GPA
    // return the GPA
}

function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector
}

function clickHandler() {
    // when the button in our html is clicked:
    // get the grades entered into the input
    // calculate the gpa from the grades entered
    // display the gpa
}