<template>
    <div>
    <h3>New Dynamic Quote</h3>
    <button v-on:click="counter++">Increase counter</button>
    <p>{{counter}}</p>
    </div>
</template>

<script>


    export default {
    	data: function() {
    		return {
    			counter:0
    		};
    	},
    	destroyed() {
    		console.log("destroyed!");
    	},
    	deactivated() { // navigate away run code
    		console.log('deactivated');
    	},
    	activated() { // when we do load the dynamic component
    		console.log('activated');

    	}
    }
</script>

<style>
</style>
