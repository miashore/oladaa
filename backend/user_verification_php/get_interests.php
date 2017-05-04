<?php
require('../connect.php');

$userStats = json_decode(file_get_contents('php://input'), true);
if(!empty($userStats)) {
    $userId = $userStats['user_id'];
    $activityScore = $userStats['activity_score'];
    $requestQuery = "SELECT `activity_id` FROM `request_table` WHERE `user_id`=".$userId." AND `activity_score`=".$activityScore." ";
    $requestResult = mysqli_query($conn, $requestQuery);
    while($requestRow = mysqli_fetch_assoc($requestResult)){
        $requestData[]=$requestRow;
    };
    $activityQuery = "SELECT `category_id` FROM `activity_table` WHERE ";
    for ($i=0; $i<count($requestData);$i++){
        if($i === 0) {
            $activityQuery .= " `id`=".$requestData[$i]['activity_id']." ";
        }
        else{
            $activityQuery .= " OR `id`=".$requestData[$i]['activity_id']." ";
        }
    }
    $activityResult = mysqli_query($conn, $activityQuery);
    while($activityRow = mysqli_fetch_assoc($activityResult)){
        $activityData[]=$activityRow;
    };
    $activityData = json_encode($activityData);
    print_r($activityData);
}
