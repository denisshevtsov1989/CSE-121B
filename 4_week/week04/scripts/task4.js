/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let mySelf = {
    name: "Denis Shevtsov",
    photo: "images/me.jpg",
    favoriteFoods: ['Potatos ', 'Icecream ', 'Burgers ', 'Pizza '],
    hobbies: ['Cook food ', 'Photography ', 'Watch a movie ', 'Read books '],
    placesLived: [
        {
            place: "Novosibirsk",
            length: "20 years",

        },
        {
            place: "Omsk",
            length: "30 years",
        }
    ]

};
// Step 2: Inside of the object, add a property named name with a value of your name as a string

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").innerHTML = mySelf.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").setAttribute("src", mySelf.photo);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").setAttribute("alt", mySelf.name);
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
var potato = document.createElement("li");
potato.textContent = mySelf.favoriteFoods[0];

var icecream = document.createElement("li");
icecream.textContent = mySelf.favoriteFoods[1];

var burgers = document.createElement("li");
burgers.textContent = mySelf.favoriteFoods[2];

var pizza = document.createElement("li");
pizza.textContent = mySelf.favoriteFoods[3];

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.querySelector('#favorite-foods').append(potato, icecream, burgers, pizza);
// Step 6: Repeat Step 4 for each hobby in the hobbies property
var cookFood = document.createElement("li");
cookFood.textContent = mySelf.hobbies[0];

var photography = document.createElement("li");
photography.textContent = mySelf.hobbies[1];

var watchAMovie = document.createElement("li");
watchAMovie.textContent = mySelf.hobbies[2];

var readBooks = document.createElement("li");
readBooks.textContent = mySelf.hobbies[3];


// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
document.querySelector('#hobbies').append(cookFood, photography, watchAMovie, readBooks);

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
var pl = document.createElement("dt");
pl.textContent = mySelf.placesLived[0].place;
var pt = document.createElement("dt");
pt.textContent = mySelf.placesLived[1].place;
// - Create an HTML <dd> element and put its length property in the <dd> element
var len = document.createElement("dd");
len.textContent = mySelf.placesLived[0].length;
var ley = document.createElement("dd");
ley.textContent = mySelf.placesLived[1].length;
//len.textContent = mySelf.placesLived("length");
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
document.querySelector('#places-lived').append(pl, len, pt, ley);