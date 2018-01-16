import _ from 'lodash'
import { FETCH_POSTS, DELETE_POST, FETCH_POST } from '../actions/fetch_post';

// add to app level state
export default function(state = {} , action) { // export previous state and new action default state is object
    switch (action.type) {
        case DELETE_POST: 
        return _.omit(state, action.payload); // look at state if state has key of post id omit it from obect and return new state object  
        case FETCH_POSTS:
        return _.mapKeys(action.payload.data, 'id'); // fetch initial list of posts transform array of objects into individual objects
        case FETCH_POST:
        // we get an object we need to add to the already established state
         // comibine exsiting state with our new object new key value paird where the key is the id and value is the post we want to fetch // take new state add id and set equal to post then return new state
            return  { ...state, [action.payload.data.id]: action.payload.data}; //es6 way of doing key value pairs and mergins with exsiting state object
        default:
            return state;
    }
};


// reducer will produce the post piece of state reducer will return the object with the kye as post ID and the corresponding post as a value

// use lodash library to manipulate array values into an object _.mapKeys is the method that transform an array of objects into individual objects. First argument passed to it is an array second arg is a string to pull out a value as the key for the new object 

/*
const posts = [
    {id: 1, title: 'yes'},
      {id: 2, title: 'maybe'},
    {id: 3, title: 'no'}
  ]
  
  posts
  
  
  _.mapKeys(posts,'id')
  returns this 
    {
        "1":{"id":1,"title":"yes"},
        "2":{"id":2,"title":"maybe"},
        "3":{"id":3,"title":"no"}
    }
  */

// const post = action.payload.data;
// const newState = { ...state };
// // we get an object we need to add to the already established state
// // comibine exsiting state with our new object new key value paird where the key is the id and value is the post we want to fetch
// newState[post.id] = post; // take new state add id and set equal to post then return new state
// return {
//     newState
// };