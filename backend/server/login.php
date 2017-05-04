<?php
//Start the users session.
session_start();

//Require connection to the database
require("../connect.php");

//Catch the json object sent from our axios call and convert it into php readable code.
$userInfo = json_decode(file_get_contents('php://input'), true);

//If user info contains information, then process it.
if(isset($userInfo) && !empty($userInfo)){

    //Pull the username and password out of the axios object.
    $username = mysqli_real_escape_string($conn, $userInfo["username"]);
    $password = md5($userInfo["password"]);

    //Select the user id from our main user table based on the username and password provided.
    $sql = "SELECT `id` FROM `user_table` WHERE `name`='$username' AND `password`='$password'";
    $result = mysqli_query($conn, $sql);
    $user_id = mysqli_fetch_assoc($result)["id"];
    $count = mysqli_num_rows($result);

    //If a row is returned set the id key in the Global Session variable to to the user id returned from our query.
    if($count == 1){
        $_SESSION["id"] = $user_id;
    }

    //If it fails return a 0 to the axios call.
    else{
        $fmsg = 0;
        echo $fmsg;
    }
}

//If the session id is set send a success message.
if(isset($_SESSION["id"])){
    $smsg = 1;
    echo $smsg;
}