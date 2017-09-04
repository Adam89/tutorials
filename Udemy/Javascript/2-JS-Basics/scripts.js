
/* Lecture: 1 Data type


var name = 'john';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var wob = 

console.log(wob);

var fullAge = true;
console.log(fullAge);

*/

// Lecture 2: Variables 2 type corercision javascript figures out variables on the fly
//variable mutation change the value of a variable from a string to number

// var name = 'John';
// var age = 26;

// console.log(name + ' ' + age);
// console.log(age + age + age);

// var job, isMarried;

// console.log(job);

// job = 'teacher';
// isMarried = true;


// console.log(job);

// console.log(isMarried);

// console.log(name + ' is a ' + age + ' years old ' + job + ' is he married? ' + isMarried + '.');

// age = 'thirty six';
// job = ' driver';

// console.log(name + ' is a ' + age + ' years old ' + job + ' is he married? ' + isMarried + '.');


//Lecture 3: operators & precedence


// var currentYear = 2017;
// var birthYear = currentYear - 26;

// birthYear = currentYear - 26 * 2;
// //2017 - 52

// console.log(birthYear);

// var ageJohn = 30;
// var ageMark = 30;

// ageJohn = ageMark = (3 + 5) * 4 - 6; // brackets changes the precedence of operators right to left to left to right

// ageJohn++; // adds 1 to ageJohn
// ageMark *= 2; // times mark age by 2
// console.log(ageJohn);
// console.log(ageMark);

//Lecture 4: IF / ELSE

// == type coercesion
// === does not
// var name ='john';
// var age = 26;
// var isMarried = 'yes';

// if (isMarried === 'yes') {
// 	console.log(name + ' is married');
// }
// else {
// 	console.log(name + ' will marry soon');
// }

// isMarried = false; 

// if (isMarried) {
// 	console.log('yes');
// } else {
// 	console.log('no');
// }

// if (23 == "23") { // same data type using type coercesion 
// 	console.log('test1');
// }

// if (23 === "23") { // does not print because condition is false
// 	console.log('test');
// }


//Lecture 4: boolean logic & switch statements

/* AND && both need to be true for overall logic to be true , 
OR || only 1 needs to be true for overall logic to equal true ,
 NOT (!) inverts true or false */

// var age = 20;

// if (age < 20) {
//     console.log('john is a teenager');
// } else if (age >= 20 && age < 30) {
//     console.log('john is a young man');
// } else {
//     console.log('john is a man');
// }

// var job = 'teacher';

// // job = prompt('what does john do as a job');

// switch (job) {
//     case 'teacher':
//         // statements_1
//         console.log('john teaches kids');
//         break;
//     case 'driver':
//         console.log('john drives a cab');
//         break;
//     case 'cop':
//         console.log('john helps fight crime');
//         break;
//     default:
//         // statements_def
//         console.log('john is a cunt');
//         break;
// }


/* coding challenge */

// var johnHeight = 60;
// var adamHeight = 60;
// var johnAge = 60;
// var adamAge = 60;

// var scoreJohn = johnHeight + 5 * johnAge;
// var scoreAdam = adamHeight + 5 * adamAge;

// if (scoreJohn > scoreAdam ) {
// 	console.log('John wins the game with ' + scoreJohn + ' points' );
// }
// else if (scoreAdam > scoreJohn ) {
// 	console.log('adam wins the game with '  + scoreJohn + ' points');
// }
// else if (scoreJohn === scoreAdam){
// 	console.log('there is a draw');
// }

// var tomHeight = 60;
// var tomAge = 60;
// var scoreTom = tomHeight + 5 * tomAge;

// if (scoreJohn > scoreAdam && scoreJohn > scoreTom) {
// 	console.log('John wins the game with ' + scoreJohn + ' points' );
// }
// else if (scoreAdam > scoreJohn && scoreAdam > scoreTom) {
// 	console.log('adam wins the game with '  + scoreJohn + ' points');
// }
// else if (scoreTom > scoreAdam && scoreTom > scoreJohn) {
// 	console.log('tom wins the game with '  + scoreTom + ' points');
// } else {
// 	console.log('It\'s a draw');
// }




/* Lecture 5 functions function statments performs action but does not produce immediate value */ 


// function calculateAge(yearOfBirth) {
//     var age = 2016 - yearOfBirth;
//     return age;
// }

// var ageJohn = calculateAge(1990);
// var ageMile = calculateAge(1969);
// console.log(ageJohn);


// function yearsUntilRetirment(name, year) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;
//     if (retirement >= 0) {
//     console.log(name + ' retires in ' + retirement + ' years.');
//     } else {
//     console.log(name + ' has already retired');
// 	}
// }

