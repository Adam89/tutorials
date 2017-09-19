import Vue from 'vue'
import App from './App.vue'


Vue.directive('highlight', {// add v-highlight to directive
	bind(el , binding, vnode) { // acess to these arguments
		// el.style.backgroundColor = 'green';
		// el.style.backgroundColor = binding.value; // binding refers to the directive on the element value refers to the arg you pass from the template able to set the value from outside via props or other means

		if (binding.arg == 'background') {// arg allows us to get the info after the colon : on the directive
			el.style.backgroundColor = binding.value;
		} else {
			el.style.color = binding.value;
		}
	}
});


new Vue({
  el: '#app',
  render: h => h(App)
});





//v- just tells vue that this is not a normal html attribute its a directive it should handle
//you can register a custom directive globally the first arg is the selector name of directive without v-minus next is the object that configures the directive

//directive has 5 hooks to peform things with the element

// bind hook: this is fired once the directive is attached 3 args el it sits on,  binding argument the way it is set up args or modifies we pass to it , and v-node references to the virtual node you will rarely use this binding and v-node should be treated as read only

// inserted hook: this occurs as soon as it inserted in the dom but can be from the first hook doesn't need to inserted into the dom same args as above

// update: is called when component is updated but children haven't updated same args as above plus oldVnode we get new node and old node both should be treated as read only

// component updated: same args is update when component and children has been updated

// unbind: once directive has been removed same args as bind

// you will use bind and update the most often the bind node triggering what the directive triggers when applied to an element