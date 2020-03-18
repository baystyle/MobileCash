<?php
    include('../config.ini.php');
    
    $cate_id = $_POST['cate_id'];

    $sql = "DELETE FROM category
            WHERE cate_id = '$cate_id'";
    $query = mysqli_query($con,$sql);

    mysqli_close($con);
