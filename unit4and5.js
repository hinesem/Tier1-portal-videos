// functions are callable, repeatable code

function actualMath(num0, num1){
    console.log(num0, num1);
    let answer = num0 * num1;
    return answer;
} // end actualMath

function logger() {
    console.log('in logger');
} // end logger
logger();


function mathExample() {
    console.log('in mathExample');
    let answer = 3 * 9;
    return answer;
} // ent mathExample

function returner() {
    console.log('in returner');
    return true;
} // end returner


returner();
console.log('running returner: ', returner()); // this will print "true"

console.log('3 * 9 =', mathExample());
console.log(actualMath(2, 5));

console.log(actualMath(4,6));

function calcAge1(birthYear) {
    return 2037 - birthYear;
} // end calcAge1

const age1 = calcAge1(1986);
console.log(age1);

//anonymous function:
const calcAge2 = function(birthYear) { //function is not named (anonymous)
    return 2037 - birthYear;
} //end calcAge2
const age2 = calcAge2(1991);
console.log(age2);


const seatsInCar = 5;
let passengers = [];
let tankFull = true;

function enoughSeats(){
    console.log('in enoughSeats');
    if(seatsInCar >= passengers.length){
        return true;
    }
    else{
        return false;
    }
}

function getInCar(nameOfPassenger){
    console.log('in getInCar', nameOfPassenger);
    //push new passenger into array
    passengers.push(nameOfPassenger); //push new passenger into our array
    return passengers;
}

function readyForRoadTrip(){
    if(enoughSeats() && tankFull){
        return true;
    } else{
        return false;
    }
}
getInCar('You');
getInCar('Eric');
getInCar('hitchhiker');
// getInCar('some dude');
// getInCar('friend');
// getInCar('thing1');
console.log('do we have enough seats?', enoughSeats());
console.log('are we ready for the trip?', readyForRoadTrip());



//imposter syndrome. learning from mistakes is important. seek others' input.


// ..........  unit 5 ............

/*
think of objects as a variable with different properties. these properties can be accessed using the dot operator


a variable holding the object ie 8 of spades
.8
.spades


object.propertyName
object[expression]
*/

//  object literals

let card0 = {
    suit: 'Hearts', // this is a property of card0
    number: 2 // this is also a property of card0
} // end card0

let card1={
    suit: 'Spades',
    number: 1
}
console.log(`---check if the card is hearts, OR diamonds---`)
function isRed(cardToCheck){ // passing an object "card0" as an argument into a function
    console.log('in isRed', cardToCheck);
    if(cardToCheck.suit === 'Hearts' || cardToCheck.suit === 'Diamonds'){
        return true;
    } // end red
    else{
        return false;
    } // end !red
} // end isRed

console.log(isRed(card0));
console.log(isRed(card1));
/*
let card3 = {
    suit: 'Diamonds',
    number: 4
} // end card3

let card4 = {
    suit: 'Clubs',
    number: 4
} // end card4

function isHigher(cardA, cardB){
    if(cardA.number > cardB.number){
    console.log(`the ${cardA.number} of ${cardA.suit} is greater than the ${cardB.number} of ${cardB.suit}.\n\n`)
    }else if(cardB.number > cardA.number){
    console.log(`the ${cardB.number} of ${cardB.suit} is greater than the ${cardA.number} of ${cardA.suit}.\n\n`)
    }else{
        console.log('The cards have the same number\n\n');
    }
}

//console.log(isHigher(card3, card4));
isHigher(card3, card4);
*/

// .....flowcharts, loops
/*

*/

let box = [0,1,2,3,4,5,6,7];

for(let i = 0; i < box.length; i ++){
    console.log(box[i]);
}

function getLastItem(arr) {
	let lastItem = arr[arr.length -1];
	return console.log(lastItem);
}

getLastItem([1, 2, 3]);

function getFirstValue(arr) {
    return arr[0];
}

console.log(getFirstValue([1, 2, 3]));

//Create a function that takes the age in years and returns the age in days.

function calcAge(age) {
	return age * 365;
}

console.log(calcAge(2));

//Write a function that takes an integer minutes and converts it to seconds.
function minutes(mins) {
 return mins * 60;
}
console.log(minutes(5));

//Write a function that takes the base and height of a triangle and return its area.
function triArea(base, height) {
	return (base * height) / 2;
}
console.log(triArea(10, 5));

//find smallest number in an array
function findSmallestNum(arr) {
	let sorted = arr.sort();
    return sorted[0];
}
console.log(findSmallestNum([88, 2]));

function findSmallestNum(arr) {
    return Math.min(...arr);
  }

  console.log(findSmallestNum([88, 2]));
