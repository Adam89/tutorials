/* to do list
1. add event listener to the tick // MODULE: Controller goal to control the entire app and act as a link between the data and ui modules
2. Get input values // MODULE: UI
3. add the new item to your data structure // MODULE: Data
4. Add the new item to the UI // MODULE: UI
5. Calculate new top budget // MODULE: Data
6. Update the UI again // MODULE: UI


Structure

Modules:

Important aspect of any robust application's architecture is modules
Keeps the units of code for the project both cleanly separated and organized
Encapsulate some data into privacy and expose other data publicly
Modules allow us to break them into logical pieces and then interact with each other


lecture 1: implement the module pattern {

    How to use the module pattern
    More about private and public data, encapsulation and separation of concerns and how that
    relates to the module patterns

    data encapsulation allows us to hide specific module data from the outside scope only expose a public interface such as an api

    two modules is separate which is termed separation of concerns means each part of the application
    should only be interested on doing one thing independently

    wrote different modules with private and public variables created bare bones architecture of a simple application
}

lecture 2: Key press event listener and how to use event object

lecture 3: How to read data from different html input types

lecture 4: Creating init function how and why

lecture 5: Creating income and expense function constructors how to choose functions constructors that meet our apps needs and how to set up a proper data structure for our budget

lecture 6: adding new item to function controller. how to avoid conflict's in data structure and how and why to pass data from one module to another

lecture 7: add new items to ui, technique for adding big chunks of html to the dom, how to replace parts of the strings, how to do dom manipulation using insert adjacent html

lecture 8: clearing input vals: How to clear html fields, how to use query selector all, how to conver a list to an array, a better way to loop over arrays using foreach


lecture 9: updating budget controller, how to convert field inputs to numbers, How to prevent false inputs

lecture 10: updating budget controller, how and why to create simple reusable functions with only one purpose, how to sum all elements of an array using forEach method

lecture 11: updating the main budget UI using dom manipulation

lecture 12: Project planning architecture 2
        add delete event handler
        delete the item from our data structure
        delete the item from UI
        update UI

        event bubbling: that when an event is triggered on dom element it will fire up tree to all of the parent elements. Element that the event happed on is called the target element.This target element is stored as a property in the event object.

        Event delegation: is to not setup the event handler on the original element we are interested in but attach it to a parent element and catch the event there because it bubbles up from the dom. We can then target that element using the event.target

        Use cases

        when we have an element with lots of child elements that we are interested in
        when we want an event handler attached to an element that is not yet in the dom

        lecture 13: setting up event delegation in practice:
                    How to use ID's in HTML to connect UI with the data model
                    How to use parent node property for DOM traversing.

        lecture 14: yet another method to loop over array called map
                    How to remove elements from an array using the splice method

        lecture 15: Remove element from DOM

        lecture 16: app architecture round 3 updating percentages by reinforcing some already learned techniques

        lecture 17: how to make budget controller react with our expense prototype

        lecture 18: update the percentages UI Controller - how to create our own forEach function but for nodeLists instead of arrays

        lecture 19: formatting our budget numbers : string manipulation - use different string methods to manipulate strings (decimals, etc)

        lecture 20: Displaying the current month and year: How to get the current date by using the date object constructor

        lecture 21: Final UX touches: How and When to use change events

        lecture 22: Final app structure and considerations


*/

// var budgetController = (function() { // iffe to create first module

//  var x = 23;

//  var add = function(a) {
//      return x + a;
//  };

//  return {
//      publicTest: function(b) {
//          return add(b); // this function is accessible by outside scope
//      }
//  };

// })();



// var uiController = (function() {





// })();



// var appController = (function(budgetCtrl, UICtrl) { // going to pass the other two modules to this function better to do this incase we change names in other modules


// var z = budgetCtrl.publicTest(9);

// return {
//  anotherPublic: function() {
//      console.log(z);
//  }
// };


// })(budgetController, uiController);



