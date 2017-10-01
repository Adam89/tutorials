import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})


/*

vue offers us a transition wrapper <transition> </transition> anything in-between the tags can be animate however you can only animate one element

vue js attaches css classes to the transition element in and out animation you have to have the element in your template with v-if or show


<transition name="fade"> vue js auto attach fade enter  enter active leave leave active

by adding fade name vue js can sinff out classes where you add transition

.fade-enter only attached for 1 frame at start

.slide-enter allows you to do keyframes

type="animation" or transition set this to dictate who has the power on what runs

*/