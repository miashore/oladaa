import { FETCH_EVENTS, STORE_INTERESTS } from '../actions/types';

const default_state = {
    all: [],
    categories: ['Sports & Fitness', 'Dance', 'Outdoors & Adventures', 'Health & Wellness', 'Music', 'Pets', 'Social', 'Photography', 'Arts', 'Hobbies & Crafts', 'Sci-Fi & Games', 'Film'],
    recommendedEvents: [],
    single: null
};

export default function(state = default_state, action){
    switch(action.type){
        case FETCH_EVENTS:
            return {
                ...state,
                all: [...state, action.payload]
            };
        case STORE_INTERESTS:
            return {
                ...state,
                categories: [...state, action.payload]
            };
        default: return state;
    }
}