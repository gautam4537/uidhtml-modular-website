<?php
    $host = 'localhost';
    $username = 'root';
    $password = '';
    $db = 'uidhtml_new';
    // Create connection
    $con = new mysqli($host, $username, $password, $db);
    // Check connection
    if (!$con) {
        echo array('DB error' => 'DB Connection Error.. !please check.');
        die("Connection failed: " . mysqli_error());
    }
?>