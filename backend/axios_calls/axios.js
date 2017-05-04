
//axios call for getting mock data from our user personas.  Will return an object that contains the three users and each
//user will have three different properties; fatBurn, cardio, and peak.  It then passes that into our activity score
//formula to calculate the users activity level/score.


/*axios.get('../mock_data/mockData.json').then(resp=>{
    console.log(resp.data['Ellie']);
    const userStats = resp.data['Ellie'];
    const fatBurnMin = parseInt(userStats.fatBurn);
    const cardioMin = parseInt(userStats.cardio);
    const peakMin = parseInt(userStats.peak);
    console.log(getActivityScore(fatBurnMin, cardioMin, peakMin));
}).catch(err=>{
    console.log("User not found ", err)
});
function getActivityScore(fatBurnMin, cardioMin, peakMin){
    const fatBurnScore = fatBurnMin*2;
    const cardioScore = cardioMin*3;
    const peakScore = peakMin*4;
    const totalScore = (fatBurnScore+cardioScore+peakScore);
    const totalMin = 60+(fatBurnMin+cardioMin+peakMin);
    let activityScore = totalScore/totalMin;
    if (activityScore >= 0 && activityScore < 2){
        activityScore = Math.round(activityScore);
    }
    else if(activityScore > 2){
        activityScore = 2;
    }
    else{
        activityScore = 'Invalid Inputs'
    }
    return activityScore
}*/

//**********************************************************************************************************************

//axios call for verifying login information.  Send the username and password to login.php and check for their
//existence in our database, it returns a 1 for true and a 0 for false.

/*const username = 'Sean';
const password = 'Munchen*86';

axios.post('../user_verification_php/login.php', {username, password}).then(resp=>{
    console.log('Our response from the server ', resp.data);
    if(resp.data === 0){
        console.log('Invalid Username');
    }
    else{
        console.log('User logged in');
    }
}).catch(err=>{
    console.log(err);
});*/

//**********************************************************************************************************************

//axios call for registering a new user.  Send the new users username, password, and email to register.php.  If the
// username or email already exists, or not all fields are filled it will return an error message of user registration
// failed.

/*const username = 'Ellie';
const password = 'HiImEllie';
const email = "ellie@beativities.com";

axios.post('../user_verification_php/register.php', {username, password, email}).then(resp=>{
    console.log('Our response from register.php ', resp);
});*/

//**********************************************************************************************************************

//axios call for inserting interests into the request table of our database.  activity ID's are inserted into an array
//that is looped through in our php file.  User ID is retained in our session.

/*const user_id = 7;
const activity_id = [2,8];

axios.post('../user_verification_php/insert_interests.php', {user_id, activity_id}).then(resp=>{
    console.log('Our interests being sent ', resp.data);
}).catch(err=>{
    console.log('not sent ', err);
});*/

//**********************************************************************************************************************

/*const user_id = 3;
const activity_score = 2;
axios.post('../user_verification_php/get_interests.php',{user_id, activity_score}).then(resp=>{
    for(let i=0; i<resp.data.length; i++) {
        console.log(resp.data[i])
    }
});*/
