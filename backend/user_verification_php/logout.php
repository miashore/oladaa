<?php
session_start();
session_destroy();
header('location: ../axios_calls/logout.html');