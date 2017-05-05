// import axios from 'axios';
// import { browserHistory } from 'react-router';
// import { REGISTER_USER } from './types';
//
// const username = 'Dan';
// const password = 'HiImDan';
// const email = "dan@beativities.com";
//
// export function register_user() {
//
//     axios.post('../../../backend/server/register.php', {username, password, email}).then(resp=>{
//         dispatch({
//             type: REGISTER_USER
//         });
//
//     console.log('Our response from register.php ', resp);
//
//     axios.post('../../../backend/server/login.php', {username, password}).then(resp=>{
//         console.log('Our response from the server ', resp.data);
//         if(resp.data === 0){
//             console.log('Invalid Username');
//         }
//         else{
//             console.log('User logged in');
//         }
//     }).catch(err=>{
//         console.log(err);
//     });
// });
//
// }