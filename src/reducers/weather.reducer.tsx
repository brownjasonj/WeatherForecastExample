import {FETCH_WEATHER } from '../actions/index';

function weatherReducer(state: any = [], action: any) {
//    console.log("Action: " + action.payload.data);
    switch(action.type) {
        case FETCH_WEATHER:
            return [action.payload.data];
    }
    return state;
}

export { weatherReducer };