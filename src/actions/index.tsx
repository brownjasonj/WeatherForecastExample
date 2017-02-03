import axios from 'axios';

const API_KEY: string = "b34037c48d2a927f6e3948abd61eba67";
const ROOT_URL: string = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

const FETCH_WEATHER: string = "FETCH_WEATHER";

function fetchWeather(city: string, countrycode: string) {
    const url = `${ROOT_URL}&q=${city},${countrycode}`;
    const requestPromise = axios.get(url);

    console.log("Request: " + requestPromise);
    return {
        type: FETCH_WEATHER,
        payload: requestPromise
    };
}

export {fetchWeather, FETCH_WEATHER};