<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built in Directives that VUE JS ships with</h1>
				<p v-text="'Some text'"></p>
				<p v-html="'<strong>Some text<strong>'"></p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives in VUE JS</h1>
				<p v-highlight="'red'">Color this</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style>

</style>
