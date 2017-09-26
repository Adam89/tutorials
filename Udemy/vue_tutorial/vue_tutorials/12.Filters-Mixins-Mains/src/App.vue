<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Filters and Mixins</h1>
				<p>{{text | toUppercase | toLowerCase }}</p>
				<hr>
				<input type="text" name="" v-model="filterTexts" id="">
				<ul>
					<li v-for="fruit in filteredFruits">{{fruit}}</li>
				</ul>
				<hr>
				<appList></appList>
			</div>
		</div>
	</div>
</template>

<script>

 import listComponent from './list.vue';
  import { fruitMixin } from './fruitMixin';


	export default {
		data() { // es6 {
			return {
				text: 'Hello Adam',
				// fruits: ['Apple', 'Banana', 'Mango', 'Melon'], // only output fruit which match input filter value
				filterTexts: ''
			}
		},
		filters: { //locally to the component
			toUppercase(value) {
				return value.toUpperCase(); // uses angular piping
			}
		},
		// computed: { // this property will re render when fruits array for filter text changes
		// 	filteredFruits() {
		// 		return this.fruits.filter((element) => {
		// 			return element.match(this.filterTexts);
		// 		}); // takes a callback which is executed on each element on the array

		// 	}
		// },
		mixins: [fruitMixin],
		components: {
			appList: listComponent
		}
	}
</script>

<style>

</style>
