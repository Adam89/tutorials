    ///////////////////////////////////////
    // Lecture: function Hoisting



    // calculateAge(1967); // can call the function anywhere in the script because of the execution context;

    // function calculateAge(year) {
    //     console.log(2016-year);
    // }

    // retirement(1990); // this does not work as function hoisting only works on decelerations ^^ not expressions below

    // var retirement = function(year) {
    //     console.log(65 - (2016-year));
    // };


    // variable hoisting
    // console.log(age); // this does not work as all variables are set to undefined in the creation stage
    // var age = 23;


    // function foo() {
    //     var age = 478; // this is defined in the execution context object of foo rather than globally
    //     console.log(age); // 478
    // }
    // foo();
    // console.log(age); // 23 this is stored in global execution context object


    ///////////////////////////////////////
    // Lecture: Scoping




    // First scoping example


    // var a = 'Hello!';
    // first();

    // function first() {
    //     var b = 'Hi!';
    //     second();

    //     function second() {
    //             // console.log(this);
    //         var c = 'Hey!';
    //         console.log(a + b + c);
    //     }
    // }

    // answer = Hello!Hi!Hey!



    // Example to show the difference between execution stack and scope chain

    /*
    var a = 'Hello!';
    first();

    function first() {
        var b = 'Hi!';
        second();

        function second() {
            var c = 'Hey!';
            third();
        }
    }

    function third() {
        var d = 'John';
        console.log(a + b + c + d);
    }

    answer = b and c not defined
    */



    ///////////////////////////////////////
    // Lecture: The this keyword

    console.log(this); // calls the window

    function calculateAge(year) {
        console.log(2016 - year);
        console.log(this); // still logs the window as this is a regular function call not a method the function is attached to the global window object
    }
    calculateAge(1985);




    var john = {
        name: 'john',
        yearOfBirth: 1968,
        calculateAge: function() {
            // console.log(2016 - year);
            console.log(this); // refers to the object that called the calculateAge method logs mike below also with method borrowing

            console.log(2016 - this.yearOfBirth);

            // function innerFunction() {
            //     console.log(this); // log with window because its a regular function call and not a method of the object
            // }
            // innerFunction();
        }

    };

    john.calculateAge();


    var mike = {
        name: 'mike',
        yearOfBirth: 1984,
    };

    mike.calculateAge = john.calculateAge; // method borrowing
    mike.calculateAge();
