import { FETCH_EVENTS, STORE_INTERESTS, LOAD_SPINNER, VIEW_ALL } from '../actions/types';

const default_state = {
    all: [],
    categories: [
        {name: 'Sports & Fitness', id: 32},
        {name: 'Dance', id: 5},
        {name: 'Outdoors & Adventures', id: 23},
        {name: 'Health & Wellness', id: 14},
        {name: 'Music', id: 21},
        {name: 'Pets', id: 26},
        {name: 'Social', id: 31},
        {name: 'Photography', id: 27},
        {name: 'Arts', id: 1},
        {name: 'Hobbies & Crafts', id: 15},
        {name: 'Sci-Fi & Games', id: 29},
        {name: 'Film', id: 20}
    ],
    recommendedEvents: [],
    single: null,
    ready: false,
    viewall: [],
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
        case VIEW_ALL:
            return {
                ...state,
                viewall: [...state, action.payload]
            };
        default: return state;
    }
}