import axios from 'axios';
import { FETCH_EVENTS } from './types';

const MEETUP_URL = 'https://api.meetup.com/2/open_events?and_text=False&offset=0&format=json&lon=-117.79&limited_events=False&text_format=plain&photo-host=public&page=50&radius=10&lat=33.68&desc=False&status=upcoming&category=32';
const API_KEY = '&key=1012337b1a2c2a5974255a4412b237a';

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

export function fetchEvents(){
    return function(dispatch){
        axios.get(`${MEETUP_URL}${API_KEY}`).then((response) => {
            console.log('Meetup Response: ', response);

            dispatch({
                type: FETCH_EVENTS
            });
        }).catch((err) => {
            console.log('Error: ', err);
        });
    }
}