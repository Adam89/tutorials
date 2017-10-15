import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import {routes} from './routes'; //const name in the object

Vue.use(VueRouter); // routing added to application

const router = new VueRouter({ //pass object where i set up my router
	routes,// es6 key and value is the same routes: routes
	mode: 'history',// allows nicer url needs to return index.html from server
	scrollBehaviour(to, from, savedPosition) { // function exspects to get back and x and y or a selector
		if (savedPosition) {
			return savedPosition;
		}
		if (to.hash) { // hash has been set
		    return { selector: to.hash};
		    console.log('test');
		}
		// return { x: 0, y: 700 };
		}

});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


/*
 1. install vue router via NPM

 2. Register Routes in the main JS route instance either via an import

 3. each route needs a path which is appended to the domain

 4. <router-view></router-view> gets pushed in the app.vue component // please load component that has to be loaded here first view

 5. domain sent to server # allows us to configure paths and use them by the app to get rid of # you need to always return the index.html files allows us to parse url and gives nice route

 6. <router-link> replace A tags in vue router plugin  <router-link to="/user"

 7. use exact so it specifys and adds active to exact matches

 8. use tags to wrap routes in parent elements so you can set classes <router-link to="/user" tag="li" active-class="active"><a>User</a></router-link>

 9. this.$router allow us to access the router from within methods this.$router.push(SPECIFY PATH EITHER AS static OR OBJECT); pushes it on the stack of routes

 10.  path: '/user/:id can specify ID in the url

 11. this.$route.params.id router is router to navigate $route is active route with other methods such as params holds keys value pairs of route

 12: you have to watch if the router parameters change as different IDs might need different components using a watch to update the routes

 13. Nested routes and sub routes use children which is an array of routes objects you can leave the slash out in children to reflect full url path or put slash in to have domain/children

 14. you can dynamically bind paths v-bind:to="{path name}" can be object allows you to pass much more dynamic items v-bind:to="'/user/' + $route.params.id + '/edit'"

 14. you can pass a object also like this {name: 'userEdit', params: {id: $route.params.id}} with parameters as key value pairs and name set in routes.js

 15: Query strings you can add query as a property to the route object on v-bind:to <router-link tag="button" v-bind:to="{name: 'userEdit', params: {id: $route.params.id}, query:{locale: 'en', q: 100}}" if you have links which allow you to update the page without destroying the component then you will have to set a watcher to update the data on edit user component your able to send query parameters and send them and not just normal params you can also pass hash fragments to allow you to drop down to a hash anchor

 16. you can name your router views this allows you to specifically switch your layout around depending on routes reserve certain spots to dynamically render components there depend on which route

 17.star is a wildcard character which catches all other wrong urls basically a catch all redirect

 18.you can wrap a router view in a transition tag to animate it

19. scrollBehaviour can be set on the vue router which takes 3 args to from and savedPosition it exspects to return an object with x and y or a selector #DIV ELEMENT




*/