<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <button v-on:click="show = !show" class="btn btn-primary">Show Alert</button>
                <br><br>
                <transition name="fade">
                <div v-if="show" class="alert alert-info">This is some info</div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false
            }
        }
    }
</script>

<style>
.fade-enter {
    opacity: 0;
}
.fade-enter-active {
    transition: opacity 2s;
}
.fade-leave {

}
.fade-leave-active {
    transition: opacity 2s;
    opacity: 0;
}
</style>
