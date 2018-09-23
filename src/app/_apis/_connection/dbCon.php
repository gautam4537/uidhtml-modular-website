<?php
    // Server config
    // $host = 'localhost';
    // $username = 'uidhtmlc_new';
    // $password = 'Kingbadshah@12';
    // $db = 'uidhtmlc_new';

    // Local Config
    $host = 'localhost';
    $username = 'root';
    $password = '';
    $db = 'uidhtml_db';
    // Create connection
    $con = new mysqli($host, $username, $password, $db);
    // Check connection
    if (!$con) {
        echo array('DB error' => 'DB Connection Error.. !please check.');
        die("Connection failed: " . mysqli_error());
    }
?>