<template>
    <div>
        <div class="form-group">
            <label for="">First Name</label>
            <input type="text" class="form-control" v-bind:value="firstName" v-on:input="nameChanged(true, $event)">
        </div>
        <div class="form-group">
            <label for="">Last Name</label>
            <input type="text" class="form-control" v-bind:value="lastName" v-on:input="nameChanged(false, $event)">
        </div>
    </div>
</template>
<script>


export default { // get value passed in return the input event or emit the event
    props: ['value'],
    methods: { // method to emit the input
    	nameChanged(isFirst, event) {
    		let name = '';
    		if (isFirst) {
    			name = event.target.value + ' ' + this.lastName; // input of first input element
    		} else {
    			name = this.firstName + ' ' + event.target.value; // input of last input element
    		}
    		this.value = name // update value to be equal to name
    		console.log(this);
    		this.$emit('input', this.value);
    	}
    },
    computed: { // all computed property's are methods
    	firstName() { // take the first name from the property
    		return this.value.split(" ")[0]; // array first element is first name
    	},
    	lastName() { // take the last name from the property
    		return this.value.split(" ")[1];
    	},

    }
}
</script>



<style>



</style>