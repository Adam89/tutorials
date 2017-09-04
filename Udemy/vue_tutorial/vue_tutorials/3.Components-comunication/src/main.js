import Vue from 'vue';



import App from './App.vue';

export const eventBus = new Vue({
	data: {

	},
methods: {
		changeAge(ageProps) {
			this.$emit('ageWasEditied', ageProps);
		}
	}
}); // create event bus before load component script below like services in angular 2 this is a new vue object. this is a bus for our events. This is good to store centralized code that can be accessed from different parts of the app. Code here will be accessible across the whole app data, methods and life cycle hooks etc

new Vue({
  el: '#app',
  render: h => h(App)
})
