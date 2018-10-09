// independant of react

const redux = require('redux'); // node js syntax
const createStore = redux.createStore; // its a fn

const initialState = {
	counter: 0,
};

// reducer
const rootReducer = (state = initialState, action) => {
	// if undefined use intialstate
	if (action.type === 'INC_COUNTER') {
		return {
			...state,
			counter: state.counter + 1
		};
	}
	if (action.type === 'ADD_COUNTER') {
		return {
			...state,
			counter: state.counter + action.value
		};
	}
	return state;
};

// store

const store = createStore(rootReducer);
console.log(store.getState());


// subscription
store.subscribe(() => {
  console.log('SUBSCRIPTION', store.getState())
});

// action dispatching
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState());

