/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name

let nameElement = document.querySelector('#name');
// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = 'Denis Shevtsov';

// Step 3: declare and instantiate a variable to hold the current year
let yearElement = document.querySelector('#year')

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent = 2022;

// Step 5: declare and instantiate a variable to hold the name of your picture
let myPeacture = document.querySelector('#mypeacture').src = "images/me.jpg";

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('#mypeacture')
    .setAttribute('src', 'images/me.jpg');



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods

let arrayFood = ['Potatos ', 'Icecream ', 'Burgers ', 'Pizza '];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerHTML = arrayFood;

// Step 3: declare and instantiate a variable to hold another favorite food
let arrayFoodTwo = ['Pasta ', 'Chocolat ', 'Pepsi ', 'Tea '];

// Step 4: add the variable holding another favorite food to the favorite food array
document.querySelector('#food2').innerHTML = arrayFoodTwo;

// Step 5: repeat Step 2


// Step 6: remove the first element in the favorite foods array
arrayFood.shift();


// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = arrayFood;

// Step 8: remove the last element in the favorite foods array
arrayFood.pop();

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = arrayFood;


