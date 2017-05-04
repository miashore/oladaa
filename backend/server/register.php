<?php
//Start the session
session_start();

//Require connection to the database
require_once("../connect.php");

//Catch the json object sent from our axios call and convert it into php readable code.
$userInfo = json_decode(file_get_contents('php://input'), true);

//If user info contains information, then process it.
if(isset($userInfo) && !empty($userInfo)){

    //Pull the username, password, and email out of the axios object.
    $username = mysqli_real_escape_string($conn, $userInfo["username"]);
    $email = mysqli_real_escape_string($conn, $userInfo["email"]);
    $password = md5($userInfo["password"]);

    //Insert the new users information into the database.
    $sql = "INSERT INTO `user_table` (name, password, email) VALUES ('$username','$password','$email')";
    $result = mysqli_query($conn, $sql);
    if($result){
        echo "User Registration Successful";
    }
    else{
        echo "User Registration Failed";
    }
}
if(isset($_SESSION["id"])){
    $smsg = "User Logged In";
}
?>