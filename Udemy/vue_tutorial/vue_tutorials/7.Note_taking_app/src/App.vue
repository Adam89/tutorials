<template>
    <div class="container">
	<newishQuote></newishQuote>
	<appQuoteGrid v-bind:quotes="quotes"></appQuoteGrid>
    </div>
</template>

<script>

import quoteGrid from './components/quoteGrid.vue';
import newQuote from './components/newQuote.vue';

    export default {
        data: function() { // returns data object
        	return {
        		quotes: ['Just a quote to see something'], // array of single quotes
        		maxQuotes: 10 // track max quotes
        	}
        },
        components: { // local components
        	appQuoteGrid: quoteGrid,
        	newishQuote: newQuote
        }
    }
</script>

<style>
</style>


<!--
	need to pass quotes array to quote grid so have binded the props above.

 -->