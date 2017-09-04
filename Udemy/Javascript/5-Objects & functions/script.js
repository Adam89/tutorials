/* This section will talk about everything being an object inheritance and the prototype chain*/

//Everything is an object

// primitives : numbers , strings , booleans , undefined , null
// Everything else : arrays, functions, objects, dates, wrappers for numbers, strings, booleans IS AN OBJECT

/*

OOP Objects interact with one another through methods and properties
    used to store data, structure applications into modules and keeping clean code

    constructor or prototype : this allows us to create as many objects as we want objects being instances of the person object

    person {
    name:
    yearOfBirth:
    job
    calculateAge()
    }

    inheritance: is when one object is based on another when one object gets access to another objects method and property's Athlete gets all of persons properties and method plus it's own

    athlete {
    olympics:
    olympicMedals:
    allowedOlympics()

    }

    allows us to write less code and make more logical programs
    inheritance works by using prototypes each and every object in JS has a prototype property which
    makes inheritance possible

    each and every object we create is an instance of the object constructor which has a bunch of methods in its prototype property the person object and instance of person object inherit the man object constructors methods and property's (This is prototype chain this make inheritance possible)

    Summary:

    Every JS object has a prototype property which makes inheritance possible in JS

    The prototype property of an object is where we put methods and properties that we want other objects to inherit

    The constructor's prototype property is NOT the prototype of the constructor itself, its the prototype of ALL instances that are created through it

    when a certain method or property is called, the search starts in the object itself, and if it cannot be found, the search moves on to the objects prototype. This continues until the method is found: prototype chain
*/


//lecture 1 : function constructor

// lecture 2: the prototype chain in the console

// lecture 3: creating objects that inherit from a prototype using object.create method

// lecture 4: primitives vs objects

// lecture 5: first class functions: passing functions as arguments

// lecture 6: first class functions: functions returning functions: create a function that returns different interview questions based on jobs

// lecture 7: immediately invoked function expressions (IIFE)

// lecture 8: closures

// lecture 9: bind , call and apply methods


// var john = { // orginal object
//     name: 'john',
//     yearOfBirth: 1998,
//     job: 'teacher'
// };

// function constructors always start with capitals person function constructor is an instance of the object function constructor
// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// };

// Person.prototype.calculateAge =
//     function() {
//        return 2016 - this.yearOfBirth;
//     };
// //prototype property of our function constructor

// Person.prototype.lastName = 'Smith'; // attaches smith to all instances of person

// var john = new Person('John', 1980, 'developer'); // this is how we create new objects using constructor function these objects are instances of the person object the term is instantiation
// console.log(john.calculateAge());

// //proto this is the prototype of john object is the prototype property of person function constructor

// //proto within john object is the prototype type property of the object function constructor which has loads of methods

// John.hasOwnProperty('job'); // this evaluates to true as john inherits the property from the person prototype object

// John.hasOwnProperty('lastName'); // this evaluates to false as john inherits the property from the last name prototype object

// john instanceof Person // evaluates to true as he is an instance of the person function constructor

// var jane = new Person('Jane', 1965, 'Nurse');
// console.log(jane.calculateAge());

// var mark = new Person('Mark', 1978, 'designer');
// console.log(mark.calculateAge());

// var x = [2,4,6]; // array object

// console.info(x); // logs the array object and shows the prototype methods of the array function constructor they have acees to the methods because of the prototype chain and inheritance.



// lecture 3: creating objects that inherit from a prototype using object.create method


// first define the object that will act as the prototype then create the new object based on that very prototype

// instead of using function constructor we will use object.create

// var personProto = {

//     calculateAge: function() {
//         console.log(2016 - this.yearOfBirth);

//     }
// };



// var john = Object.create(personProto); // pass it the object that we define to be the prototype object
// john.name = 'john';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

//both objects share the same prototype

/* the difference between object.create and function constructor pattern is object.create build an object that inherits directly from the object we pass in the first argument and the function constructor the newly created object inherits from the constructors prototype property*/

//object.create allows us to implement complex inheritance structure than function constructor allows us to directly specify which objects should be a prototype.

// you can pass a second arguments which is the data/property's you want to specify in the object but its done in a weird way using value

// var jane = Object.create(personProto, {
//     name: { value: 'jane' },
//     yearOfBirth: { value: 1969 },
//     job: { value: 'teacher' },
// });



// lecture 4: primitives vs objects compare

// variables with primitives hold the data inside of the variable on objects variables associated with objects do not actually contain the object but they contain a reference in memory to where the object is stored just points

//all primitives below hold there own copy of the data they do not reference anything

// var a =23;
// var b = a;

// a = 46;

// console.log(a);

// console.log(b);

// // objects
// var obj1 = {
//  name: 'john',
//  age:26
// };

// var obj2 = obj1; // they both hold a reference which points to the exact same object. so when you change the age on obj1 is changes obj2 with function it works the exact same way
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);

// //functions

