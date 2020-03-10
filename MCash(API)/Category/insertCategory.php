<?php
    include('../config.ini.php');
    
    $cate_name = $_POST['cate_name'];
    
    $sql = "INSERT 
            INTO category (cate_name)
            VALUES ('$cate_name')";
    $query = mysqli_query($con,$sql);

    mysqli_close($con);

