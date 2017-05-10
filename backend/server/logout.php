<?php
//Access the current session.
session_start();

//Destroy the session key.
session_destroy();

//Reroute the page after logout.
//header('location: http://localhost:8888');

$output = [
    'success' => true
];

print(json_encode($output));