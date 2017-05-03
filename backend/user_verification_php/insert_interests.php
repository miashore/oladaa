<?php

require('../connect.php');

$userInterests = json_decode(file_get_contents('php://input'), true);

if(!empty($userInterests)){
    $userId = $userInterests['user_id'];
    $activityId = $userInterests['activity_id'];
    print_r($activityId);
    for($i=0; $i<count($activityId); $i++) {
        $sql = "INSERT INTO request_table(user_id, activity_id, activity_score) 
        VALUES ($userId,$activityId[$i],(SELECT score FROM activity_table 
        WHERE id=$activityId[$i]))";
        $result = mysqli_query($conn, $sql);
    }
}