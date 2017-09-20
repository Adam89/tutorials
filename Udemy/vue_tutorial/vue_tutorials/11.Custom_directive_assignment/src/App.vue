<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-customOn:click="clicked" class="btn btn-primary">Click me motherfucker</button>
                <hr>
                <div style="width:100px; height: 100px; background-color: red;" v-customOn:mouseenter="mouseEnter" v-customOn:mouseleave="mouseLeave"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            customOn: {
                bind(el, binding) { // you have acess to the html el with first arg This allows you to do EVERYTHING you can do in vanilla JS with a HTML element
                    // el.onclick = function() {
                    //     binding.value();  // you can call the function above like this
                    // }
                    const type = binding.arg; // click event j
                    const functionInit = binding.value; // function call
                    el.addEventListener(type,functionInit) // no need to pass functionc all parenthese
                }
            }
        },
        methods: {
            clicked() {
                alert('I was clicked');
            },
            mouseEnter() {
                alert('mouseEnter');
            },
            mouseLeave() {
                alert('mouseLeave');
            }
        }
    }
</script>

<style>
</style>
