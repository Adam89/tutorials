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

v-show also works with animations aswell as v-if

set appear attribute on the transition element to smoothly animate on load

you can overwrite default classes associated with name you need to remove name and write your own classes enter-class or enter-active-class appear does not work with this custom classes yet

you can bind the animation using v-bind:name="animation name from a select"


you need to add a key if you have multiple divs and you want to animate and alternate between the two key="info" to stop this you can add two different modes v-show does not work on this only v-if else

mode="out-in" -- let the old element animate out first before you animate the new one

mode="in-out" does the opposite new in first before old animates out

vue js allows us to listen to JS Transition event hooks to animate using JS

enter when animation starts

after-enter hook executed once animation is finished

after enter canceled this is executed when a condition changes relating to the animation and before the animation has finished

before leave - before the animation starts a leave process

after leave - once animation leave

after leave cancelled - something that changes the condition of the animation leave process

call animation in the transition tag v-on:before-enter="SPECIFY FUNCTION TO RUN HERE"

you can add css clases to all these hooks
*/