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

a filter is a syntax feature to transform the output in the data/template

Globally: Vue.filter is a way to register globally first arg is name of filter second arg is function 3rd arg is value you can chain filters and last filter takes value plus all filters before it as arg

Local: filters are always functions locally always gets a value as the input the data we want to transform each filter will get a value transform some data return the transformed value

uses angular piping to call locally <p>{{text | toUppercase }}</p>
*/