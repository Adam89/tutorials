// constructor function: new vue instance object there the core of each application their one job is to control there own template of html code

//curly braces only work on strings only interporlation syntax

//Directives

// what is a directive its an instruction you place in your dom

//v-on is a directive allow us to listen to an event pass an argument such as the name of the event then assign a value to this such as the code you want to be exectued when this event happens changeTitle is a method of the vue instance can use any default dom event and function name v-on:click="increase"

//v-one (shorthand @click) directive only renders the element once allows elements to not be overidden

//v-bind (shorthand :href) don't use the string attribute instead bind v-bind:(arg) arg being the name of the attribute v-bind:value for example takes a value from the data object

//v-bind don't use the string attribute instead bind v-bind:(arg) arg being the name of the attribute

// v-html allows us to render html code and not escape it use carefully it exposes you to cross site scripting

//v-model on one hand output the name in the input field and update the name value in my VUE instance.

//v-if can be added to any element you can bind it to a condition or property which resolves to a boolean removes all elements even nested elements like spans

//v-else will automatically refer to latest v-if in front of it

//v-else-if

// v-show allows you to hide stuff in the dom not remove

// v-for allows you to loop through arrays and objects but keep in mind that some bugs may appear as v for finds it hard to keep track of new additions to an array unless there is a unique key set with v-bind:key (look out for items updating in the wrong places)

//$event in the dom allows us to pass the event as a second argument


//event modifiers add a dot after the name of the event through v-on:mousemove.stop.prevent

//key modifiers v-on:keyup.enter allows us to add key modifiers enables us to listen to specific keys like keyup etc

// you can write any JS in the dom aslong as it has one expression or short ternary expressions


// data is not reactive vue will update the page when any of it's data properties are updated

