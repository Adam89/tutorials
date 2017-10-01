import Vue from 'vue'
import App from './App.vue'

Vue.filter('calculateLength', (value) => {
    return value + " (" + value.length + ")";
});

Vue.mixin({
    created() {
        console.log('Global Mixin - Created Hook');
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})


/*

Make sure that you really understand the difference between filters (applied in the template, DOM updated whenever the bound value changes) and computed properties (set up in JS code, DOM updated only if one of their dependencies changes and hence would lead to a different result).

*/