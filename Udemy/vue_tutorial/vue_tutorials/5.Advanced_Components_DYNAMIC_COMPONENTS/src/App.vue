<template>
    <div class="container">

        <div class="row">

            <div class="col-xs-12">
            <button v-on:click="selectedComponent = 'appQuote'">Quote</button>
            <button v-on:click="selectedComponent = 'appAuthor'">Author</button>
            <button v-on:click="selectedComponent = 'appNew'">New</button>
            <p>{{selectedComponent}}</p>
<!-- 				<appQuote v-bind:quote="'A quote sent via props'">

					<h2 slot="titleTest">A quote sent via slots</h2>
					<h3 slot="titleTest">{{ quoteTitle }}</h3>
					<h2 slot="secondNamedSlot">{{ namedSlotTitle }}</h2>

				</appQuote> -->
                <keep-alive>
                <component v-bind:is="selectedComponent"></component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>

import Quote from './components/quote.vue';
import Author from './components/author.vue';
import New from './components/new.vue';

    export default {
    	data: function() {
    		return {
    			quoteTitle: 'A quote sent via slots and interpolation',
    			namedSlotTitle: 'A second specific slot',
                selectedComponent: 'appQuote' //has to be a string
    		}
    	},
        components: {
        	appQuote: Quote,
            appAuthor: Author,
            appNew: New
        }
    }
</script>

<style>
</style>
