import Vue from 'vue'
import App from './App.vue'



Vue.filter('toLowerCase', function(value) {
	return value.toLowerCase();
});




new Vue({
  el: '#app',
  render: h => h(App)
})


/*
FILTERS AND COMPUTED


a filter is a syntax feature to transform the output in the data/template

Globally: Vue.filter is a way to register globally first arg is name of filter second arg is function 3rd arg is value you can chain filters and last filter takes value plus all filters before it as arg

Local: filters are always functions locally always gets a value as the input the data we want to transform each filter will get a value transform some data return the transformed value

uses angular piping to call locally <p>{{text | toUppercase }}</p>

vue js is not that good a checking when a filter changes it only recognize it when the dom re render filters have been limited

vue js nows what a computed property needs and re renders when items change this is more complex filters

MIXINS

are used to share code between vue instances and components vue js merges them into the component vue trys to add the new things into our component so the component is always right you can have lifecyle hooks on both a component and a mixin even the same hook the order of execution will be mixin first and component


*/