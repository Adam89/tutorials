<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters and Mixins</h1>
                <p>{{text | toUppercase | toLowerCase }}</p>
                <hr>
                <input type="text" name="" v-mode;="filterText" id="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() { // es6 {
            return {
                text: 'Hello Adam',
                fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
                filterText: ''
            }
        },
        filters: { //locally to the component
            toUppercase(value) {
                return value.toUpperCase(); // uses angular piping
            }
        }
    }
</script>

<style>

</style>
