<?php
    include('../config.ini.php');
    
    $cate_name = $_POST['cate_name'];
    $cate_acc_id = $_POST['cate_acc_id'];
    
    $sql = "INSERT 
            INTO category (cate_name,cate_acc_id)
            VALUES ('$cate_name','$cate_acc_id')";
    $query = mysqli_query($con,$sql);

    mysqli_close($con);

