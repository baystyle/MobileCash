<?php
    include('../config.ini.php');
    
    $tst_balance = $_POST['tst_balance'];
    $tst_type = $_POST['tst_type'];
    $tst_cate_id = $_POST['tst_cate_id'];
    $tst_amount = $_POST['tst_amount'];
    $tst_date = $_POST['tst_date'];
    $tst_note = $_POST['tst_note'];
    $tst_acc_id = $_POST['tst_acc_id'];

    $sql = "INSERT 
            INTO transaction (tst_balance,tst_type,tst_cate_id,tst_amount,tst_date,tst_note,tst_acc_id)
            VALUES ('$tst_balance','$tst_type','$tst_cate_id','$tst_amount','$tst_date','$tst_note','$tst_acc_id')";
    $query = mysqli_query($con,$sql);

    mysqli_close($con);