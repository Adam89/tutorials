<template>
    <div class="container">
    <progressBar v-bind:quoteCount="quotes.length" v-bind:maxQuotes="maxQuotes"></progressBar>
	<newishQuote v-on:quoteAdded="newQuote"></newishQuote>
	<appQuoteGrid v-bind:quotes="quotes" v-on:quoteDeleted="deleteQuoteFromArray"></appQuoteGrid>
    <div class="row">
        <div class="col-sm-12 text-center">
            <div class="alert alert-info">
            <p>Info: Click on a quote to delete</p>
            </div>
        </div>
    </div>
    </div>
</template>

<script>

import quoteGrid from './components/quoteGrid.vue';
import newQuote from './components/newQuote.vue';
import headerProgress from './components/headerBar.vue';

    export default {
        data: function() { // returns data object
        	return {
        		quotes: ['Just a quote to see something'], // array of single quotes
        		maxQuotes: 10 // track max quotes hard coded
        	}
        },
        methods: {
            newQuote(quote) { // vue JS already provides the data on custom events for access
                if (this.quotes.length >= this.maxQuotes) {
                    return alert('Please delete quote first');
                }
                this.quotes.push(quote);

            },
            deleteQuoteFromArray(index) { // get index as arg vue js auto passes the content from the bind
                this.quotes.splice(index, 1); // modify existing array and remove one element
            }
        },
        components: { // local components
        	appQuoteGrid: quoteGrid,
        	newishQuote: newQuote,
            progressBar: headerProgress
        }
    }
</script>

<style>
</style>


<!--
	need to pass quotes array to quote grid so have binded the props above.

 -->

 https://prod-ca.mobiloil.com.ru/sitecore/loginavndscxom.com\Michael.Birtwistle

Username: Michael.Birtwistle
Password: Birtxom13