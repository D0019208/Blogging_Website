<?php
session_start();

$_GET['id'] = 1;
if(!empty($_GET['id'])){
    //DB details
    $dbHost     = 'mysql-d00192082.alwaysdata.net';
    $dbUsername = 'd00192082';
    $dbPassword = '3820065Np2';
    $dbName     = 'd00192082_blogusers';
    
    //Create connection and select DB
    $db = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);
    
    //Check connection
    if($db->connect_error){
       die("Connection failed: " . $db->connect_error);
    }
    
    $id = mysqli_real_escape_string($db, $_SESSION["user_id"]);
    
    //Get image data from database
    $result = $db->query("SELECT image FROM users WHERE id = $id");
    
    if($result->num_rows > 0){
        $imgData = $result->fetch_assoc();
        
        //Render image
        header("Content-type: image/jpg"); 
        echo $imgData['image']; 
    }else{
        echo 'Image not found...';
    }
}
?>