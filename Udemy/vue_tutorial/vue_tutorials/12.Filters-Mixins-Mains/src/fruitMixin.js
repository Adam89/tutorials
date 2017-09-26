export const fruitMixin = { //JS OBJECT with all the data from the list component
	data() { // es6 {
			return {
				fruits: ['Apple', 'Banana', 'Mango', 'Melon'], // only output fruit which match input filter value
				filterTexts: ''
			}
		},
		filters: { //locally to the component

		},
		computed: { // this property will re render when fruits array for filter text changes
			filteredFruits() {
				return this.fruits.filter((element) => {
					return element.match(this.filterTexts);
				}); // takes a callback which is executed on each element on the array

			}
		},
		created() {
			console.log('created'); // logs created twice as it's used across two components
		}
	}