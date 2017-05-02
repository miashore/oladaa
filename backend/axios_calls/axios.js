var username = 'Sean';
var password = 'Munchen*86';



//axios call for getting mock data from our user personas.  Will return an object that contains the three users and each
//user will have three different properties; fatBurn, cardio, and peak.
axios.get('../../beativitiesPrototypes/mock_data_call/mockData.json').then(resp=>{
    console.log(resp.data);
});

//axios call for verifying login information.  Send the username and password to our server and check for their
//existence in our database, it returns a 1 for true and a 0 for false.
axios.post('login.php', {username, password}).then(resp=>{
    if(resp.data === 0){
        document.writeln('Invalid Username');
    }
    else{
        document.writeln('User logged in');
    }
}).catch(err=>{
    console.log(err);
});


