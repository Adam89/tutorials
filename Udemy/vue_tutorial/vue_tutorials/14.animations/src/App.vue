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
                v-on:leave-cancelled="leaveCancelled" :css="false">
                    <div class="jsAnimation" v-if="load">

                    </div>

                </transition>
                <hr>
                <button class="btn btn-primary" v-on:click="selectedComponent == 'appSucessAlert' ? selectedComponent = 'appDanagerAlert' : selectedComponent = 'appSucessAlert' ">Toggle Components</button>
                <hr>
                <transition name="fade" mode="out-in">
                <component v-bind:is="selectedComponent"></component>
                 </transition>
                 <hr>
                 <button class="btn btn-primary" v-on:click="addItem">Add Item</button>
                 <hr>

                 <ul class="list-group">
                    <transition-group name="slide">
                     <li class="list-group-item"
                     v-for="(number, indexy) in numbers"
                     v-on:click="removeItem(index)" v-bind:key="number">{{number}}</li>
                    </transition-group>
                 </ul>

            </div>
        </div>
    </div>
</template>

<script>

import danagerAlert from './dangerAlert.vue';
import sucessAlert from './sucessAlert.vue';

    export default {
        data() {
            return {
                show: false,
                showSlide: false,
                showLoad: true,
                alertAnimation: 'fade',
                showMultiple: true,
                load: false,
                elementWidth: 100,
                selectedComponent: 'appSucessAlert',
                numbers: [1,2,3,4,5]
            }
        },
        methods: {
            beforeEnter(el) { //es6 we receive an arg its the element on which the animation is performed
                console.log('beforeEnter');
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';

            },
            enter(el, done) { // animate
                let round = 1;
                const interVal = setInterval(() => {
                    el.style.width = (this.elementWidth + round * 10) + 'px';
                    round ++;
                    if (round > 20 ){
                        clearInterval(interVal);
                        done();
                    }
                }, 20);
                console.log('enter');
            },
            afterEnter(el) {
                console.log('afterEnter');
            },
            enterCancelled(el) {
                console.log('enterCancelled');
            },
            beforeLeave(el) { //es6 we receive an arg its the element on which the animation is performed
                console.log('beforeleave');
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';

            },
            leave(el, done) { //animate
                console.log('leave');
                let round = 1;
                 const interVal = setInterval(() => {
                    el.style.width = (this.elementWidth - round * 10) + 'px';
                    round ++;
                    if (round > 20 ){
                        clearInterval(interVal);
                        done();
                    }
                }, 20);
            },
            afterLeave(el) {
                console.log('afterleave');
            },
            leaveCancelled(el) {
                console.log('leaveCancelled');
            },
            addItem() {
                const pos = Math.floor(Math.random() * this.numbers.length); // get a random position gives random number multiplied by length combined with math floor will give me a number between 0 and the highest index in the array
                this.numbers.splice(pos, 0, this.numbers.length + 1); // splice at position don't remove and add new element to array at POS
            },
            removeItem(index) {
                this.numbers.splice(index, 1);
            }
        },
        components: {
            appDanagerAlert: danagerAlert,
            appSucessAlert: sucessAlert
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
    position: absolute;
}
.slide-move {
    transition: transform 1s;
}

.jsAnimation {
    width: 300px;
    height: 100px;
    background-color: red;
}
.list-group-item {
    cursor: pointer;
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
