import { FETCH_EVENTS } from '../actions/types';

const default_state = {
    all: [],
    single: null
};

export default function(state = default_state, action){
    switch(action.type){
        case FETCH_EVENTS:
            return {
                ...state,
                all: [...state, action.payload]
            };
        default: return state;
    }
}