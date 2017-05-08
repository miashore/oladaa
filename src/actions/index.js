import axios from 'axios';
import $ from 'jquery';
import { browserHistory } from 'react-router';
import { AUTH_ERROR, AUTH_USER, UNAUTH_USER, FETCH_EVENTS, SAVE_LOCATION, FETCH_WEATHER, STORE_INTERESTS } from './types';


const instance = axios.create({
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});

//const base_url = 'http://localhost:8888/server';
const base_url = './backend/server';

export function register_user({ username, password, email }) {
    return function (dispatch) {
        instance.post(`${base_url}/register.php`, {username, password, email}).then(resp=> {
            dispatch({
                type: AUTH_USER
            });
            console.log('Our response from register.php ', resp.data);
            if(resp.data["error"]){
                console.log("registration failed")
            }
            else {
                instance.post(`${base_url}/login.php`, {username, password}).then(resp => {
                    console.log('Our response from login.php ', resp.data);
                    if (resp.data === 0) {
                        console.log('Invalid Username/Password');
                    }
                    else {
                        console.log('User logged in');
                        browserHistory.push('/welcome_user');
                    }
                }).catch(err => {
                    console.log('error:', err);
                    dispatch({
                        type: AUTH_ERROR,
                    });
                });
            }
        });
    }
}

export function login_user({ username, password}) {
    return function (dispatch) {
        instance.post(`${base_url}/login.php`, {username, password}).then(resp=>{
            console.log('Our response from the server ', resp.data);
            dispatch({
                type: AUTH_USER
            });
            if(resp.data === 0){
                console.log('Invalid Username');
            }
            else{
                console.log('User logged in');
                browserHistory.push('/welcome_user');
            }
        }).catch(err=>{
            console.log(err);
        });
    }
}

//const MEETUP_URL = 'https://api.meetup.com/2/open_events?and_text=False&offset=0&format=json&lon=-117.79&limited_events=False&text_format=plain&photo-host=public&page=50&radius=10&lat=33.68&desc=False&status=upcoming&category=32';
const MU_KEY = '&key=1012337b1a2c2a5974255a4412b237a';
const category_id = 32;

export function fetchEvents(coords){
    console.log('Coords: ', coords);

    const lat = coords.latitude;
    const long = coords.longitude;

    return function(dispatch){

        $.ajax({
            dataType: 'jsonp',
            crossDomain: true,
            method: 'GET',
            url: 'https://api.meetup.com/2/open_events?and_text=False&offset=0&format=json&lon='+long+'&limited_events=False&text_format=plain&photo-host=public&page=50&radius=10&lat='+lat+'&desc=False&status=upcoming&category='+category_id+MU_KEY,
        success: function(response){
                console.log('Success Response: ', response);
                dispatch({
                    type: FETCH_EVENTS,
                    payload: response.results
                });
            },
            error: function(response){
                console.log('Error: ', response);
            }
        });
    };
}

export function storeUserLocation(location){
        return {
            type: SAVE_LOCATION,
            payload: location
        };
}

export function submit_interests( idArray ) {
    return function () {
        if(idArray.length >= 3) {
            instance.post(`${base_url}/insert_interests.php`, {idArray}).then(resp => {
                console.log('Interests sent ', resp);

            }).catch(err => {
                console.log('not sent ', err);
            });
        }
    }
}

export function fetch_weather( ) {
    const API_KEY = '0cb0c630afe33bff7e69f24de512c0f0'; //openweather api
    const irvine = {
        lat: 33.68,
        long: -117.79
    };
    const boulder = {
        lat: 40.014986,
        long: -105.270546
    };
    const london = {
        lat: 51.507351,
        long: -0.127758
    };
    const tokyo = {
        lat: 35.68,
        long: 139.69
    };

   return function (dispatch){
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?APPID='+API_KEY+'&lat='+irvine.lat+'&lon='+irvine.long,
            type: 'GET',
            success: function(response){
                console.log('Response: ', response);
                dispatch({
                    type: FETCH_WEATHER,
                    payload: weather
                });
            },
            error: function(error){
                console.log('Error: ', error)
            }
        });
    }
}

export function storeInterests(interests){
    return {
        type: STORE_INTERESTS,
        payload: interests
    }
}