// import axios from 'axios';
// import { REGISTER_USER } from './types';
//
// const username = 'Dan';
// const password = 'HiImDan';
// const email = "dan@beativities.com";
//
// axios.post('../server/register.php', {username, password, email}).then(resp=>{
//     console.log('Our response from register.php ', resp);
//     axios.post('../server/login.php', {username, password}).then(resp=>{
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
// export function register_user() {
//     return {
//         type: REGISTER_USER,
//         payload:
//     }
// }