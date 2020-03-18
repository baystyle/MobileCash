<?php
    include('../config.ini.php');
    $start_date = $_POST['start_date'];
    $end_date = $_POST['end_date'];
    $acc_id = $_POST['acc_id'];
    
    $sql = "SELECT sum(tst_amount) AS sum_tst,tst_cate_id,cate_name,tst_type
            FROM transaction
            LEFT JOIN category
            ON tst_cate_id = cate_id
            WHERE tst_date BETWEEN CAST('$start_date' AS DATE) AND CAST('$end_date' AS DATE) AND tst_acc_id = $acc_id
            GROUP BY cate_id";
     
     $query = mysqli_query($con,$sql);

     $arr = array();
     while($row = mysqli_fetch_assoc($query)){
         $arr[] = $row;
     }
     mysqli_close($con);
     echo json_encode($arr);