/*

---------------------------------------------------

VUE instance

---------------------------------------------------
 el, data, methods, computed make up a vue instance.The vue instance is the middle man between dom and business logic in the data property or methods.

 VM = vue model


 var vm1 = new Vue  can acess methods and data from outside using vm2.title for example

 var vm2 = new Vue


only creates watches for every object passed in the vue constructor instance with getter setters. However, we can add new property from outside but vue won't act on them as usual due to them being outside the vue instance.

$el refers to html code of instance the html element

$data object which holds data propertys $data.title another way to acess data

$refs place ref="myButton" key on any html element then in vue instance you can manipulate the refs $refs.mybutton.innerText = " change me " can also use outside of the instance.


Be careful when using $refs outside of instance as its not part of vue generated template so could be overridden


$mount(#domAppEl); allows use to pass the element where you want to pass the vue instance too same as el: #domAppEl this is useful is dom elements isn't created yet.

 var vm3 = new Vue ({

  template: '<h1>hello world</h1>'

  template is a new term and creates its own dom template within the vue instance which can be passed to the vm3.$mount(#domAppEl);

  another way is to

  vm3.$mount(); create instance off screen
  document.getElementById('#domAppEl').appendChild(vm3.$el) $el stores template this way is not that common

 })

---------------------------------------------------

Components

---------------------------------------------------


vue.component('helloAppDomEl', { creates a reusable component pass there own selector hello is not a html 5 element first argument is html element your own one
  template: '<h1>Hello!</h1>'
})

 var vm3 = new Vue ({
  el: hello, // replace template of every hello element
  template: '<h1>hello world</h1>'
  )}


 limitations are syntax highlighting and struggling to writing multi line.


 vue JS creates a virtual dom from all your objects and watches for changes when changes happen to parts of virtual dom those changes are updated to relevant parts in real dom

 change detections with watchers


 A component extends the vue instance can also includes methods computed watchers etc

 vur.component('my-cmp', { // this configures components globally
    data:function() { data object in a component needs to be a function which returns an object to make sure we are not interfering in our data so each component has its own data i.e button will change their own specific area in dom data function gets executed for each component
    return {
        status: 'critical'
        }
    },
    template: '<p>Server Status: {{status}}</p>'
 })


 var cmp = {
    data: function() {
     return {
        status: 'critical'
        };
    },
 }

 new Vue({
    el:'#app',
    components: {
        'my-cmp': cmp // this allows us to specify local components they are only usable in this instance
    }
 })

 <div id="app">
    <my-cmp></my-cmp>
 </div>
/*






// new Vue({
// 	el: '#app', // always a string
// 	data: {  //object stores all data for vue instance
// 		title:'Hello World'
// 	},
// 	methods: {
// 		changeTitle: function(event) { // vue allows us to acess all property's in data and methods by using this
// 			this.title = event.target.value;
// 		}
// 	}
// });



// //Dom interaction

// // takes our html code renders a template internally then pumps out to the dom
// new Vue({
// 	el: '#appTwo', // always a string
// 	data: {  //object stores all data for vue instance
// 		titleTwo: 'Hello World',
// 		link: 'www.khws.co.uk', //v-bind data dynamically
// 		finshedLink: '<a href="http:www.khws.co.uk">KHWS</a>'
// 	},
// 	methods: {
// 		sayHello: function() {
// 			//have access to the object instance using this because of proxy
// 			this.titleTwo = 'Hello Test';
// 			return this.titleTwo; // can call function in the DOM but only items that return a string
// 		},

// 	}
// });


// new Vue ({
// 	el: '#exercise',
// 	data: {
// 		name: 'Adam Hopkins',
// 		age: 27,
// 		imageLink:'http://static3.UK.businessinsider.com/image/55f94dfb9dd7cc1a008ba8f7-960/jeremy-corbyn.jpg'
// 	},
// 	methods: {
// 		randomFloat: function(max) {

// 			return Math.random();

// 		}
// 	}
// })



// new Vue ({
// 	el: '#appEvent',
// 	data: {
// 		counter: 0,
// 		x: 0,
// 		y: 0
// 	},
// 	methods:{
// 		increase: function(step, event) {
// 			this.counter += step;
// 		},
// 		updateCoordinates: function(event) { // event object gets attached to any v-on show us how to pass event object and use it.
// 			this.x = event.clientX;
// 			this.y = event.clientY;
// 		},
// 		// dummy: function(event) {
// 		// 	stopPropagation();
// 		// }
// 		alertMe: function() {
// 			alert('alert!');
// 		}
// 	}
// });



// new Vue({
//         el: '#exercise',
//         data: {
//             value: ''
//         },
//         methods: {
//         alertMe: function() {
//           alert('Alert!');
//           }
//         }
//     });



// new Vue({
//         el: '#twoWayBind',
//         data: {
//             name: 'adam'
//         },
//         methods: {
//         alertMe: function() {
//           alert('Alert!');
//           }
//         }
//     });





// new Vue({
//         el: '#computedChanges',
//         data: {
//             counter: 0,
//             secondCounter: 0
//         },
//         computed: { // takes JS object everything stored here can be called like a property in the data object it's aware only use if you need to cache a variable as computed will only update once data changes
//         	output:function() {
//         		console.log('test');
//         		return this.counter > 5 ? 'Greater 5': 'Smaller than 5';
//         	}
//         },
//         watch: {
//         	counter : function(value) { // linked to counter above reacts to every change
//         		var vm = this; // need to store this in var as its in a call back closure
//         		setTimeout(function() {
//         			vm.counter = 0;

//         		}, 2000);
//         	}
//         },
//         methods: {
//         resultDom: function() {
//         	console.log('testOne');
//           return this.counter > 5 ? 'Greater 5': 'Smaller than 5';
//           }
//         }
//     });


// new Vue({
//         el: '#exercise',
//         data: {
//             value: 0
//         },
//         computed: {
//         	result: function() {

//         		return this.value == 37 ? 'done' : 'not there yet';

//         	}
//         },
//         watch: {
//         	result: function() {
//         		var vm = this;
//         		console.log(vm);
//         		setTimeout(function(){
//         			vm.value = 0;
//         		}, 5000);
//         	}
//         }
//     });




// new Vue({
//         el: '#appCSS',
//         data: {
//             attachRed: false, //attached red to the dom using v-bind and a conditional statement and called methods
//             color: 'green'
//         },
//         computed: {
//         	divClasses: function() {
//         		return {
//         			red: this.attachRed,
//         			blue: !this.attachRed
//         		};
//         	}
//         }
//     });

// new Vue({
//         el: '#appCSSTwo',
//         data: {
//             color: 'green',
//             width: 100,
//             height: 100
//         },
//         computed: {
//         	myStyle: function() {
//         		return {
//         			backgroundColor: this.color,
//         			width: this.width +'px', //adjust the width
//         			height: this.height + 'px'
//         		};
//         	}
//         }
//     });








//exercise 4
 /*

new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
        hightlight: false,
        shrink: true
    },
    float: 'float', // stores css classes
    blue: 'blue',
    text: 'text-colour',
    userClass: '', // two way binding v-model between input and div array
    isVisible: true,
    myStyle: {
        width:'100px',
        height: '150px',
        backgroundColor: 'gray'
    },
    progressBar: {
        width: '0px',
        backgroundColor: 'red'
    }
  },
  methods: {
    startEffect: function() {
        var vm = this;
        setInterval(function() {
            vm.effectClasses.highlight = !vm.effectClasses.highlight;
            vm.effectClasses.shrink = !vm.effectClasses.shrink;
        }, 500);
    },
    startProgress: function() {
        var vm = this; // acess to vue instance
        var width = 0;
        setInterval(function() {
            width = width + 10;
            vm.progressBar.width = width + 'px';
            if(width === 200) {
                width = 0;
            }
        },500);
    }
  }
});



*/




