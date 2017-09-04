/*

ecma script 2015 or ES6

New features below:

1.Variable declarations with let and const

variables declared with VAR in ES5 are function scoped and LET and CONST are block scoped

Function scoped: within the curly braces of the function you have access to vars within the same functions

Block Scoped: is all the code between the curly braces like if statements for blocks while blocks etc

2. Blocks and IIFEs

new way of creating IIFES using the concepts of block scoped a block can also be a curly brace

3. Strings : Template literals



4.Arrow Functions


Arrow functions : lexical THIS keyword biggest advantage is that they share the surrounding this keyword. Unlike normal functions arrow function don't get their own THIS keyword. They simply use
the this keyword of the function they are written in. So we say they have a LEXICAL THIS variable

5.Destructuring
6.Arrays
7. The spread operator
8. Rest & Default Parameters
9. Maps
10.Classes and subclasses
11. How to use ES6 Today










*/

// // 1. ES5


// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = ' Jane Miller';

// console.log(name5);

// // ES6 LET is for values that you want to mutate or change and const is for constant values

// const name6 = 'Jane Smith';
// let age6 = 23;
// // name6 = 'Jane Miller'; cant mutate the const

// console.log(name6);


// //Function scoped: ES5


// function driversLicence5(passedTest) {

//     if (passedTest) {

//         console.log(firstName); // undefined as all vars are hoisted and set to undefined until the script is read
//         var firstName = 'John';
//         var yearOfBirth = 1990;

//     }

//     console.log(firstName + ' born in ' + yearOfBirth + ' and is now officially allowed to drive a car'); // this works because you can console log outside if statement and within the same function
// }

// driversLicence5(true);

// //Block Scoped: ES6


// function driversLicence6(passedTest) {

//     //console.log(firstName); // this doesn't work at all can't use variable until it's declared due to temperal debt zone basically variables are hoisted but we still can't acess them until its declared.

//     let firstName;
//     const yearOfBirth = 1990; // have to declare let outside of if block so you can console.log outside of if block and have to declare name and value const outside of block to console.log outside

//     if (passedTest) {

//         firstName = 'John';

//     }

//     console.log(firstName + ' born in ' + yearOfBirth + ' and is now officially allowed to drive a car');

// }

// driversLicence6(true);


// let i = 23;

// for (let i = 0; i < 5; i++) { // console.logs for loop I because its block scoped but also logs the I above
//     console.log(i);
// }




// //2. new way of creating IIFES using the concepts of block scoped a block can also be a curly brace



// { // this is an IIFFE very simple one

//     const a = 1;
//     letb = 2;
//     var c = 3;
// }

// //console.log(a + b); // creates error because variables are block scoped and not accessible from the outside
// console.log(c); // this is function scoped

// // es5  IIFFE

// (function() {
//     var c = 3;
// })();

// console.log(c); // not accessible from outside the ES5 IIFFE


// //3. Strings

// let firsNameString = 'John';
// let lastNameString = 'Smith';
// const yearOfBirth = 1990;

// function calcAge(year) {

//     return 2016 - year;

// }

// //ES5

// console.log('This is ' + firsNameString + ' ' + lastNameString + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');




// //ES6 Template literals
// console.log(`This is ${firsNameString} ${lastNameString}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} year old.`); // use backspace to open a template literals


// // new string methods

// const n = `${firsNameString} ${lastNameString}`;


// console.log(n.startsWith('J')); // logs true
// console.log(n.endsWith('th')); // logs true
// console.log(n.includes(' ')); // includes a space logs true
// console.log(`${firsNameString} `.repeat(5)); // repeats 5 times





// //4. Arrow Functions


// const years = [1990, 1965, 1982, 1937];



// //es5

// var ages5 = years.map(function(el) {

//     return 2016 - el;

// });

// console.log(ages5);


// // ES6

// let ages6 = years.map(el => 2016 - el); // this is the same as ES5 above simplest method

// console.log(ages6);

// let ages7 = years.map((el, index) => ` Age Element ${index + 1}: ${2016 - el}.`); // two arguments have to be wrapped in brackets with no return

// console.log(ages7);

