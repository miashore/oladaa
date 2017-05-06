<?php
//Access the current session.
session_start();

//Destroy the session key.
session_destroy();

//Reroute the page after logout.
header('location: localhost:8888');