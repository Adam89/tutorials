import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})



/*

Advanced features of components explained
SLOTS: VUE JS offers us slots for content being passed from outside to child component. Styling of child applied to slots
add a slot in the child component where you want to receive the data.
The component where you have the code in the template will be the one doing the changes. The component it is passed from.
you can also use any vue syntax on this code that is doing the changes.
you can setup specific named slots allowing you to distribute content
to specific slots via named property's. Vue js chooses non named slots as the default slots
it renders unassigned content in the default slot. you can also add default data into a slot as placeholder
then when data is passed into the slot it will override the default data

slots help to distribute your content in other components its useful when you want to build widgets such as a slideshow you have the frame for each slide and you want to switch and each slide has its own individual html code layout. Make sure the content you want to pass into the frame is distributed exactly the way you want inside of your slideshow.

*/