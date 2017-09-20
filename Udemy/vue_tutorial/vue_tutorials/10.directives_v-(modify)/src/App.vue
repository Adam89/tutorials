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
                <p v-highlight:background.delayed="'red'">
                Color this</p>
                <p v-localHighlight:background.delayed="'blue'">
                Color this</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    directives: { // this is an object and will still be attached using v-minus
        'localHighlight': {
            bind(el, binding, vnode) {
                var delay = 0;
                if (binding.modifiers['delayed']) { //modifiers is an array object if key exsits if we do then do something modfiers is an object because you are able to chain them it will only currently return true if it is set
                    delay = 3000;
                }
                setTimeout(() => {

                    if (binding.arg == 'background') { // arg allows us to get the info after the colon : on the directive
                        el.style.backgroundColor = binding.value;
                    } else {
                        el.style.color = binding.value;
                    }

                }, delay);
            }
        }
    }
};
</script>

<style>

</style>
