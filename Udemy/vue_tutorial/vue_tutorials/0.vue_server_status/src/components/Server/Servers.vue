<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
			<appServer v-for="server in servers" v-bind:server="server"></appServer>
        </ul>
    </div>
</template>

<script>
	import Server from './Server.vue';
	export default {
		data: function() { // needs to return an object which is our data due to scope
			return {
				servers: [ // array of servers links to v-for above
				{id:1, status: 'Normal'},
				{id:2, status: 'Critical'},
				{id:3, status: 'Unknown'},
				{id:4, status: 'Fucked'},
				]
			};
		},
		components: { // local component in this vue object
			appServer: Server
		}
	}
</script>

<style>

</style>
