import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

Vue.use(VueResource) // tells vue js to add a plugin to core vue functionality

new Vue({
  el: '#app',
  render: h => h(App)
})



/*
 VUE JS allows any ajax library to use jquery etc but VUE JS has it's own HTTP request library called VUE RESOURCE




/*