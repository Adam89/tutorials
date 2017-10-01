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
                <hr>
                <button v-on:click="showSlide = !showSlide" class="btn btn-primary">Show Alert Slide</button>
                <br><br>
                <transition name="slide" type="animation">
                <div v-if="showSlide" class="alert alert-info">This is some info sliding</div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
                showSlide: false
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
.slide-enter {
    opacity: 0;
}
.slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
}
.slide-leave {

}
.slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity .3s;
    opacity: 0;


}
@keyframes slide-in {
    from {
    transform: translateY(20px);
    }
    to
    {
       transform: translateY(0px);
    }
}
@keyframes slide-out {
    from {
    transform: translateY(0px);
    }
    to
    {
    transform: translateY(20px);
    }
}

</style>
