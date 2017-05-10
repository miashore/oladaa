import { FETCH_EVENTS, STORE_INTERESTS, LOAD_SPINNER } from '../actions/types';

const default_state = {
    all: [],
    categories: ['Sports & Fitness', 'Dance', 'Outdoors & Adventures', 'Health & Wellness', 'Music', 'Pets', 'Social', 'Photography', 'Arts', 'Hobbies & Crafts', 'Sci-Fi & Games', 'Film'],
    recommendedEvents: [],
    single: null,
    ready: false
};

export default function(state = default_state, action){
    switch(action.type){
        case FETCH_EVENTS:
            return {
                ...state,
                all: [...state, action.payload],
                ready: true
            };
        case STORE_INTERESTS:
            return {
                ...state,
                categories: [...state, action.payload]
            };
        case LOAD_SPINNER:
            return {
                ...state,
                ready: false
            };
        default: return state;
    }
}