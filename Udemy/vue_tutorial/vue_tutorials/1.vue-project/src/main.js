import Vue from 'vue';
import App from './App.vue'; // passes app into render function
import Home from './Home.vue';

Vue.component('app-servers', Home) // global component


new Vue({ // first file that gets executed
  el: '#app',
  render: h => h (App) // we tell vue JS to take this place in the dom specified by the el element

});
 // this is an alternative to template allows for maxime flexibility