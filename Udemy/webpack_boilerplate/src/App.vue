<template>
    <div class="container">
            <testComponent></testComponent>
        </div>
</template>

<script>
//transferring data from parent to child we use PROPS short name for propertys. This means propertys set from outside
    import testTemplate from './components/testTemplate.vue';

    export default {
        components: {
            testComponent: testTemplate
        }
    }
</script>

<style  scoped>
   @import 'scss/_app.scss'
</style>


