<?php

//Start the session
session_start();

header("Access-Control-Allow-Origin: *");

//Require connection to the database
require_once("../connect.php");

//Catch the json object sent from our axios call and convert it into php readable code.
$userInfo = json_decode(file_get_contents('php://input'), true);

//If user info contains information, then process it.
if(isset($userInfo) && !empty($userInfo)){

    //Pull the username, password, and email out of the axios object.
    $username = mysqli_real_escape_string($conn, $userInfo["username"]);
    $email = mysqli_real_escape_string($conn, $userInfo["email"]);
    $password = password_hash($userInfo["password"],PASSWORD_DEFAULT);

    //Insert the new users information into the database.
    $sql = "INSERT INTO `user_table` (name, password, email) VALUES ('$username','$password','$email')";
    $result = mysqli_query($conn, $sql);


    if($result){
        echo "User Registration Successful";
    }
    else{
        $result["error"][]="User Registration Failed";
        $result["error"][]=(mysqli_error($conn));
        print_r(json_encode($result));
    }
}
?>