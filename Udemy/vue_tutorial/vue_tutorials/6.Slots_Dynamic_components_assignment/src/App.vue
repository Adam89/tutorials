<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" v-on:click="activeComponent = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" v-on:click="activeComponent = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" v-on:click="activeComponent = 'appRed'">Load Red Template</button>
                <hr>
<!--                 <app-blue>
                    <p>This is the blue content</p>
                </app-blue>
                <app-green>
                    <p>This is green content</p>
                </app-green>
                <app-red>
                    <p>This is red content</p>
                </app-red> -->

                <component v-bind:is="activeComponent"><p>This is red content</p></component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
            return { //object
                activeComponent: 'appRed'
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
