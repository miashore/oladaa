import { FETCH_WEATHER } from '../actions/types';

const default_state = {
    weather: {
        iconID: '01d',
        main_description: 'Clear sky',
        location: 'Orange County',
        iconImg: 'http://openweathermap.org/img/w/01d.png'
    }
};

export default function(state = default_state, action){
    switch(action.type){
        case FETCH_WEATHER:
            console.log('Weather Reducer: ', action.payload);
            return {
                ...state,
                weather: {
                    iconID: action.payload.weather[0].icon,
                    main_description: action.payload.weather[0].main,
                    location: action.payload.name,
                    iconImg: 'http://openweathermap.org/img/w/'+action.payload.weather[0].icon+'.png'
                }
            };
        default:
            return state;
    }
}