import axios from 'axios'

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=JUSTADAMSPOSTS1234'; // request exspects a key as a query string



export function fetchPosts() {

    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`); // add this as the payloads action
    return { // return object that has a type
        type: FETCH_POSTS,
        payload: request // redux promise middleware sorts out the promise for us so when it hits the reducer it will only contain the response
    };
}

// need to make api call install axios and redux promise wire redux promise as middleware to applymiddleare

// reducer will produce the post piece of state reducer will return the object with the kye as post ID and the corresponding post as a value

export function createPost(values, callback) {
    // gets blog post
    console.log('test');
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values).then(() => callback()); //on sucess use promise .then then call a callback

    return {
        type: CREATE_POST,
        payload: request
    };
}



export function fetchPost(id) { //recieves an id as the parameter
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return { // always return from action creater
        type: FETCH_POST,
        payload: request
    }
}

export function deletePost(id, callback) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(() => callback ());

    return {
        type: DELETE_POST,
        payload: id
    }
}