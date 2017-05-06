<?php
//Start the session.
session_start();
header("Access-Control-Allow-Origin: *");
//Require connection to the database.
require('../connect.php');

//Catch the json object sent from our axios call and convert it into php readable code.
$userInterests = json_decode(file_get_contents('php://input'), true);

//If user interests contains information, then process it.
if(!empty($userInterests)){

    //Get user id from the user session.
    $userId = $_SESSION["id"];

    //Pull activity id out of the axios object.  Activity id will be an array.
    $activityId = $userInterests['activity_id'];

    //Loop through activity id array.
    for($i=0; $i<count($activityId); $i++) {

        //Insert each activity id into the request table along with the user id and the activity score associated with
        //the activity id.
        $sql = "INSERT INTO request_table(user_id, activity_id, activity_score) 
        VALUES ($userId,$activityId[$i],(SELECT score FROM activity_table 
        WHERE id=$activityId[$i]))";
        $result = mysqli_query($conn, $sql);
    }
}