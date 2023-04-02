console.log('Unit 2 & 3 videos: code-along with Dev Jena');
// conceptual variables/constants
// a variable is mutable, a constant is immutable
/*
'let' is a declaration/creation of a variable 'name' = "value"; 
let name = "value";
*/

let time = '1951'; 
time = '1952';
console.log(`current time: ${time}`);

let place = 'home'; //string  ....why can't I name the variable "location"?
let cats = 1; //integer
let hungry = true; //boolean

const petsAllowed = 2; // immutable variable


// variables practical

let testVar = 9;
console.log(testVar);
console.log(`value of testVar: ${testVar}`);

// number variables conceptual
/*
+ can concatanate:
let stringVariable = "I like" + "cats";  <concatanation
let numVar = 3 + 9;  <math
*/

let plants = 12;
plants = plants + 3; // plants is now 15
plants += 3; // plants is now 18
plants -= 1; // plants is now 17
plants ++; // plants is now 18



// number variables practical
let cars = 0;
let motorcycles = 9;
console.log(`bikes: ${motorcycles}`);

console.log('had to put the soft tail in the garage');
motorcycles --; // decrement motorcycles by 1
console.log(`bikes: ${motorcycles}`);


// practical string variables. concatanation
let catName = 'Squiggle';
let catAge = 3;
console.log(catName);

console.log('The name of the cat is:', catName); // concatanation with comma

let sentence = 'This is a sentence about the cat named' + catName;
console.log(sentence);
sentence = 'This is a sentence about the cat named ' + catName;
console.log(sentence);

sentence = 'The cat is ' + catAge + ' years old.'; // have to add spaces within commas to represent spaces
console.log(sentence);

// DevTools - elements


//loops practical
/*
let hand = ['Q', '2', '7', 'A', 'j'];


for (i in hand) {
    console.log('card: ', hand[i]);
    if (hand[i] === 'A') {
        console.log('You got an ace!');
        console.log(' ');
        break;
    }
}

for (card of hand) {
    console.log('for of loop', card);
    if (card === 'Q'){
        console.log('You got the Queen');
        console.log(' ');
        break;
    }
}
*/

// for IN loops through property names of an object
// objects contain key (property)/value (value) pairs
// for oF loops through 

/*
for i in object { //object is the iterable (what we're iterating through)

}
*/

const hand = ['J', '1', '7', 'A'];

for (i in hand) {
    console.log(i); // this will only print the index
}
console.log(" ");

for (i in hand) {
    console.log(hand[i]); // this will print the value in the index
}
console.log(" ");

// for of will NOT work with objects, because they are NOT iterable

for (i of hand) {
    console.log(i); // this will print the value in the index
}console.log(" ");

// arrays
let caprese = ['mozzarela', 'olive oil', 'balsamic vinaigrette', 'salt'];

caprese.push('tomatoes');

caprese.unshift('pepper');

console.log(caprese.indexOf('mozzarela'));

console.log(caprese);
console.log(caprese[caprese.length -1]);

console.log(caprese[0][2]);

let favFoods = [['tomatoes', 'sweet potatoes', 'spinach', 'cucumber'],['pears', 'pineapple', 'grapes', 'oranges'],['buffalo wings', 'steak', 'suasage'], ['twix', 'donuts', 'ice cream', 'pudding'],['chocolate milk', 'pepsi', 'rootbeer']];

console.log(favFoods[4][0].length);
console.log(favFoods[4][0]);

console.log(favFoods.includes('beer'));
favFoods.push('beer');
console.log(favFoods);
console.log(favFoods.pop());