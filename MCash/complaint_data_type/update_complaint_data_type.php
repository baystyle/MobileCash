<?php
    include('../config.ini.php');
    
    $cdt_text = $_POST['cdt_text'];
    $cdt_is_active = $_POST['cdt_is_active'];
    $cdt_id = $_POST['cdt_id'];

    $sql = "UPDATE complaint_data_type 
            SET cdt_text='$cdt_text',cdt_is_active='$cdt_is_active'
            WHERE cdt_id = '$cdt_id' ";
    $query = mysqli_query($con,$sql);

    mysqli_close($con);
  