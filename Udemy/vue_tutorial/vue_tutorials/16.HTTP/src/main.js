import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

Vue.use(VueResource) // tells vue js to add a plugin to core vue functionality

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
*/


