<template>
	<div>
	 <h1>The User Page</h1>
	 	<p>Loaded ID: {{ id }}</p>
	<button v-on:click="navigateToHome({name:'home'})" class="btn btn-primary">Go to Home</button>
	<hr>
	<router-view></router-view>
	</div>
</template>

<script>
	export default {
		// data() {
		// 	return {
		// 		id: this.$route.params.id
		// 	}
		// },
		// watch: {
		// 	'$route'(to,from) { // coming from going to routes
		// 		this.id = to.params.id;
		// 	}
		// },
		methods: {
			navigateToHome(state) {
				this.$router.push(state); // can pass object
			}
		}
	}
</script>