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
                <p v-localHighlight:background.delayed.blink="{mainColor: 'orange', secondColor: 'purple', delay:500}">
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
                if (binding.modifiers['blink']) { // set timeout with interval that alternates between two colors
                    let mainColor = binding.value.mainColor; // acess from object above
                    let secondColor = binding.value.secondColor;
                    let currentColor = mainColor;
                    setTimeout(() => {
                        setInterval(() => {
                            currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor; // if current color equals second color if true then current color is main color otherwise current color should be second color
                            if (binding.arg == 'background') {
                                el.style.backgroundColor = currentColor;
                            } else {
                                el.style.color = currentColor;
                            }
                        }, binding.value.delay);


                    }, delay);
                } else {
                    setTimeout(() => {

                        if (binding.arg == 'background') { // arg allows us to get the info after the colon : on the directive
                            el.style.backgroundColor = binding.value.mainColor;
                        } else {
                            el.style.color = binding.value.mainColor;
                        }

                    }, delay);
                }
            }
        }
    }
};
</script>

<style>

</style>