var budgetController = (function() { // iffe to create first module

    var Exspense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1; // not defined so use -1
    };

    Exspense.prototype.calcPercentage = function(totalIncome) { // we need total income as base for percentage maths
        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = 1;
        }
    };

    Exspense.prototype.getPercentage = function() { //retrieve percentage from object one specific functions

        return this.percentage;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function(type) {

        var sum = 0;
        data.allItems[type].forEach(function(currentElement) {
            // statements
            sum += currentElement.value;
        });
        data.totals[type] = sum;
    };

    var data = { // data structure created as an object
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1 // cannot be a percentage if there is no values
    };




    return {
        addItem: function(type, des, val) {
            var newItem, ID;
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1; //create new id
            } else {
                ID = 0; // when array empty array number is 0
            }
            //create new item based on inc or exp
            if (type === 'exp') { // same as data structure

                newItem = new Exspense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            data.allItems[type].push(newItem); // allows to specify and push to correct data structure
            //return newElement
            return newItem;
        },


        deleteItem: function(type, id) { // lets find out the index of the input that needs to be removed


            //id = 6
            //data.allItems[type[id]; execute map
            //ids = [123456] returns array
            //index = 3
            var ids = data.allItems[type].map(function(current) { // map is similar to for each however map returns a new array loop over all items in inc or exp array
                return current.id;
            });

            var index = ids.indexOf(id); // returns the index of the id we pass into the method


            if (index !== -1) { // if index is different from -1 then delete
                data.allItems[type].splice(index, 1); // splice is used to remove elements from array arg 1. position arg 2 number of elements to remove
            }
        },




        calculateBudget: function() {

            //calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');
            //calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;
            //calculate the percentage of income that we spent
            if (data.totals.inc > 0) { //cannot divide by 0 so data totals inc has to be greater then 0 for this sum to work
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1; //data set to -1 basically non existent
            }
        },

        calculatePercentages: function() {
            //calculate percentages for each expense object that is contained in expense array
            /*
            a=20
            b=10
            c=40
            income = 100
            */
            data.allItems.exp.forEach(function(cur) {
                cur.calcPercentage(data.totals.inc); //calculate percentage for every expense that we have in our object
            });
        },

        getPercentages: function() { // loop over all expenses but we want to return and store it somewhere use map.

            var allPerc = data.allItems.exp.map(function(cur) { //.map returns something and stores in variable

                return cur.getPercentage();

            });


            return allPerc; // its an array with all of the percentages

        },


        getBudget: function() {
            //retrieve the budget
            return {
                budget: data.budget,
                totalIncome: data.totals.inc,
                totalExspense: data.totals.exp,
                percentage: data.percentage
            };
        },



        testing: function() {
            return data; //logs data structure
        }
    };

})();













var uiController = (function() {

    var domStrings = { //created a object dom data structure to make things easier
        inputType: '.add__type',
        description: '.add__description',
        value: '.add__value',
        button: '.add__btn',
        incomeContainer: '.income__list',
        exspenseContainer: '.expenses__list',
        mainBudgetLabel: '.budget__value',
        budgetIncomeLabel: '.budget__income--value',
        budgetIncomePercentage: '.budget__income--percentage',
        exspenseLabel: '.budget__expenses--value',
        exspensePercentage: '.budget__expenses--percentage',
        containerEventDel: '.container',
        exspensesPercentagelabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };

    var formatNumber = function(num, type) { // now a private function
        // + or - before number, exactly 2 decimal numbers and comma separating the thousands 2310.4567 > 2,310.46


        num = Math.abs(num); // number that we receive which is stored in num variable;
        num = num.toFixed(2); // method of number prototype strings and numbers can have methods even though they are originally primitive data types JS auto converts them to objects ( this is now a string )
        var numSplit = num.split('.'); // split the integer part and decimal part of num

        var int = numSplit[0]; //first element of the array
        var dec = numSplit[1]; // second part of the array

        if (int.length > 3) { // if more than 3 its a thousand

            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3); // end of string; // use method substring allows us to take part of the string first arg index number where to start second arg how many characters we want

        }

        // var type = type === 'exp' ? sign = '-' : sign = '+'; // ternary operator if type is exp then sign should be - and if its not then sign should be +

        return (type === 'exp' ? sign = '-' : sign = '+') + ' ' + int + '.' + dec;

    };

    var nodeListForEach = function(nodeList, callback) { // reusable code takes a list below and a callback below still a private function only methods in controller module can use this method

        for (var i = 0; i < nodeList.length; i++) {

            callback(nodeList[i], i); //

        }

    };

    return {
        getInput: function() {
            return { // returns the values as an object

                getType: document.querySelector(domStrings.inputType).value, // we get html attr value of select option inc or exp
                description: document.querySelector(domStrings.description).value,
                value: parseFloat(document.querySelector(domStrings.value).value), // parse floating number

            };
        },



        addListItem: function(obj, type) {
            // create html string with Placeholder txt
            var html, newHTML, element;

            if (type === 'inc') {
                element = domStrings.incomeContainer;
                html = ' <div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></div></div>';
            } else if (type === 'exp') {
                element = domStrings.exspenseContainer;
                html = ' <div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            //replace placeholder text with data
            newHTML = html.replace('%id%', obj.id);
            newHTML = newHTML.replace('%description%', obj.description);
            // newHTML = newHTML.replace('%value%', obj.value);
            newHTML = newHTML.replace('%value%', formatNumber(obj.value, type)); // format number will be called passing in our two variables

            //insrt html into dom
            document.querySelector(element).insertAdjacentHTML('beforeend', newHTML); //inserted as a child of the element var
        },






        deleteListItem: function(selectorID) { // need to pass in ID or class name to select


            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);


        },



        clearFields: function() {
            var fields, fieldsArray;

            fields = document.querySelectorAll(domStrings.description + ',' + domStrings.value); //creates a fake array

            fieldsArray = Array.prototype.slice.call(fields); // pass in fake array to create new array

            fieldsArray.forEach(function(currentValue, index, array) {

                currentValue.value = "";
            });
            fieldsArray[0].focus(); // selects first element and returns the focus
        },




        displayBudget: function(obj) {

            var type = obj.budget > 0 ? type = 'inc' : type = 'exp'; // if obj.budget is greater than 0 then type will be inc or else type will be expense


            // document.querySelector(domStrings.mainBudgetLabel).textContent = obj.budget;
            document.querySelector(domStrings.mainBudgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(domStrings.budgetIncomeLabel).textContent = formatNumber(obj.totalIncome, 'inc');
            document.querySelector(domStrings.exspenseLabel).textContent = formatNumber(obj.totalExspense, 'exp');


            if (obj.percentage > 0) {
                document.querySelector(domStrings.exspensePercentage).textContent = obj.percentage + '%';
            } else {
                document.querySelector(domStrings.exspensePercentage).textContent = '---';
            }

        },

        displayPercentages: function(percentages) { // pass in percent array object

            var fields = document.querySelectorAll(domStrings.exspensesPercentagelabel); // returns node list each element is called a node

            //loop over nodes change text content property using for each for nodes


            nodeListForEach(fields, function(current, index) { // passing a callback function to a node for each loop function is assigned to callback loop below formateNumber uicontroller and run this function which gives us access to current element and index as there pass into the callback above


                if (percentages[index] > 0) {

                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '-----';
                }

            });

        },

        displayMonth: function() { // called in the init function

            var now = new Date(); // you have to use new for an object constructor and if you don't pass any parameters then the date is today and then you can use methods to get current date year etc or you pass in specific dates but its not common

            var year = now.getFullYear(); // inherits methods from the date prototype

            var months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec'];

            var month = now.getMonth();

            var date = now.getDate();

            document.querySelector(domStrings.dateLabel).textContent = date + ' ' + months[month] + ' ' + year;

        },

        changedType: function() {

            var fields = document.querySelectorAll(domStrings.inputType + ',' + domStrings.description +',' + domStrings.value); // this returns node list and we will change all them to red focus on change to exp. We will need to loop over using nodeList for Each function below formatnumber


            nodeListForEach(fields, function(cur) { // just need to add red focus on current element

                cur.classList.toggle('red-focus'); // need to right to

            });

            document.querySelector(domStrings.button).classList.toggle('red'); // changes tick button red
        },

        getDomStrings: function() { //exposes dom strings object to outside scope
            return domStrings;
        }
    };

})();












