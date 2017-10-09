import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import {routes} from './routes'; //const name in the object

Vue.use(VueRouter); // routing added to application

const router = new VueRouter({ //pass object where i set up my router
	routes,// es6 key and value is the same routes: routes
	mode: 'history'// allows nicer url needs to return index.html from server

})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


/*
 1. install vue router via NPM

 2. Register Routes in the main JS route instance either via an import

 3. each route needs a path which is appended to the domain

 4. <router-view></router-view> gets pushed in the app.vue component // please load component that has to be loaded here

 5. domain sent to server # allows us to configure paths and use them by the app to get rid of # you need to always return the index.html files allows us to parse url and gives nice route

 6. <router-link> replace A tags in vue router plugin  <router-link to="/user"

 7. use exact so it specifys and adds active to exact matches

 8. use tags to wrap routes in parent elements so you can set classes <router-link to="/user" tag="li" active-class="active"><a>User</a></router-link>

 9. this.$router allow us to access the router from within methods this.$router.push(SPECIFY PATH EITHER AS static OR OBJECT); pushes it on the stack of routes

 10.  path: '/user/:id can specify ID in the url

 11. this.$route.params.id router is router to navigate $route is active route with other methods such as params holds keys value pairs of route
*/