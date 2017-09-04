<template>

	<div class="col-xs-12 col-sm-6">
		<p>{{serverDeets}}</p>
	</div>

</template>


<script>
	export default {
		data: function() {
			return {
				serverDeets: 'Server Details are currently not updated'
			}
		}
	}
</script>

<style scoped>
	div {
		border: 1px solid red;
	}
</style>