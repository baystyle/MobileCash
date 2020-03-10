<?php
    include('../config.ini.php');
    $start_date = $_POST['start_date'];
    $end_date = $_POST['end_date'];
    // $start_date = "2020-01-10";
    // $end_date = "2020-04-10";
    
    $sql = "SELECT  sum(tst_amount) AS sum_amount
            FROM transaction
            WHERE tst_date BETWEEN '$start_date' AND '$end_date' AND tst_type = 'รายจ่าย'";
     
     $query = mysqli_query($con,$sql);

     $arr = array();
     while($row = mysqli_fetch_assoc($query)){
         $arr[] = $row;
     }
     mysqli_close($con);
     echo json_encode($arr);