var appController = (function(budgetCtrl, UICtrl) { // going to pass the other two modules to this function better to do this incase we change names in other modules

    var setupEventListners = function() { // init function

        var dom = UICtrl.getDomStrings(); // allows us to retrieve the dom string object

        document.querySelector(dom.button).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) { // this function takes an event argument
            /* Act on the event */

            if (event.keyCode === 13 || event.which === 13) { //.which is for older browsers
                ctrlAddItem();

            }
        });

        document.querySelector(dom.containerEventDel).addEventListener('click', ctrlDeleteItem); // EVENT DELEGATION attached to the container catch the event bubbling up from delete button

        document.querySelector(dom.inputType).addEventListener('change', UICtrl.changedType); // change event listener to change border color of input with callback function coming from ui controller
    };

    var updateBudget = function() {

        //4.Calculate the Budget
        budgetCtrl.calculateBudget();
        //5.return the budget
        var budget = budgetCtrl.getBudget();
        //6.Display the Budget
        UICtrl.displayBudget(budget);
    };

    var updatePercentages = function() {

        //1.calculate percentages
        budgetCtrl.calculatePercentages();

        //2. read percentages from budgets controller
        var percentages = budgetCtrl.getPercentages();

        //update the UI with the new percentages
        uiController.displayPercentages(percentages);
    };
    var ctrlAddItem = function() {
        var input, newItem;
        input = UICtrl.getInput();

        if (input.description !== '' && !isNaN(input.value) && input.value > 0) { //notNAN

            //2.add item to budget controller
            newItem = budgetController.addItem(input.getType, input.description, input.value);
            //3.Add the new item to UI
            uiController.addListItem(newItem, input.getType);

            //4. clear fields;
            uiController.clearFields();

            updateBudget();

            updatePercentages();

        }
        //1.Get the field input data

        budgetCtrl.testing();

    };

    var ctrlDeleteItem = function(event) { //access to event object allows us to find target elements

        var itemID = event.target.parentNode.parentNode.parentNode.parentNode.id; // not best solution because we are over reliant on dom structure dom traversal and retrieved ID (inc-0)
        if (itemID) {


            var splitID = itemID.split('-'); // splitting inc-1
            var type = splitID[0]; // type inc
            var ID = parseInt(splitID[1]); // id number

            budgetCtrl.deleteItem(type, ID);

            // delete item from UI
            uiController.deleteListItem(itemID);

            updateBudget();

            updatePercentages();
        }
    };

    return { // returns a init function as object
        init: function() {
            UICtrl.displayMonth();
            UICtrl.displayBudget({ // Set everything to 0 on load
                budget: 0,
                totalIncome: 0,
                totalExspense: 0,
                percentage: -1
            });
            setupEventListners();
            console.log('app started');


        }
    };

})(budgetController, uiController);


appController.init(); // calls the function outside the modules
