import { FETCH_LOCATION } from '../actions/types';

const default_state = {
    coords: null
};

export default function(state = default_state, action){
    switch(action.type){
        case FETCH_LOCATION:
            console.log('reducer:', action.payload);
            return {
                ...state,
                coords: action.payload
            };
        default:
            return state;
    }
}