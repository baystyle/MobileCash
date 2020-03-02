<?php
    include('../config.ini.php');
    
    $cdc_text = $_POST['cdc_text'];
    $cdc_is_active = $_POST['cdc_is_active'];
    $cdc_id = $_POST['cdc_id'];

    $sql = "UPDATE complaint_document_case
            SET cdc_text='$cdc_text',cdc_is_active='$cdc_is_active'
            WHERE cdc_id = '$cdc_id' ";
    $query = mysqli_query($con,$sql);

    mysqli_close($con);
  