import User from './components/user/User.vue';
import Home from './components/Home.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import Header from './components/Header.vue';


export const routes = [ // holds routes in an array which holds objects with different routes

{path: '', component: Home, name:'home', components:{
	default: Home,
	'header-top': Header
}}, // this gets loaded first as no path


{ path: '/user', component: User, components:{
	default: User, //default component
	'header-bottom': Header
},

children: [
//sub components to user component
	{path: '', component: UserStart }, //loads user start on user component
	{path: ':id', component: UserDetail, beforeEnter: (to,from,next) => {
		console.log('inside a route setup');
		next();
	}},
	{path: ':id/edit', component: UserEdit, name: 'userEdit' },
		]
	},
	{
		path:'/redirect-me', redirect: '/user' //specify a path to redirect the user
	},
	{path: '*', redirect: '/'} // star is a wildcard character which catches all other wrong urls catch all redirect

];