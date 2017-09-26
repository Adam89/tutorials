<template>
	<div>
		<h1>Filters and Mixins</h1>
		<hr>
		<input type="text" name="" v-model="filterTexts" id="">
		<ul>
			<li v-for="fruit in filteredFruits">{{fruit}}</li>
		</ul>
	</div>
</template>

<script>


 import { fruitMixin } from './fruitMixin'; //exported
	export default {
	// 	data() { // es6 {
	// 		return {
	// 			fruits: ['Apple', 'Banana', 'Mango', 'Melon'], // only output fruit which match input filter value
	// 			filterTexts: ''
	// 		}
	// 	},
	// 	filters: { //locally to the component

	// 	},
	// 	computed: { // this property will re render when fruits array for filter text changes
	// 		filteredFruits() {
	// 			return this.fruits.filter((element) => {
	// 				return element.match(this.filterTexts);
	// 			}); // takes a callback which is executed on each element on the array

	// 		}
	// 	}
	mixins: [fruitMixin], // its an array where you specify all the code snippets you want to add to this vue instance or component
	created() {
		console.log('inside list created hook'); // mixin first component last this allows you to overwrite stuff in a mixing or destroy stuff mixing can't destroy stuff
	}


	}
</script>

<style>

</style>
