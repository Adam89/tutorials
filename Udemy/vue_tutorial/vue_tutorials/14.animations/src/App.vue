<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select name="" id="" v-model="alertAnimation" class="form-control">

                    <option value="fade">fade</option>
                    <option value="slide">slide</option>
                </select>
                <br>
                <button v-on:click="show = !show" class="btn btn-primary">Show Alert</button>
                <br><br>
                <transition v-bind:name="alertAnimation">
                <div v-if="show" class="alert alert-info">This is some info</div>
                </transition>
                <hr>
                <button v-on:click="showSlide = !showSlide" class="btn btn-primary">Show Alert Slide</button>
                <br><br>
                <transition v-bind:name="alertAnimation" type="animation">
                <div v-if="showSlide" class="alert alert-info">This is some info sliding</div>
                </transition>
                <hr>
                <button v-on:click="showLoad = !showLoad" class="btn btn-primary">Show Alert</button>
                <transition
                enter-active-class="animated bounce"
                leave-active-class="animated shake" appear>
                <div v-if="showLoad" class="alert alert-info">This is some info</div>
                </transition>
                <hr>
                 <button v-on:click="showMultiple = !showMultiple" class="btn btn-primary">Show Alert</button>
                <transition v-bind:name="alertAnimation" mode="out-in">
                <div v-if="showMultiple" class="alert alert-info" key="info">This is some info</div>
                <div v-else class="alert alert-warning" key="warning">Warning</div>
                </transition>
                <hr>
                <h1>Javascript transition</h1>
                <button class="btn btn-primary" v-on:click="load = !load">Load / Remove Element</button>
                <br><br>
                <transition v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                v-on:after-enter="afterEnter"
                v-on:enter-cancelled="afterEnter"
                v-on:before-leave="beforeLeave"
                v-on:leave="leave"
                v-on:after-leave="afterLeave"
                v-on:leave-cancelled="leaveCancelled">
                    <div class="jsAnimation" v-if="load">

                    </div>

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
                showSlide: false,
                showLoad: true,
                alertAnimation: 'fade',
                showMultiple: true,
                load: false
            }
        },
        methods: {
            beforeEnter(el) { //es6 we receive an arg its the element on which the animation is performed
                console.log('beforeEnter');

            },
            enter(el, done) {

                console.log('enter');
                done();
            },
            afterEnter(el) {
                console.log('afterEnter');
            },
            enterCancelled(el) {
                console.log('enterCancelled');
            },
            beforeLeave(el) { //es6 we receive an arg its the element on which the animation is performed
                console.log('beforeleave');

            },
            leave(el, done) {

                console.log('leave');
                done();
            },
            afterLeave(el) {
                console.log('afterleave');
            },
            leaveCancelled(el) {
                console.log('leaveCancelled');
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
    transition: opacity .1s;
}
.slide-leave {

}
.slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity .1s;
    opacity: 0;
}

.jsAnimation {
    width: 100px;
    height: 100px;
    background-color: red;
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
