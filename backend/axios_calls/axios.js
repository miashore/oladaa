//axios call for getting mock data from our user personas.  Will return an object that contains the three users and each
//user will have three different properties; fatBurn, cardio, and peak.  It then passes that into our activity score
//formula to calculate the users activity level/score.

// function getActivityScore(fatBurnMin, cardioMin, peakMin){
//     const fatBurnScore = fatBurnMin*2;
//     const cardioScore = cardioMin*3;
//     const peakScore = peakMin*4;
//     const totalScore = (fatBurnScore+cardioScore+peakScore);
//     const totalMin = 60+(fatBurnMin+cardioMin+peakMin);
//     let activityScore = totalScore/totalMin;
//     if (activityScore >= 0 && activityScore < 2){
//         activityScore = Math.round(activityScore);
//     }
//     else if(activityScore > 2){
//         activityScore = 2;
//     }
//     else{
//         activityScore = 'Invalid Inputs'
//     }
//     return activityScore
// }
// axios.get('../mock_data/mockData.json').then(resp=>{
//     console.log(resp.data['Sam']);
//     const userStats = resp.data['Sam'];
//     const fatBurnMin = parseInt(userStats.fatBurn);
//     const cardioMin = parseInt(userStats.cardio);
//     const peakMin = parseInt(userStats.peak);
//     document.cookie = "activity_score="+getActivityScore(fatBurnMin, cardioMin, peakMin);
// }).catch(err=>{
//     console.log("User not found ", err)
// });

//**********************************************************************************************************************

// axios call for verifying login information.  Get the username and password from frontend, send to login.php, and check
// for their existence in our database, it returns a 1 for true and a 0 for false.

// const username = 'Kevin';
// const password = 'HiImKevin';
//
// axios.post('../server/login.php', {username, password}).then(resp=>{
//     console.log('Our response from the server ', resp.data);
//     if(resp.data === 0){
//         console.log('Invalid Username');
//     }
//     else{
//         console.log('User logged in');
//     }
// }).catch(err=>{
//     console.log(err);
// });

//**********************************************************************************************************************

//axios call for registering a new user.  Send the new users username, password, and email to register.php.  If the
// username or email already exists, or not all fields are filled it will return an error message of user registration
// failed.

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

//**********************************************************************************************************************

//axios call for inserting interests into the request table of our database.  activity ID's are inserted into an array
//that is looped through in our php file.  User ID is retained in our session.

// const activity_id = [];
//
// axios.post('../server/insert_interests.php', {activity_id}).then(resp=>{
//     console.log('Interests sent ', resp);
// }).catch(err=>{
//     console.log('not sent ', err);
// });

//**********************************************************************************************************************

//axios call for getting category ID's from our database to pass to the meetup api.  We will have the user_id stored in
//our session and the activity score stored in a cookie after we do our mockdata/fitbitData call.
// let activity_score;
// if(!isNaN(document.cookie.charAt(15))) {
//     activity_score = parseInt(document.cookie.charAt(15));
// }else{
//     activity_score = document.cookie.substring(15,29)
// }
// axios.post('../server/get_interests.php',{activity_score}).then(resp=>{
//     for(let i=0; i<resp.data.length; i++) {
//         console.log(resp.data[i])
//     }
// });