// let ages8 = years.map((el, index) => { // if we add more lines of code we need to have a return statement
//     const now = new Date().getFullYear();
//     const age = now - el;
//     return ` Age Element ${index + 1}: ${age}.`;
// });
// console.log(ages8);







// //4. Arrow Functions 2



// // Arrow functions : lexical THIS keyword biggest advantage is that they share the surrounding this keyword. Unlike normal functions arrow function don't get their own THIS keyword. They simply use
// // the this keyword of the function they are written in. So we say they have a LEXICAL THIS variable


// //ES5

// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//         var self = this; // work around to have acess to box 5 object
//         document.querySelector('.green').addEventListener('click', function() { // this is a function attached to the method click me so this points to the window object
//             var str = ' This is box number ' + self.position + ' and it is ' + self.color;
//             alert(str);
//         });
//     }
// };
// //box5.clickMe();



// //ES6

// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//         // arrow function shares the lexical this keyword of its method always use arrow functions when you need to preserve the value of the THIS keyword
//         document.querySelector('.green').addEventListener('click', () => { // this is a function attached to the method click me so this points to the window object
//             var str = ' This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         });
//     }
// };
// //box6.clickMe();



// // // //be careful of changing the way THIS work
// // const box7 = {
// //     color: 'green',
// //     position: 1,
// //     clickMe: () => { // this does not work as it share the lexical scoping of its surroundings so the global THIS object
// // // arrow function shares the lexical this keyword of its method always use arrow functions when you need to preserve the value of the THIS keyword
// //         document.querySelector('.green').addEventListener('click',() => { // this is a function attached to the method click me so this points to the window object
// //             var str = ' This is box number ' + this.position + ' and it is ' + this.color;
// //             alert(str);
// //         });
// //     }
// // };
// // box7.clickMe();



// function Person(name) {
//     this.name = name;

// }

// //ES5
// Person.prototype.myFriends5 =
//     function(friends) {
//         // we have acess to person object THIS in here
//         var arr = friends.map(function(el) {
//             // but we don't have acess here due to scope so it points to the global object
//             return this.name + ' is friends ' + el;
//         }.bind(this)); // we have access her to this so we bind this to the function pass it to this function by creating new copy with this associated to it


//         console.log(arr);

//     };

// var friends = ['bob', 'jane', 'tom'];

// new Person('John').myFriends5(friends);


// //ES6


// Person.prototype.myFriends6 =
//     function(friends) {
//         // we have acess to person object THIS in here
//         var arr = friends.map(el =>
//            `${this.name} is friends with ${el};`);
//          // we have access her to this so we bind this to the function pass it to this function by creating new copy with this associated to it


//         console.log(arr);

//     };




// new Person('Robert').myFriends6(friends);



//4. Destructuring gives us an easy way to extract data from a data structure like an object or an array



//ES5

// var john = ['John', 26 ];

// var name = john[0];

// var age = john[1];


//ES6 destructure a data structure

// //Array
// const [name,age] = ['john', 26];
// console.log(name);
// console.log(age);

// const obj = {
//     firstName: 'John',
//     lastName: 'Smith'
// };

// const {firstName,lastName} = obj;

// console.log(firstName);
// console.log(lastName);

// const {firstName: a, lastName:b} = obj;

// console.log(a);
// console.log(b);

// function calcAgeRetirement(year) { // good use of destructureing
//     const age2 = new Date().getFullYear() - year;
//     return [age2,65 - age2];
// }


// const [age2,retirement] = calcAgeRetirement(1990);
// console.log(age2);
// console.log(retirement);




// //ES6 arrays new methods and loops



// const boxes = document.querySelectorAll('.box'); // returns node list

// //ES5

// var boxesArr5 = Array.prototype.slice.call(boxes); // converts boxes to an array allows us to use array methods

// console.log(boxes);

// console.log(boxesArr5);

// boxesArr5.forEach( function(element) {
//     element.style.backgroundColor = 'dodgerblue';
// });


// //ES6

// const boxesArr6 = Array.from(boxes); // simply transforms a node list to array

// Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');



// loop over array

//es5

