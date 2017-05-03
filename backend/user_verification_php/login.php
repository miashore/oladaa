<?php
session_start();
require("../connect.php");
$userInfo = json_decode(file_get_contents('php://input'), true);


if(isset($userInfo) && !empty($userInfo)){
    $username = mysqli_real_escape_string($conn, $userInfo["username"]);
    $password = md5($userInfo["password"]);
    $sql = "SELECT `id` FROM `user_table` WHERE `name`='$username' AND `password`='$password'";
    $result = mysqli_query($conn, $sql);
    $user_id = mysqli_fetch_assoc($result)["id"];
    $count = mysqli_num_rows($result);
    if($count == 1){
        $_SESSION["id"] = $user_id;
    }
    else{
        $fmsg = 0;
        echo $fmsg;
    }
}
if(isset($_SESSION["id"])){
    $smsg = 1;
    echo $smsg;
}