<template>
    <li class="list-group-item" v-on:click="serverSelected">
        Server #{{ server.id }}
    </li>
</template>

<script>
import { serverBus } from '../../main';
	export default { // property will be passed from servers
		props:['server'], // server is prop from outside gets set in servers file
		methods: {
			serverSelected() { // inform parent component that server was selected need to use event bus
				serverBus.$emit('serverSelected', this.server); // passes id above emits event
			}
		}
	}

</script>

<style scoped>
li {
	cursor:pointer;
}
</style>
