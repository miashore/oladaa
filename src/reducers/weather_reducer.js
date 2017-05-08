import { FETCH_WEATHER } from '../actions/types';

const default_state = {
    weather: null
};

export default function(state = default_state, action){
    switch(action.type){
        case FETCH_WEATHER:
            console.log('Weather Reducer: ', action.payload, action.payload);
            return {
                ...state,
                weather: action.payload
            };
        default:
            return state;
    }
}