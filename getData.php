<?php

// configuration
$connect = mysqli_connect("mysql-d00192082.alwaysdata.net", "d00192082", "3820065Np2", "d00192082_blogusers");

$row = $_POST['row'];
$rowperpage = 3;

// selecting posts
$query = 'SELECT * FROM comments limit '.$row.','.$rowperpage;
$result = mysqli_query($connect,$query);

$html = '<div class="comment">';

while($row = mysqli_fetch_array($result)){
    $name = $row['name'];
    $content = $row['content']; 
    $image = $row['commentImage'];
    $date = $row["date"];

    // Creating HTML structure
    $html .= '<div class="comment-header d-flex justify-content-between"><div class="user d-flex align-items-center"><div class="image"><img src="' . $image . '" alt="..." class="img-fluid rounded-circle"></div><div class="title"><strong>' . $name . '</strong><span class="date">' . $date . '</span></div></div></div><div class="comment-body"><p>' + $content . '</p></div></div>';

}

echo $html;
