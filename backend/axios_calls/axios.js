// var username = 'Sean';
// var password = 'Munchen*86';

//**********************************************************************************************************************

//axios call for getting mock data from our user personas.  Will return an object that contains the three users and each
//user will have three different properties; fatBurn, cardio, and peak.


/*axios.get('../mock_data/mockData.json').then(resp=>{
    console.log(resp.data);
});*/

//**********************************************************************************************************************

//axios call for verifying login information.  Send the username and password to login.php and check for their
//existence in our database, it returns a 1 for true and a 0 for false.


/*axios.post('../user_verification_php/login.php', {username, password}).then(resp=>{
    console.log('Our response from the server ', resp.data);
    if(resp.data === 0){
        document.writeln('Invalid Username');
    }
    else{
        document.writeln('User logged in');
    }
}).catch(err=>{
    console.log(err);
});*/

//**********************************************************************************************************************

//axios call for registering a new user.  Send the new users username, password, and email to register.php.  If the
// username or email already exists, or not all fields are filled it will return an error message of user registration
// failed.

/*var username = 'Bob';
var password = 'HiImBob';
var email = "bob@beativities.com";

axios.post('../user_verification_php/register.php', {username, password, email}).then(resp=>{
    console.log('Our response from register.php ', resp);
});*/


