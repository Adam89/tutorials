<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p>{{ 'Some text reversed' | reverse }}</p>
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p>{{ 'Adam' | calculateLength }} </p>
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <p>{{ reversed }}</p>
                <p>{{ calcLength }} </p>

                <p>{{ testFunction }} </p>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>

import {lengthAwareMixin} from './lengthAwareMixin';

    export default {
        mixins:[lengthAwareMixin],
        data() {
            return {
                firstText: 'Some text reversed computed' ,
                secondText: 'Adam computed'
            }
        },
        filters: {
            reverse(value) { //method
                return value.split("").reverse().join("");
                // you have to split into individual characters in an array then reverse then join
            }
        },
        computed: {
            reversed() {
                return this.firstText.split("").reverse().join("")
            },
            calcLength() {
                return this.secondText + " (" + this.secondText.length + ")";
            }
        },
    }
</script>

<style>
</style>
