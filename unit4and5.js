// functions are callable, repeatable code
/*
function actualMath(num0, num1){
    console.log(num0, num1);
    let answer = num0 * num1;
    return answer;
} // end actualMath

function logger() {
    console.log('in logger');
} // end logger

function mathExample() {
    console.log('in mathExample');
    let answer = 3 * 9;
    return answer;
} // ent mathExample

function returner() {
    console.log('in returner');
    return true;
} // end returner

logger();
returner();
console.log(returner()); // this will print "true"

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

*/

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

let card3 = {
    suit: 'Diamonds',
    number: 4
} // end card3

let card4 = {
    suit: 'Clubs',
    number: 3
} // end card4

function isHigher(cardToCheck, cardToCheck){
    if(cardToCheck.number > cardToCheck.number){
    console.log(`the ${card3.number} of ${card3.suit}is greater than the ${cardToCheck.number} of ${cardToCheck.suit}.`)
    }else{
    console.log(`the ${cardToCheck.number} of ${cardToCheck.suit}is greater than the ${card3.number} of ${card3.suit}.`)
    }
}

console.log(isHigher(card3, card4))