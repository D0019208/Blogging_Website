<?php

$dsn = "mysql:host=mysql-d00192082.alwaysdata.net;dbname=d00192082_blogusers;charset=utf8";
$username = "";
$password = "";

try {
    $db = new PDO($dsn, $username, $password);
} catch (PDOException $e) {
    $error_message = $e->getMessage();
    include('database_error.php');
    exit();
}
?>