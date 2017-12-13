import { FETCH_WEATHER } from '../actions/index' //import fetch weather action 

export default function(state = [ ], action) { //just a function default state is null
    console.log('action recieved', action); // take action and console.log
    switch (action.type) { // only use fetch weather action
        case FETCH_WEATHER: 
        return [ action.payload.data, ...state ]; // handle payload by putting into an array multiple cities returning a new version of our state
    }
    return state
}





//-- -- -- -- -- -- -- -- -- --Redux-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

// never mutate state for redux like state.push( action.payload.data ) // we need to return a new instance of state in the reducer old weather data + new weather data