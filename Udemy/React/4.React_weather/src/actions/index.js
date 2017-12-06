import axios from 'axios';

const API_KEY = '1e50ec688d4209ad43d55f71bf269888';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=
${API_KEY}`;
//1.create action creator to fetch weather data
export const FETCH_WEATHER = 'FETCH_WEATHER'; // extract to variable and export use variable below to keep our actions types consistent betweeon actions and reducers. 

export function fetchWeather(cityName) { // always pass cityame

    const url = `${ROOT_URL}&q=${cityName},us`;
    // console.log(url);
    const request = axios.get(url); // make get request using URL 
    // console.log('Request:', request);
    return {
        type: FETCH_WEATHER,
        payload: request // payload is additional info that gets passed with action return promise on payload
    }
}



// doing ajax requests in redux is tricky. 

// -------------------- Middlewares -------------------------------------

// Middlewares are functions that take an action depending on action type or payload or factor the middleare can manipulate the action let it pass or stop it based on these factors. They are gatekeepers. 

// use the popular package called redux promise redux promise see this incoming action looks at payload if payload is promise redux promise stops the action. unwraps promise and passes to reducer as payload

//-- -- -- -- -- -- -- -- -- --Middlewares-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -


// promise doesn't 