<template>
    <div class="row">
	<appQuote v-for="quote in quotes"> {{ quote }} </appQuote>
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

 -->