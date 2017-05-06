import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_ERROR, AUTH_USER, UNAUTH_USER, SUBMIT_INTERESTS } from './types';

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
                    browserHistory.push('/select_interests');
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
        instance.post('http://localhost:8888/server/login.php', {username, password}).then(resp=>{
            console.log('Our response from the server ', resp.data);
            dispatch({
                type: AUTH_USER
            });
            if(resp.data === 0){
                console.log('Invalid Username');
            }
            else{
                console.log('User logged in');
                browserHistory.push('/recommended_events');
            }
        }).catch(err=>{
            console.log(err);
        });
    }

}

export function submit_interests( idArray ) {
    return function () {
        if(idArray.length >= 3) {
            instance.post('http://localhost:8888/server/insert_interests.php', {idArray}).then(resp => {
                console.log('Interests sent ', resp);

            }).catch(err => {
                console.log('not sent ', err);
            });
        }
    }
}