// var age = 27; // primitive
// var obj = {
//  name: 'adam',
//  city: 'lisbon',
// };

// function change (a,b) {
//  a = 30; // when you pass primitive into a function a copy is created does not mutate
//  b.city = 'london'; // obj variable holding a reference to the object we do not pass object into the function only the reference so when we mutate object within the function it is still reflected outside of the function
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city);

// lecture 5: first class functions: passing functions as arguments functions are also objects
/*
    A function is an instance of the object type;
    A function behaves like any other object;
    We can store functions in a variable;
    We can pass a function as an argument to another function
    we can return a function from a function

    because of all this we say we have first class functions

    what we have done
    created generic function ARRAYCALC which loops over the YEARS input array then we gave it a function as an input which is used calculate based on each element array. Then we create many different function to pass through the original function. More modular to split out each function.

    we can pass functions around like variables, we wrote cleaner reusable code.
*/


// var years = [1980, 1965, 1937, 1924, 1991];

// function arrayCalc(arr, func) {

//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(func(arr[i]));
//     }

//     return arrRes;
// }

// function calculateAge(el) { // el is the years array
//     return 2016 - el;
// }

// function isFullAge(el) {
//     return el >= 18;
// }

// function maxHeartRate(el) {

//     if (el >= 18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el)); //math.round returns The value of the given number rounded to the nearest integer.
//     } else {
//         return -1;
//     }
// }

// var ages = arrayCalc(years, calculateAge); // calc age is a callback function because its called after the for loop
// console.log(ages);

// var fullAges = arrayCalc(ages, isFullAge);

// console.log(fullAges);

// var hearts = arrayCalc(ages, maxHeartRate);

// console.log(hearts);

// lecture 6: first class functions: functions returning functions: create a function that returns different interview questions based on jobs


// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(
//                 name + ', can you plese explain what UX design is');
//         };
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log('what subject do you teach ' + name + '?');
//         };
//     } else {
//         return function(name) {
//             console.log('hello' + name + ', what do you do?');
//         };
//     }
// }

// var teacherQuestions = interviewQuestion('teacher'); // the main wrapper function passing a job
// var designerQuestions = interviewQuestion('designer');

// teacherQuestions('john'); // calls the inner specific function passing the name
// designerQuestions('Adam');
// interviewQuestion('teacher')('Tom'); // different way of calling the function as all calls read left to right


// // lecture 7: immediately invoked function expressions (IIFE) this is a pattern this is used to obtain data privacy within scope on variables


// // function Game() {
// //  var score = Math.random() * 10;
// //  console.log(score >= 5);
// // }
// // game();


// (function() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();

// (function(goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);


// // lecture 8: closures: An inner function always has access to the variables and parameters of its outer function even after the outer function has returned


// function retirementCheck(retirementAge) {
//     var a = ' years left until retirement';
//     return function(yearOfBirth) {
//         var age = 2016 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     };
// }

// var retirementUs = retirementCheck(66); // store the above function in this variable the inner function is able to use variables despite popping off the execution stack
// retirementUs(1990);
// retirementCheck(66)(1990); // different way of calling the same function above

// var retirementChina = retirementCheck(100);
// retirementChina(1960);


// var retirmentGermany = retirementCheck(70);
// retirmentGermany(1960);

// function interviewQuestionClosure(job) { // this is the function above but written in the closure format
//     return function(name) {
//         if (job === 'designer') {
//             console.log(
//                 name + ', can you plese explain what UX design is');
//         } else if (job === 'teacher') {

//             console.log('what subject do you teach ' + name + '?');
//         } else {
//             console.log('hello' + name + ', what do you do?');
//         }
//     };
// }


// interviewQuestionClosure('teacher')('bob closure');


// // lecture 9: bind , call and apply methods these methods are inherited from the function constructor object they allow us to call the function and set the this variable manually


// var john = {
//     name: 'john',
//     age: 26,
//     job: 'teacher',
//     presentation: function(style, timeOfDay) {
//         /* body... */
//         if (style === 'formal') {
//             console.log('good ' + timeOfDay + ', ladies and gentlemen! i\'m ' + this.name + ' i\'m a ' + this.job + ' and i\'m ' + this.age + ' years old');
//         } else if (style === 'friendly') {
//             console.log('hey what\'s up' + timeOfDay + ', ladies and gentlemen! i\'m ' + this.name + ' i\'m a' + this.job + ' and i\'m  ' + this.age + ' years old');
//         }
//     }
// };


// john.presentation('formal', 'morning');


// var emily = { // this object does not have presentation method
//     name: 'john',
//     age: 38,
//     job: 'designer',
// };

// john.presentation.call(emily, 'friendly', 'afternoon'); // this is called method borrowing as you have to set this var first which is emily so on presentation method this becomes emily

// // john.presentation.apply(emily, ['formal', 'afternoon']); // same way regarding this but just accepts array as second argument


