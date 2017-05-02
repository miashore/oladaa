var username = 'Sean';
var password = 'Munchen*86';


// axios.get('../../beativitiesPrototypes/mock_data_call/mockData.json').then(resp=>{
//     console.log(resp.data);
// });

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


