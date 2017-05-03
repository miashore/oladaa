<?php
require_once("../connect.php");

$userInfo = json_decode(file_get_contents('php://input'), true);

if(isset($userInfo) && !empty($userInfo)){
    $username = mysqli_real_escape_string($conn, $userInfo["username"]);
    $email = mysqli_real_escape_string($conn, $userInfo["email"]);
    $password = md5($userInfo["password"]);


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