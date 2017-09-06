import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})



/*



Dynamic components

you are able to dynamically display specific components based on options / buttons pressed.

use the component <component> element its a reserved word just like slot recognized by vue JS

you have to bind it to the selected component using v-bind:is

This is how we can use dynamic component to dynamically replace different component and stored in a property which is bound by the is keyword

component is destroyed and recreated when you navigate away and back again However this behavior can be overwritten

Keeping dynamic components alive: you have to wrap the component <keep-alive> it preserves the state.

By doing this we get access to two new lifecycle hooks deactivated & activated

Sometimes, the concept of slots gets confused with the idea behind props. Keep in mind: slots allow you to directly distribute some content in the child component's template. You pass the content between the opening and closing selector of that component.

Props on the other hand allow you to pass data to a child component where it then is available as a property. You can output it in the child component's template (via {‌{ }}  or v-bind ) but you can also use it in the JS code of the child component. That's not (easily) possible with slots.
*/