// var johnFreindly = john.presentation.bind(john, 'friendly'); // first argument sets this bind returns a function thats is stored in john frinendly with one friendly argument

// johnFreindly('morning'); // time of day is set here for the john friendly var which has presentation method set to it.
// johnFreindly('night');

// // this is called Currying when we create a function based on another function but with some preset parameters

// var emilyFormal = john.presentation.bind(emily, 'formal');
// emilyFormal('afternoon');


// var years = [1980, 1965, 1937, 1924, 1998];

// function arrayCalc(arr, func) {

//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(func(arr[i]));
//     }

//     return arrRes;
// }

// function calculateAge(el) { // el is the years array
//     return 2016 - el;
// }

// function isFullAge(limit, el) {
//     return el >= limit;
// }

// var ages = arrayCalc(years, calculateAge); // calc age is a callback function because its called after the for loop

// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20)); // pre sent limit of 20 is passed into the arry calc function

// console.log(ages);
// console.log(fullJapan);


// // console.log(ages);

// // var fullAges = arrayCalc(ages, isFullAge);

// // console.log(fullAges);

// // var hearts = arrayCalc(ages, maxHeartRate);

// // console.log(hearts);




//coding challenge Quiz

/*build function constructor called question to describe question. A question should include the

A) question itself

B) the answers from which the player can choose the correct one (choose adequate data structure here array object etc)

C) correct answer (i would use a number for this)

2) create a couple of questions using the constructor

3. store them all inside an array

4. select one random question and log it on the console together with the possible answers (each question should have a number) hint: write a method for the questions object for this task

5. use the prompt function to ask user for correct answer. The user should input the number of the correct answer such as you displayed it on task 4

6 check if the answer is correct and print it to the console where the answer is correct or not (hint: write another method for this)

7. Suppose this code would be a plug-in for other programmers to use their code. so make sure that all your code is private and doesn't interfere with other peoples code. (hint we learned a special technique to do exactly that)


expert leval

8. after you display the result, display the next random question so that the game never ends (hint write a function for this and call it right after displaying result)


9. Be careful: after task 8 the game literally never ends. so include the option to quit the game if the user writes exit instead of answer. in this case don't call the function from task 8

10. Track the user's score to make the game more fun. so each time an answer is correct, add 1 point to the score (hint: im going to use the power of closures for this)

11. Display the score in the console. Use yet another method for this.
*/



// function(() { // Immediately invoked function changes scope and makes my game code below private great use case



    var Question = function(question, answers, correctAnswers) {
        this.question = question;
        this.answers = answers;
        this.correctAnswers = correctAnswers;
    };

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) { // loop through and display answers
            console.log(i + ':' + this.answers[i]);
        }
    }; //write method into question prototype property which is the prototype of all the instances created through the question object. The method attaches to prototype when q1 or q2 or q3 is called


    Question.prototype.checkAnswer = function(userAnswer, callBackScore) {

        var userScore;

        if (userAnswer === this.correctAnswers) {
            console.log('correct');
            userScore = callBackScore(true); // passes true to keep score variable function within closure diplay score below
            console.log(userScore);
        } else {
            console.log('wrong answer');

            userScore =  callBackScore(false); // passes false to keep score variable function within closure
             console.log(userScore);
        }

        this.displayScore(userScore); // can use this function because this refers to checkAnswer object which has access to display question in the prototype chain

    };

    Question.prototype.displayScore = function(score) { // new method that displays the score
        console.log('your current score is + ' + score);
        console.log('---------------------------------------------------');
    };

    var q1 = new Question('Is Javascript sexy', ['yes', 'no'], 0); // new creates empty object and calls question function constructor sets the this variable to the new empty object that was created and all these parameters are set on the this of the question function. new object stored in Q1 variable

    function nextQuestion() {

        var q2 = new Question('is adam sexy', ['yes', 'no'], 0);

        var q3 = new Question('what best descirbes adam', ['boring', 'absolute nutter', 'twat', 'legend'], 1);

        var questions = [q1, q2, q3];


        function score() { // everything related to the score is here in this closure
            var baseScore = 0; // sets user's base score
            return function(correct) { // function to increase score if answer is correct and returns boolean

                if (correct) {

                    baseScore++; // adds 1 to score
                }
                return baseScore;
            };
        }

        var keepScore = score(); // store returned function in this variable has access to score variable because of scope chain

        var number = Math.floor(Math.random() * questions.length);

        var chooseQuestionRandomly = questions[number]; // returns one question object but with answers and correct answers

        chooseQuestionRandomly.displayQuestion(); // displays one question but the displayQuestion method loops through answers

        var answer = prompt('please select the correct answer');


        if (answer !== 'exit') { // if answer is different to exit

            chooseQuestionRandomly.checkAnswer(parseInt(answer), keepScore); // use question we are working on then use check answer and pass in the user prompt input answer and add to score using closure function above

             nextQuestion(); // calls the next question
        }

    }

    nextQuestion();


// })();

