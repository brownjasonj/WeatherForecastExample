import { combineReducers } from 'redux';

import { weatherReducer} from './weather.reducer';


// state argument is not Application state, but only the Container state
// that it is bound too.
function defaultReducer(state: any = null, action: any) {
    return state;
}

// The rootReducer is the overall application state is create from a set of "sub" states.
// Each "sub"-state is defined by an individal reducer, which is a funtion that returns 
// a state.
const reducers = combineReducers({
    weather: weatherReducer
});

export {reducers};