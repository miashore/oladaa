import { FETCH_WEATHER } from '../actions/types';

const default_state = {
    weather: {
        background: '',
        summary: '',
        timezone: ''
    }
};

export default function(state = default_state, action){
    switch(action.type){
        case FETCH_WEATHER:
            let bkgdImg = null;
            switch(action.payload.currently.icon){
                case 'clear-day':
                case 'clear-night':
                    bkgdImg = 'clearday.jpg';
                    break;
                case 'rain':
                    bkgdImg = 'drizzle.jpg';
                    break;
                case 'snow':
                    bkgdImg = 'snow.jpg';
                    break;
                case 'wind':
                    bkgdImg = 'wind.jpeg';
                    break;
                case 'fog':
                    bkgdImg = 'mist.jpg';
                    break;
                case 'cloudy':
                    bkgdImg = 'cloudy.jpg';
                    break;
                case 'partly-cloudy-day':
                case 'partly-cloudy-night':
                    bkgdImg = 'clear.jpg';
                    break;
                default:
                    bkgdImg = 'default2.jpg';
            }
            return {
                ...state,
                weather: {
                    background: bkgdImg,
                    summary: action.payload.currently.summary,
                    timezone: action.payload.timezone
                }
            };
        default:
            return state;
    }
}