//Dom interaction conditionals and lists



// new Vue ({
//     el: '#appDom',
//     data: {
//         show:true // linked to V-IF
//     }
// });




// new Vue ({
//     el: '#appList',
//     data: {
//         ingredients:['meat', 'Fruit', 'Cookies'], // linked to v for
//         persons: [
//         {name: 'Max', age:27, color:'red'},
//         {name: 'Anna', age:'unknown', color:'blue'}
//         ]
//     }
// });


//exercise 4 dom interaction conditionals and lists
// new Vue({
//   el: '#exerciseDom',
//   data: {
//     isShown: true,
//     array: ['Max', 'Anna', 'Chris', 'Manu'],
//     myObject: {
//       title: 'Lord of the Rings',
//       author: 'J.R.R. Tolkiens',
//       books: '3'
//     },
//     testData: {
//       name: 'TESTOBJECT',
//       id: 10,
//       data: [1.67, 1.33, 0.98, 2.21] // created template
//     }
//   }
// });

/*

---------------------------------------------------

Vue Lifecycle

lifecycle hooks are not part of the methods object they are function registered on the root object Vue
---------------------------------------------------

*/
new Vue({
    el: '#appLife',
    data: {
        title: 'The VueJS Instance'
    },
    beforeCreate: function() { // this is hook
        console.log('beforeCreate()');

    },
    created: function() { // when vue instance is created
        console.log('created()');
    },
    beforeMount: function() { // before vue instance is mounted to dpm
        console.log('beforeMount()');
    },
    mounted: function() { // when instance is mounted to real dom
        console.log('mounted()');
    },
    beforeUpdate: function() { // executed before element in the dom is updated
        console.log('beforeUpdate()');
    },
    updated: function() { // executed when element in dom is updated
        console.log('updated()');
    },
    beforeDestroy: function() { // executed just before vue instance is destroyed
        console.log('beforeDestroy()');
    },
    destroyed: function() { // executed just before vue instance is destroyed
        console.log('destroyed()');
    },
    methods: {
      destroy: function() {
        this.$destroy(); // this refers to vue instance
      }
    }
});





/*

---------------------------------------------------

VUE CLI & Workflows

Single file templates

vue cli allows us to fetch vue JS templates

---------------------------------------------------

*/

















