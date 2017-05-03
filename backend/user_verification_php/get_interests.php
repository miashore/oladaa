<?php
require('../connect.php');

$userStats = json_decode(file_get_contents('php://input'), true);
if(!empty($userStats)) {
    $activityId = $userStats['activity_id'];
    $sql = "SELECT `category_id` FROM `activity_table` WHERE ";
    for ($i=0; $i<count($activityId);$i++){
        if($i === 0) {
            $sql .= " `id`=".$activityId[$i]." ";
        }
        else{
            $sql .= " OR `id`=".$activityId[$i]." ";
        }
    }
    $result = mysqli_query($conn, $sql);
    while($row = mysqli_fetch_assoc($result)){
        $activityData[]=$row;
    };
    print_r(json_encode($activityData));
}
