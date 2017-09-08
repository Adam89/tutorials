<template>
    <div class="row">
    <form action="">


        <div class="col-sm-8 col-sm-offset-2 col-xs12 col-md-6 col-md-offset-3 form-group">
            <label>Quote</label>
            <textarea class="form-control" name="" id="" cols="30" rows="3" v-model="quote"></textarea>
        </div>
                <div class="col-sm-8 col-sm-offset-2 col-xs12 col-md-6 col-md-offset-3 form-group">
<button class="btn btn-primary" v-on:click.prevent="createNewQuote">Add Quote</button>
        </div>
       </form>
    </div>
</template>

<script>


    export default { // this is an object
        data: function() { // returns data object
        	return {
                quote: ''

        	}
        },
        methods: {
            createNewQuote() { //ES6 STYLE EMIT NEW QUOTE
                this.$emit('quoteAdded', this.quote); //emit quoteAdded event quote updated all the time emitted to parent
                this.quote = ''; //reset quote after

            }
        }
    }
</script>


<style>
</style>


<!--

two way binding on the text area between quote and quote in the data object.

added prevent to click method to stop default behavior of button sending stuff


 -->