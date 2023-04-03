// functions are callable, repeatable code

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

//imposter syndrome. learning from mistakes is important. seek others' input.