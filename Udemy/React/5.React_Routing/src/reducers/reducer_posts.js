import _ from 'lodash'
import { FETCH_POSTS } from '../actions/fetch_post';


export default function(state = {} , action) { // export previous state and new action default state is object
    switch (action.type) {
        case FETCH_POSTS:
        return _.mapKeys(action.payload.data, 'id'); // fetch initial list of posts transform array of objects into individual objects
        default:
            return state;
    }
}


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