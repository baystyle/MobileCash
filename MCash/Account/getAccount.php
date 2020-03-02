<?php
    include('../config.ini.php');
    $acc_id = 1;
    $sql = "SELECT * 
            FROM account
            WHERE acc_id = '$acc_id'";
    $query = mysqli_query($con,$sql);
    $numrow = mysqli_num_rows($query);

    $arr = array();
    while($row = mysqli_fetch_assoc($query)){
        $arr[] = $row;
    }
    mysqli_close($con);
    echo json_encode($arr);
  