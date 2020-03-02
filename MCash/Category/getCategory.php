<?php
    include('../config.ini.php');
    
    $sql = "SELECT * FROM category";
    $query = mysqli_query($con,$sql);

    $arr = array();
    while($row = mysqli_fetch_assoc($query)){
        $arr[] = $row;
    }

    mysqli_close($con);
    echo json_encode($arr);
  