// for (var i = 0; i < boxesArr5.length; i++) {
//  if (boxesArr5[i].className ==='box blue') {
//     continue; // this means that skip one step and go to next one
//  }

//  boxesArr5[i].textContent = 'i changed to blue';
// }


//ES6 the for of combines the parts of for each and for loop


// for (const cur of boxesArr6) {
//     if (cur.className.includes('blue')) {
//         continue; // break stops the loops
//     }
//     cur.textContent = 'I changed to blue!';
// }

// // ES5


// var ages = [12,17,8,21,14,11];

// var full = ages.map(function(cur){
//     return cur >= 18;
// });

// console.log(full);
// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);



// //ES6 FindIndex and Find methods of arrays


// // FindIndex pass a callback function and then its going to return the index of the array of the callback function returns true

// console.log(ages.findIndex(cur => cur >= 18)); // return the index for the element that returns true

// console.log(ages.find(cur => cur >= 18)); // find and return the value of the element from the array based on the conditional statement.






//4. The spread operator very convenient way to expand elements of array in function calls and arguments



// function addFourAges (a,b,c,d) {
//     return a + b + c + d;
// }

// var sum1 = addFourAges(18,38,12,21);

// console.log(sum1);

// //ES5

// var ages = [18,38,12,21];


// var sum2 = addFourAges.apply(null, ages); // apply allows us to use the ages array as the arguments in the fourages function

// console.log(sum2);

// //ES6

// const sum3 = addFourAges(...ages); // spread operator ... allows us to use the values of an array as an argument it expands the array
// console.log(sum3);



// const familyAdam = ['John', 'Bob', 'Tom'];

// const familySam = ['Rupert', 'Adam', 'Miles'];

// const bigFamily = [...familyAdam, 'lily', ...familySam];

// console.log(bigFamily);


// //can use on a node list too

// const head = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');
// const all = [head, ...boxes];


// console.log(head);
// console.log(boxes);
// console.log(all);


// Array.from(all).forEach(cur => cur.style.color = 'purple');

// console.log(all);



// //Rest Parameters allow us to pass a number of arguments into a function they use the same notation as spread operator but they are completely opposite. Spread operator takes an array and transforms it into single values. While rest parameters takes in single values and transforms it into an array when we call a function with multiple parameters.

//The spread operator is used in the function call whereas the rest parameter is used in the function declaration



//ES5

// function isFullAge5(limit) { // if we want to receive undefined number of arguments we don't put parameters and just use arguments
//     // console.log(arguments); // special variable we have acess to inside functions

//     var argsArr = Array.prototype.slice.call(arguments, 1); //passing in as many arguments as we want converts arguments to an array allows us to slice the parameter above from the array to remove it from the function call

//     console.log(argsArr);


//     argsArr.forEach(function(cur){
//         console.log((2016- cur) >= limit);
//     });
// }


// isFullAge5(21,1990,1999,1965,2005,1943); // would work with 100 arguments or more






//ES6

// function isFullAge6(limit, ...years) { // rest parameter transforms years into an array and allows us to pass in parameters easier
//     // console.log(years);

//     years.forEach(cur => console.log(( 2016 - cur ) >= limit));
// }

// isFullAge6(14, 1990,1999,1965,2005,1943);



//default parameters: we use them when we want one or more parameters of a function to be preset so we want them to have a default values



// //ES5


// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

// 	lastName === undefined ? lastName = ' Smith': lastName = lastName // if lastName undefined change to smith as a default parameter
// 	nationality === undefined ? nationality = 'British': nationality = nationality; // if nationality undefined change to british as a default parameter

// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.yearOfBirth = yearOfBirth;
// 	this.nationality = nationality;

// }

// //es6


// function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'Welsh') { // call default parameters in the declaration

// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.yearOfBirth = yearOfBirth;
// 	this.nationality = nationality;

// 	}

// 	var john = new SmithPerson('John', 1990); // only called 2 property because we used 2 parameters

// 	console.log(john);

// 	var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');

// 	console.log(emily);



// // MAPS JS objects can be used as hash map we match string keys to arbitrary values. we mapped values to them but we mapped objects we were limited to strings . But now we use maps and can attach any primitive value to them strings numbers booleans and functions or objects as keys.

