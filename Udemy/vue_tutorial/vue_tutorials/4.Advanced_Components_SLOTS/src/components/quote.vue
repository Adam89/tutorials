<template>
	<div>
		<div class="title">
			<slot name="titleTest"></slot>

		</div>
		<slot name="titleTestNew"></slot>
		<span><slot name="subTitle">Default placeholder content as no specific data passed</slot></span>
		<hr>
		<div>
			<slot name="secondNamedSlot"></slot>
		</div>

		<p>{{quote}}</p>
	</div>
</template>

<script> // add quote to this vue object found in app.vue
	export default {
		props: ['quote']
	}

</script>

<style scoped>
	div {
		border:1px solid #ccc;
		box-shadow: 1px 1px 2px black;
		padding:30px;
		margin: 30px auto;
		text-align: center;
	}
	h2 {
		color: red;
	}
	h3 {
		color: green;
	}
	.title {
		font-style: italic;
		background-color: orange;
		color:black;
	}
</style>