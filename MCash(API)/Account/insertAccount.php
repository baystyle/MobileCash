<?php
    include('../config.ini.php');
    
    $acc_username = $_POST['acc_username'];
    $acc_password = $_POST['acc_password'];
    $acc_email = $_POST['acc_email'];
    $acc_balance = $_POST['acc_balance'];
    $acc_type_id = $_POST['acc_type_id'];

    $sql = "INSERT 
            INTO account (acc_username,acc_password,acc_email,acc_balance,acc_type_id)
            VALUES ('$acc_username','$acc_password','$acc_email','$acc_balance','$acc_type_id')";
    $query = mysqli_query($con,$sql);

    mysqli_close($con);