// yearsUntilRetirment('john', 1990);
// yearsUntilRetirment('mike', 1969);
// yearsUntilRetirment('tom', 1948);



/* Lecture 5 functions function expressions produces immediate value */ 

// var someFun = function(par) {

// };


/* Lecture 6 arrays */ 


// var namesArray = ['john', 'james', 'mark'];
// var years = new Array (1990,1969,1948);

// console.log(namesArray[0]);

// namesArray[1] = 'bob';

// console.log(namesArray[1]);


// var john = ['john', 'smith', 1998, 'teacher', true];

// john.push('blue');  // method that adds data type to end of the array */  

// john.unshift('mr');// method that adds data type to start of the array */  

// john.pop();  // method that removes data type from end of the array and returns the value */  

// john.shift();// method that removes data type from start of the array and returns the value */  

// console.log(john);

// var johnTest = john.indexOf('smith'); // method that identify's position of data type in the array and returns a value to use value you need to store it in an array or append it to the dom */  

// console.log(johnTest);


// if (john.indexOf('teacher') === -1); { //if data type is not in the array the value returned is always -1 */  
//     console.log('john is not a teacher');

// }

/* Lecture 7 objects group different variables that have no particular order */ 

// var john = {

// 	name: 'john',
// 	lastName: 'smith',
// 	yearOfBirth: 1990,
// 	job: 'teacher',
// 	isMarried: false
// };

// console.log(john.lastName);
// console.log(john['yearOfBirth']);


// var xyz='job';
// console.log(john[xyz]);

// john.lastName = 'miller'; // data type mutation
// john['job'] = 'programmer';

// console.log(john.lastName);
// console.log(john.job);



// var jane = new Object(); //different way to create object

// jane.name = 'jane';
// jane.lastName = 'smith';
// jane['yearOfBirth'] = 1969;
// jane['job'] = 'retired';
// jane['isMarried'] = true;

// console.log(jane);


/* Lecture 8 objects and methods */

/* version 1
var john = {

	name: 'john',
	lastName: 'smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	family: ['jane', 'mark','rupert'],
	calculateAge: function() {
		return 2016 - this.yearOfBirth; // this refers to the object john
	}
	// 	calculateAge: function(yearOfBirth) {
	// 	return 2016 - this.yearOfBirth; // this refers to the object
	// }

};
*/
// console.log(john.calculateAge(1970));
// console.log(john.calculateAge());

// var age = john.calculateAge();
// john.age = age;

// console.log(john);


// var john = {

// 	name: 'john',
// 	lastName: 'smith',
// 	yearOfBirth: 1990,
// 	job: 'teacher',
// 	isMarried: false,
// 	family: ['jane', 'mark','rupert'],
// 	calculateAge: function() {
// 		// return 2016 - this.yearOfBirth; // this refers to the object john
// 		this.age = 2016 - this.yearOfBirth;
// 	}


// };

// john.calculateAge();
// console.log(john);


/* Lecture loops a type of control structure */


// for (var i = 0; i < 10; i++) {
// 	console.log(i);
// }



// var names = ['john','Jane','Mark','Bob'];

//for loops
// for (var i = 0; i < names.length; i++) {
// 	console.log(names[i]); // forwards
// }

// for (var i = names.length - 1; i >= 0; i--) {
// 	console.log(names[i]); // backwards
// }

// // while loops 
// var i = 0;
// while(i < names.length) {
// console.log(names[i]);
// i++;
// }


// for (var i = 0; i<=5; i++) {

// 	if (i === 3) {
// 		continue;
// 	}
// 		console.log(i);
// }






/* coding challenge 2 */


// var years = [2001, 1999, 2003,2000,1973];
// var ages = [];

// for (var i = 0; i < years.length; i ++) {
// 	ages[i] = 2016 - years[i];
// 	console.log(ages[i]);

// }
//  for (var i = 0; i < ages.length; i ++) {
//  	if (ages[i] >= 18) {
//  		console.log('person ' + (i+1) + ' is ' + ages[i] + ' years old');
//  	} else {
//  		console.log('person ' + (i+1) + ' is ' + ages[i] + ' not old enough');
//  	}
//  }

var years = [2001, 1999, 2003, 2000, 1973];


function printFullAge(years) {
    var ages = [];
    var fullAges = [];
    for (var i = 0; i < years.length; i++) {
        ages[i] = 2016 - years[i];
        console.log(ages[i]);
    }
    for (i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log('person ' + (i + 1) + ' is ' + ages[i] + ' years old');
            fullAges.push(true);
        } else {
            console.log('person ' + (i + 1) + ' is ' + ages[i] + ' not old enough');
            fullAges.push(false);
        }
    }
    return fullAges;
}

var full_1 = printFullAge(years);
// var full_2 = printFullAge([2012,1915,1989]);






































































