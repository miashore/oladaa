import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_ERROR, AUTH_USER, UNAUTH_USER } from './types';

export function register_user({ username, password, email }) {
    return function (dispatch) {
        axios.post('./backend/server/register.php', {username, password, email}).then(resp=> {
            console.log(resp);
            dispatch({
                type: AUTH_USER
            });
            console.log('Our response from register.php ', resp);
            axios.post('./backend/server/login.php', {username, password}).then(resp => {
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
        axios.post('../server/login.php', {username, password}).then(resp=>{
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