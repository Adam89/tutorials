import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

Vue.use(VueResource) // tells vue js to add a plugin to core vue functionality

Vue.http.options.root = 'https://vuejs-http-69e5f.firebaseio.com/' // you can then send end points in your vue instances central place were code is stored could also set custom headers or content types
Vue.http.interceptors.push((request, next) =>{ //array of functions we want to execute on each request

	console.log(request);
	if (request.method == 'POST') {
			request.method = 'PUT';
	}
next( response => { // look at response can be done as new interceptor or just chained to the request interceptors next method
		response.json = () => {
			console.log(response);
		return {messages: response.body }; //return new object with a key you can loop through stored in messages
		console.log(response);
		};
	});
});


new Vue({
  el: '#app',
  render: h => h(App)
});




/* VUE JS allows any ajax library to use jquery etc but VUE JS has it's own HTTP request library called VUE RESOURCE

Firesbase allows us to have a BE for our app

https://vuejs-http-69e5f.firebaseio.com/

every vue instance has acess to vue Resource this.$http object
you have many different methods after http get post

post takes two args api end point and data get request only needs 1 arg api end point

vue resource uses the promises approach so on a post the response promises us some data in the future

then is a method avaliable on the promises approach returns a response as a paremeter and a 2nd arg of error

vue js only sends the real object to DB it needs a unique cryptic id so we can append data to DB

GET METHODS HELPERS

response.json() first it gives us a promise as it doesn't have data straight away because it async so have to chain then methods to extract


extracts body of response and converts it to json so front end can use it

vue js clever enough to update dom on get request when it changes

can add Vue.http in main js to store api end point and set global options doesn't need $ as this is only needed when inside a vue instance


Vue resource allows you to intercept requests

Vue resource allows us to set up our own resources using the method this.$resource() take 3 args first resource end point can also store parameters in objects and make reusable resources across the app

make url more flexible end points vue resource supports the setup of your end points as templates URi templates {node}.json' replace node using v-model etc gives ability to exchange pieces your sending or getting you requests too

*/
