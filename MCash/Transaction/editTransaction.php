<?php
    include('../config.ini.php');
    
    $tst_id = $_POST['tst_id'];
    $tst_balance = $_POST['tst_balance'];
    $tst_type = $_POST['tst_type'];
    $tst_cate_id = $_POST['tst_cate_id'];
    $tst_amount = $_POST['tst_amount'];
    $tst_date = $_POST['tst_date'];
    $tst_note = $_POST['tst_note'];

    $sql = "UPDATE transaction
            SET tst_balance = '$tst_balance', tst_type = '$tst_type', tst_cate_id = '$tst_cate_id', tst_amount = '$tst_amount', tst_date = '$tst_date', tst_note = '$tst_note'
            WHERE tst_id = '$tst_id' ";


    $query = mysqli_query($con,$sql);

    // if($query)
    //     echo "gg";
    // else
    //     echo "ff";

    mysqli_close($con);

    

    