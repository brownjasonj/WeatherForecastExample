import { combineReducers } from 'redux';

import BooksReducer from './books.reducer';

// The rootReducer is the overall application state is create from a set of "sub" states.
// Each "sub"-state is defined by an individal reducer, which is a funtion that returns 
// a state.
const rootReducer = combineReducers({
    // state: (state = {}) => state
    books: BooksReducer
});

export default rootReducer;