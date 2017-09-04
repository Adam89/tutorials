<template>
	<div>
		<app-server-status v-for="server in 5" :key="server.id"></app-server-status>
	</div>
</template>


<script>

import ServerStatus from './ServerStatus.vue';

	export default {
		components: { // local component
			'app-server-status': ServerStatus
		}
	}
</script>


