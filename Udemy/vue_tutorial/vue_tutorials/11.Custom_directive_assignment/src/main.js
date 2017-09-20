import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})


/*

It's important that you get the difference between binding.arg (the value you pass after the .  => v-customOn.mouseleave="mouseLeave" and binding.value (the value you pass between the quotation marks => v-customOn.mouseleave="mouseLeave").

Additionally, it's also extremely important to understand that Directives give you direct DOM access via the first argument (el ). This allows you to do EVERYTHING you can do in vanilla JS with a HTML element.
*/