// // you can iterate through maps but you can't through objects for each method is in the prototype function of the map function constructor maps inherit that method and can use it
// //ES5

// const question = new Map();

// question.set('question', 'What is the offical name of the leatest major javascript version?'); // key, value
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
// question.set(true, 'correct answer');
// question.set(false, 'Wrong');

// // console.log(question);



// console.log(question.get('question')); // get the key
// // console.log(question.size); // gets the size
// console.log(question.delete(4)); // get the key
// // question.clear(); //clear everything


// if (question.has(3)) {
// 	console.log('question 3 is here '); // get the key and delete
// }

// console.log(question);

// question.forEach((value,key) => console.log(`this is ${key}, and its set to ${value}`)); //acrss to current el key and map looping throughing a map

//also use forOF loop

// for (let [key,value] of question.entries()) { //returns all entries of our questons map this is destructuring entires method reutns all the key values pair allowing us to store keys and values in two seperate variables
// console.log(`this is ${key}, and its set to ${value}`);
// }


// for (let [key,value] of question.entries()) { // only want to print the questions if there certain data type

// 	if (typeof(key) === 'number' ) { // if key is a number

// 		console.log(`Answer ${key}: ${value}`);

// 		}
// }


// const answer = parseInt(prompt('Write the correct answer')); // could write if else if it was an object but a map allows us to shorten code to below
// console.log(question.get(answer ===
// question.get('correct'))); // if anwswer true get string for true if false it will auto get false string




//maps are better because we can use anything as keys and maps are iterable so they are easy to loop through and manipulate data with them and then its also good to get the size of the map really easy with the method and the remove the method so all choose a map if we want to a hash map



//classes are synthetic sugar over the way we implement inheritance and allow us to create object ES5 are function constructors and we added a methods to their prototype property in order to make all the instanced created through the function constructor inherit they methods
//stactic method are attach to the class but not inherited by object instances

//ES5

// var Person5 = function Person(name, yearOfBirth, job) { //written as function expression

// 	this.name = name;
// 	this.yearOfBirth = yearOfBirth;
// 	this.job = job;

// };

// Person5.prototype.calcAge = function() { // make all instances inherit a calcage method
// 	var age = new date().getFullYear - this.yearOfBirth;

// };

// var john5 = new Person5('john', 1990, 'teacher');




//ES6

// class Person6 //class deceleration this is an object we attach methods to an object there not hoisted so you can only use classes after they have been declared.Second we can only add methods to classes and not property

// {
// 	constructor(name,yearOfBirth,job) { //creates a constructor
// 		this.name = name;
// 		this.yearOfBirth = yearOfBirth;
// 		this.job = job;
// 	}

// 	calcage() { //adds method which is inherited when a new instance is called
// 		var age = new date().getFullYear(); - this.yearOfBirth;
// 	}
// 	static greeting() { //can only call this method in the script as it's attached to the class definition

// 		console.log('Hey there');
// 	}
// }


// const john6  = new Person6('john', 1990,'teacher');

// Person6.greeting();


//implementing inheritance from one class to another: Classes with subclasses

//person constructor and athlete subclass which inherits from the person subclass


//super class

// var Person5 = function Person(name, yearOfBirth, job) { //written as function expression

// 	this.name = name;
// 	this.yearOfBirth = yearOfBirth;
// 	this.job = job;

// };

// Person5.prototype.calcAge = function() { // make all instances inherit a calcage method
// 	var age = new Date().getFullYear() - this.yearOfBirth;
// 	console.log(age);

// };

// var john5 = new Person5('john', 1990, 'teacher');

// var Athlete5 = function(name, yearOfBirth, job, olympicGamesAttended, medalHaul) {

// 	Person5.call(this, name, yearOfBirth, job); // sets this to athlete when new athlete is called
// 	this.olympicGamesAttended = olympicGamesAttended;
// 	this.medalHaul = medalHaul;

// };

// Athlete5.prototype = Object.create(Person5.prototype); //shares prototype between the both essentially connects two function constructors ES5 way

// //object.create allows us to manual set the prototype of object and we want prototype of athlete to be prototype of person so they become connected.

