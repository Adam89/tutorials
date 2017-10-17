<template>
	<div>
		 <h3>Some User Details</h3>
		 <p>User Loaded has ID: {{$route.params.id}}</p>
		  <router-link tag="button" v-bind:to="link" class="btn btn-primary">Edit User</router-link>
	</div>
</template>


<script>
	export default {
		data() {
			return {
				link:{
					name: 'userEdit',
					params: {
						id:this.$route.params.id //use this because im inside a vue instance
					},
					query: {
						locale: 'en',
						q: 100
					},
					hash: '#data'
					}
				}
			},
			beforeRouteEnter(to,from,next) {
				console.log('inside component');
				if (true){ // user is approved
				next();
				} else {
				next(false);
				}
			}
		}
</script>