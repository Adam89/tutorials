import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; //import reducer and assigns it to formReducer
import PostReducer from './reducer_posts';


const rootReducer = combineReducers({
  posts: PostReducer,
  form: formReducer // form reducer is being applied to the form piece of state. must always use form as key
});

export default rootReducer;


// import a reducer from redux form lib and hook it up to our combine reducer call it uses our instance of redux store to handle all the state emitted from the form. it just brings in loads of form actions