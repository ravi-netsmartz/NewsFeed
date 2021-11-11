// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import newsFeedReducer from './newsFeedReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
    newsFeedReducer: newsFeedReducer,
});

// Exports
export default rootReducer;