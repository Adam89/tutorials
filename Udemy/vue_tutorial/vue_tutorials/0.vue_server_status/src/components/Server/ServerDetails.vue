<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please Select a server ( v-if check if server set )</p>
         <p v-else># {{ server.id }} selected, Status: {{ server.status }}</p>
         <hr>
         <button v-on:click="resetStatus">Change to Normal</button>
    </div>

</template>

<script>

import { serverBus } from '../../main';

export default {
	data: function() {
		return {
			server: null, // undefined at beginning
		}
	},
	methods: {
			resetStatus() {
				this.server.status = 'Normal'; // still points to the same place in memory because object is a reference type
		}
	},
	created() { // listen to server selection event on creations
		serverBus.$on('serverSelected', (server) => {
			this.server = server;
		});
	}
}

</script>

<style>

</style>
