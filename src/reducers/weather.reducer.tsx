import {FETCH_WEATHER } from '../actions/index';

function weatherReducer(state: any = [], action: any) {
    if (action) {
        console.log("Action " + action.type);
    }

    switch(action.type) {
        case "FETCH_WEATHER_FULFILLED": {
            console.log("Action: " + action.payload.data);
            return [action.payload.data, ...state];
        }
    }
    return state;
}

export { weatherReducer };