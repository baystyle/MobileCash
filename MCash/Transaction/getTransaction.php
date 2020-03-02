<?php
    include('../config.ini.php');
    $acc_id = 1;
    $sql = "SELECT * 
            FROM transaction
            LEFT JOIN category
            ON tst_cate_id = category.cate_id";
    $query = mysqli_query($con,$sql);

    $arr = array();
    while($row = mysqli_fetch_assoc($query)){
        $arr[] = $row;
    }
    mysqli_close($con);
    echo json_encode($arr);
  