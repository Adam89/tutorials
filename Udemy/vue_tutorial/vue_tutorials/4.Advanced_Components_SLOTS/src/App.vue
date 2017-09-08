<template>
    <div class="container">

        <div class="row">

            <div class="col-xs-12">

				<appQuote v-bind:quote="test">

					<h2 slot="titleTest">A quote sent via slots</h2>
					<h3 slot="titleTestNew">{{ quoteTitle }}</h3>
					<h2 slot="secondNamedSlot">{{ namedSlotTitle }}</h2>

				</appQuote>

            </div>
        </div>
    </div>
</template>

<script>

import Quote from './components/quote.vue';

    export default {
    	data: function() {
    		return {
    			quoteTitle: 'A quote sent via slots and interpolation',
    			namedSlotTitle: 'A second specific slot',
                test: 'A quote sent via new'
    		}
    	},
        components: {
        	appQuote: Quote
        }
    }
</script>

<style>
</style>
