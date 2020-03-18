<?php
    include('../config.ini.php');
    
    $cate_id = $_POST['cate_id'];
    $cate_name = $_POST['cate_name'];
    
    $sql = "UPDATE category
            SET cate_name = '$cate_name'
            WHERE cate_id = '$cate_id' ";


    $query = mysqli_query($con,$sql);

    mysqli_close($con);
