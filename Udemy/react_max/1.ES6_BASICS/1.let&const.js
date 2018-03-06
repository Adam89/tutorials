/* 

-------------------------------------------------------------------------
LET AND CONST
-------------------------------------------------------------------------

let and const are new variables. 

let: is the new var it can be mutated

const: cannot be mutated. Use it for constant variables


-------------------------------------------------------------------------
Arrow Functions
-------------------------------------------------------------------------

no arguments needs an empty pair of parenthese
1 argument does not need paretheses const function = name => { console.lot(name)}
more than 1 arg needs parenthese

if you just return a statement and have no other code in the body you can write a shorthand method you can omit parenthese for one parameter and also omit curly braces

const multiplyNumbers = number => number * 2; multiplyNumbers(100);


-------------------------------------------------------------------------
EXPORT AMD IMPORT STATEMENTS
-------------------------------------------------------------------------
any exports with default set can be imported using any name because the default is associated to the name
any exports not with defaul have to be imported using the name of the function or variable
you can also import all data using import * bundles from ' ' this returns an object allowing you to use bundled.whatever

-------------------------------------------------------------------------
CLASSES
-------------------------------------------------------------------------
A blueprint for javascript objects like a constructor function. They can have propertys and methods. They support inheritance like a prototype.If you extend another class you  need to add super the orginal consturcor so it runs the parent constructor. Classes is on way react uses to create components.

HOW:

class Person {
    name = 'Adam'
    myCalculateMethod = () => { }
}

Use:
Const myPerson = new Person()
myPerson.myCalculateMethod()
console.log(myPerson.name)

Inheritance:

class Human {
    constructor() {
    this.gender = 'Male';
}
 printGender = () => {
     console.log(this.gender);
    }
}


class PersonTwo extends Human {
    constructor() {
    super();
    this.name = 'Adam Two'
}
 printMyName = () => {
     console.log(this.name);
    }
}

Use:
Const myPerson = new PersonTwo()
myPerson.printMyName();
myPerson.printGender

-------------------------------------------------------------------------
CLASSES, Properties and methods
-------------------------------------------------------------------------
ES6 Implements a more modern way of writing classes
Properties of a class are like variables attached to classes/objects.
Methods of a class are like functions attached to classes/objects.


class Human {
    gender = 'Male';
 printGender = () => {
     console.log(this.gender);
    }
}

class PersonTwo extends Human {
    name = 'Adam Three',
    gender = 'female';
}
 printMyName = () => {
     console.log(this.name);
    }
}

Use:
Const myPerson = new PersonTwo()
myPerson.printMyName();
myPerson.printGender

-------------------------------------------------------------------------
Spread and Rest Operator ...
-------------------------------------------------------------------------

Spread: use to split up array elements or object properties const newArray = [...oldArray, 1,2] const newObject = {...oldObject, newKeyValue: 'test'}. objects get overitten by the property coming in

Rest: Use to merge a list of function arguments into an array 

function sortArgs(..args) { // takes in multiple args merges then and returns the arg
    return args.sort()
}

-------------------------------------------------------------------------
Destructuring
-------------------------------------------------------------------------

Easily extract array elements or object properties and store them in variables
Allows us to pull out single elments and properties and store them in variables for array or objects,

[a,b] = ['Hello', 'Adam']
console.log(a) // Hello
console.log(b) // Adam

{name} = {name: 'Adam', age:28 }
console.log(name) // Adam
console.log(age) // Undefined
*/
