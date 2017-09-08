<template>
    <div class="row">
        <div class="col-sm-12">
            <h3>Quotes added</h3>
            <div class="progress">
                <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" v-bind:style="{width: (quoteCount / maxQuotes) * 100 + '%'} ">
                    {{quoteCount}} / {{maxQuotes}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
	props: ['quoteCount', 'maxQuotes']
}

</script>

<style>

</style>







<!--

this uses a bootstrap progress bar. we have to adjust the width of inner most div to control where it sits

need two props the amount of quotes and the max quote limit. Do the math in the template to work out width and then pass the data
 -->