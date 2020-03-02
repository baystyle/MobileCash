<?php
    include('../config.ini.php');
    
    $cds_text = $_POST['cds_text'];
    $cds_is_active = $_POST['cds_is_active'];
    $cds_id = $_POST['cds_id'];

    $sql = "UPDATE complaint_document_status
            SET cds_text='$cds_text',cds_is_active='$cds_is_active'
            WHERE cds_id = '$cds_id' ";
    $query = mysqli_query($con,$sql);

    mysqli_close($con);
  