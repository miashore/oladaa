import { FETCH_EVENTS, STORE_INTERESTS, LOAD_SPINNER, VIEW_ALL, EXPAND_CAT } from '../actions/types';

const default_state = {
    all: [],
    categories: [
        {name: 'Sports & Fitness', id: 32, events: []},
        {name: 'Dance', id: 5, events: []},
        {name: 'Outdoors & Adventures', id: 23, events: []},
        {name: 'Health & Wellness', id: 14, events: []},
        {name: 'Music', id: 21, events: []},
        {name: 'Pets', id: 26, events: []},
        {name: 'Social', id: 31, events: []},
        {name: 'Photography', id: 27, events: []},
        {name: 'Arts', id: 1, events: []},
        {name: 'Hobbies & Crafts', id: 15, events: []},
        {name: 'Sci-Fi & Games', id: 29, events: []},
        {name: 'Film', id: 20, events: []}
    ],
    recommendedEvents: [],
    single: null,
    ready: false,
    viewall: {},
    expander: true
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
            const { viewall } = state;
            viewall[action.catIndex] = action.payload;
            return { ...state, viewall: { ...viewall } };
        case EXPAND_CAT:
            return {
                ...state,
                expander: false
            };
        default: return state;
    }
}