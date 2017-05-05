import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_ERROR, AUTH_USER, UNAUTH_USER, FETCH_EVENTS } from './types';

const instance = axios.create({
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});

export function register_user({ username, password, email }) {
    return function (dispatch) {
        instance.post('http://localhost:8888/server/register.php', {username, password, email}).then(resp=> {
            console.log(resp);
            dispatch({
                type: AUTH_USER
            });
            console.log('Our response from register.php ', resp);
            instance.post('http://localhost:8888/server/login.php', {username, password}).then(resp => {
                console.log('Our response from the server ', resp.data);
                if (resp.data === 0) {
                    console.log('Invalid Username');
                }
                else {
                    console.log('User logged in');
                }
            }).catch(err => {
                console.log('error:', err);
                dispatch({
                    type: AUTH_ERROR,
                });
            });
        });
    }
}

export function login_user({ username, password}) {
    return function (dispatch) {
        instance.post('http://localhost:8888/server/register.php', {username, password}).then(resp=>{
            console.log('Our response from the server ', resp.data);
            dispatch({
                type: AUTH_USER
            });
            if(resp.data === 0){
                console.log('Invalid Username');
            }
            else{
                console.log('User logged in');
            }
        }).catch(err=>{
            console.log(err);
        });
    }

}

const MEETUP_URL = 'https://api.meetup.com/2/open_events?and_text=False&offset=0&format=json&lon=-117.79&limited_events=False&text_format=plain&photo-host=public&page=50&radius=10&lat=33.68&desc=False&status=upcoming&category=32';
const API_KEY = '&key=1012337b1a2c2a5974255a4412b237a';

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