// //set methods on prototype of athlete 5

// Athlete5.prototype.wonMedal = function() {

// 	this.medalHaul++; // increase by 1
// 	console.log(this.medalHaul);

// };

// var johnAthlete5 = new Athlete5('john', 1990, 'swimmer', 3 , 10);

// johnAthlete5.calcAge(); // works as all instances of person can inherit this method and all instances of athlete person 5 is super class and
// johnAthlete5.wonMedal();








// //ES6: prototype inheritance

// class Person7

// {
// 	constructor(name,yearOfBirth,job) { //creates a constructor
// 		this.name = name;
// 		this.yearOfBirth = yearOfBirth;
// 		this.job = job;
// 	}

// 	calcage() { //adds method which is inherited when a new instance is called
// 		var age = new Date().getFullYear() - this.yearOfBirth;
// 		console.log(age);
// 	}
// }

// class Athlete6 extends Person7 {
// 	constructor(name,yearOfBirth,job,olympicGamesAttended,medalHaul) {
// 		super(name,yearOfBirth,job)// call super class person function constructor
// 		this.olympicGamesAttended = olympicGamesAttended; // adds athlete constructors
// 		this.medalHaul = medalHaul;
// 	}

// 	wonMedal() {
// 		this.medalHaul++;
// 		console.log(this.medalHaul);
// 	}
// }

// var johnAthlete6 = new Athlete6('john', 1990, 'swimmer', 3 , 10);

// johnAthlete6.calcage(); // works as all instances of person can inherit this method and all instances of athlete person 5 is super class and
// johnAthlete6.wonMedal();





//
class Element { //superClass
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numberOfTrees) { // property's of park
        super(name, buildYear)
        this.area = area; // KM2
        this.numberOfTrees = numberOfTrees;
    }
    treeDensity() {
        const density = this.numberOfTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square KM`); // normally you would return this statement
    }
}


class Street extends Element {
    constructor(name, buildYear, length, size = 3) { // size auto's to 3 unless specified
            super(name, buildYear);
            this.length = length;
            this.size = size;
        }
        //data model defined
    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, was built in ${this.buildYear} and is a ${classification.get(this.size)} street`)
    }
}

//create some objects this create the objects of the park
const allParks = [new Park('green park', 1987, 0.2, 215), new Park('red park', 1894, 2.9, 3005), new Park('blue park', 1953, 0.4, 949)];

const allStreets = [new Street('street1', 1999, 1.1, 4), new Street('street2', 1800, 2.2, 1), new Street('street3', 1850, 3.3, 5), new Street('street4', 1875, 4.4)];

//write one function for each report and pass in our data in each function


function calcArray(array) {

    const sum = array.reduce((prev, cur, index) => prev + cur, 0); //callback function access to cur val index and previous val reduce combines all figures on an array into one number

    return [sum, sum / array.length];
}

function reportParks(parksArray) {



    console.log('----------parks report---------------------');

    //density each park object call tree density method loop through
    parksArray.forEach(el => el.treeDensity()); // loop through each park object and run tree density
    //average park age external function to calc avearge and total for any array thats passed into it reusable
    const ages = parksArray.map(el => new Date().getFullYear() - el.buildYear); //loop through all current elements of park array and calculate age
    const [totalAge, averageAge] = calcArray(ages); // destructing

    console.log(`Our ${parksArray.length} parks have an average of ${averageAge}`);

    //which park has more than 1000 trees getIndex find index of an array element which satisfy our callback function

    const index = parksArray.map(el => el.numberOfTrees).findIndex(el => el >= 1000) //get all number of tree into an array return an array and do find index
    console.log(`${parksArray[index].name} has more than 1000 trees`);
}

function reportStreets(streetsArrays) {


    console.log('----------Streets report---------------------');

    //Total and average length of town's streets
    const [totalLength, avgLength] = calcArray(streetsArrays.map(el => el.length));
    console.log(`Our ${streetsArrays.length} streets jabe a total length of ${totalLength} km, with an average street length of ${avgLength}`)
        //classify sizes

    streetsArrays.forEach(el => el.classifyStreet());
}



reportParks(allParks);
reportStreets(allStreets);
