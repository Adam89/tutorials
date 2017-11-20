import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
	books: BooksReducer // object with key and value key is the name of the state


});

export default rootReducer;



/*
------------------------------------------- Redux ------------------------------------

predictable state container for JS applications -
keep the data and the views seperate they combine to make a fully working app
redux is the wrapper for the data whilst react is the wrapper for the view layer
centralise all the apps data into a central single object which is reffered to as the state this is managed by redux. application level state is redux.
on a counter redux keeps track of current count where as react creates the video for the counter add button remove button.

most important part is how to design your state in terms of thinking how to model the state

Container: is a react component that has a direct connection to the state managed by redux its the bridge between the views and redux. Most parent component should be container but be careful as sometimes app doesn't care about the state sometimes. Only create containers out of particular components that care about a particular bit of state.The most parent component

------------------------------------------- Reducer ------------------------------------

A reducer is a function that returns a piece of the applications state because the app can have many states we can have loads of reducers. Books and active books would be two reducers. They are smart components

------------------------------------------- Redux ------------------------------------
*/