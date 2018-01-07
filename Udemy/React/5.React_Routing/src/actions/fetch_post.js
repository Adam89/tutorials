import axios from 'axios'

export const FETCH_POSTS = 'fetch_posts';

export function fetchPosts() {
    const ROOT_URL ='http://reduxblog.herokuapp.com/api/';
    const API_KEY = '?key=JUSTADAMSPOSTS1234'; // request exspects a key as a query string
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`); // add this as the payloads action
    return { // return object that has a type
        type: FETCH_POSTS,
        payload: request // redux promise middleware sorts out the promise for us so when it hits the reducer it will only contain the response
    };
}

// need to make api call install axios and redux promise wire redux promise as middleware to applymiddleare

// reducer will produce the post piece of state reducer will return the object with the kye as post ID and the corresponding post as a value