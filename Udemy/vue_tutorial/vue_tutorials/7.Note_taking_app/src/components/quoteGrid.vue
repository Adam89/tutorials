<template>
    <div class="row">
	<appQuote v-for="(quote, index) in quotes" v-on:click.native="deleteQuote(index)"> {{ quote }} </appQuote>
    </div>
</template>

<script>

	import Quote from './quote.vue';

    export default { // this is an object
        props: ['quotes'], // quotes passed from outside loop through
        data: function() { // returns data object
        	return {

        	}
        },
        methods: {
            deleteQuote(index) { // need to get index from above and pass to app vue
                this.$emit('quoteDeleted', index)
            }
        },
        components: {
        	appQuote: Quote
        }
    }
</script>


<style>
</style>


<!--

loop through each quote to render that single quote for each loop and render the quote content for it

quotes get passed from app.vue at start


native tells vue js react to a click on this component if it happens on the native element of this component

 -->