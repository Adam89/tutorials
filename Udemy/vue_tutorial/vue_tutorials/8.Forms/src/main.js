import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})


/* input field will be hooked up to output at the end bind it with v-model and even if you bind the same v-model to it elsewhere vue js checks the source of the editing


v-model connects html element with our property two way binding always add to the input element

v-model reacts to input events so on every keystroke. You can modify the v-model to only update when user clicks out of input etc

v-model.lazy reacts to a change event only fires when you leave the input

other modifiers are

v-model.trim to trim excess whitespace beginning an end

v-model.number to force the input is converted to number straight away as the number is a string to start with in an input

text area you can't use string interpolation to set default message you need to use v-model

style="white-space: pre" allows you to keep line breaks in text area output from v-model

bind radio buttons to a specific property and add both in one array

bind two inputs to same model which vue js detects auto merges the value into an array

vue js knows both radio buttons belong to same group gender vue js recognizes that they belong to same group so only one gets selected. vue auto stores the value in our gender property use the same model and vue js will take care of grouping and assigning value correctly.

add select options dynamically through data options and v for you can also bind the selected attribute dynamically with v-bind

v-model will always override the default value set by bind

v-model does two things behind scenes binds value of input to property and gives access to @input or @change it then listens to changes which sets userData.email = $event.target.value

so our custom component has to have a prop named value so v-model can pass a value into our component and it has to emit an event called input to allow v-model to react to that

custom input 2 key features takes a prop as a value and emits an input as an event
*/