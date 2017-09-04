<template>
    <div class="container">

        <div class="row">

            <div class="col-xs-12">

				<appQuote v-bind:quote="'A quote sent via props'">

					<h2 slot="titleTest">A quote sent via slots</h2>
					<h3 slot="titleTest">{{ quoteTitle }}</h3>
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
    			namedSlotTitle: 'A second specific slot'
    		}
    	},
        components: {
        	appQuote: Quote
        }
    }
</script>

<style>
</style>
