<template>
	<div> <!-- need to always have one root element for global or local components -->
		<p>Server Status: {{status}}</p>
		<button v-on:click="changeStatus">Update</button>
	</div>
</template>


<script>
	export default {
		data: function() { // should always be a function in components
			return {
				status: 'critical'
			}
		},
		methods: {
			changeStatus() {
				this.status = 'Normal'
			}
		}
	}
</script>


