import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import eventReducer  from './event_reducer';
import authReducer from './auth_reducer';
import locationReducer from './location_reducer';
import fitbitReducer from './fitbit_reducer';
// import interestsReducer from './interests_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    events: eventReducer,
    location: locationReducer,
    fitbit: fitbitReducer
    // interests: interestsReducer
});

export default rootReducer;