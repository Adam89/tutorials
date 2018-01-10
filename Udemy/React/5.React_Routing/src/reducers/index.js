import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; //import reducer and assigns it to formReducer
import PostReducer from './reducer_posts';


const rootReducer = combineReducers({
  posts: PostReducer,
  form: formReducer // form reducer is being applied to the form piece of state. must always use form as key
});

export default rootReducer;


// import a reducer from redux form lib and hook it up to our combine reducer call it uses our instance of redux store to handle all the state emitted from the form. it just brings in loads of form actions

// each different piece of form state (element) will have a field component. A field component is creater for us my redux forms. All we need to do is tell redux form what type of input we want to recieve from the user. A radio button or text button. Then a user interacts with this input. Then redux form handles all these changes. allows us to not right boilerplate like set state etc. Once a user submits we pass two callbacks a validation call and then if valid handle form submittal. On valid submittal redux form then passes hands control back to us.