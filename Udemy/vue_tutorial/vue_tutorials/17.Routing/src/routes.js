import User from './components/user/User.vue';
import Home from './components/Home.vue';


export const routes = [ // holds routes in an array which holds objects with different routes

{path: '', component: Home}, // this gets loaded first as no path
{ path: '/user/:id', component: User }, //set up path
];