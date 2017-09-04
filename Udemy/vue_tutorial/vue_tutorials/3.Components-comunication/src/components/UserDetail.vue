<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ propUserAge }}</p>
        <button v-on:click="resetName">Reset Name</button>
        <button v-on:click="parentReset()">Reset Name Two</button>

    </div>
</template>

<script>

import {eventBus} from '../main'; // import from main js file

export default { // this component is going to receive some data (PROPS from outside props is an object) unidirectional data flow from top to bottom
	props: {
		name:{
			type: String, // need to validate the props can accept multiple arguments [Array, String]
			required:true //property which is a string this component can only be used if this property is passed. The default will be be a function which returns the object if type set to object
		},
		parentReset: Function, // this is a type and works as a call back
		propUserAge: Number,

	},
	methods: {
		switchName() { // can acess the props and use it as a normal property in my whole vue/data object
			return this.name.split('').reverse().join('');
		},
		resetName() {
			this.name="tom";
			this.$emit('nameReset', this.name); // emit custom event each vue instance first arg name of the event second arg the data (updated name) need to add to template on parent component first arg property second arg event this allows us to pass data to parent component from child
		}
	},
	created() { // new life cycle hook setup listener to the event
		eventBus.$on('ageWasEditied', (ageProps) =>  { // this is a way of passing data between two childs without going via parent listens to events emmited which i stored in the event bus
			this.propUserAge = ageProps;
		});
	}
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
