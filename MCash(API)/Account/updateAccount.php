<?php
    include('../config.ini.php');
    
    $acc_id = $_POST['acc_id'];
    $acc_balance = $_POST['acc_balance'];


    $sql = "UPDATE account
            SET acc_balance='$acc_balance'
            WHERE acc_id = '$acc_id' ";
    $query = mysqli_query($con,$sql);

    mysqli_close($con);

