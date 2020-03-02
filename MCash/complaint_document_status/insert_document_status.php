<?php
    include('../config.ini.php');
    
    $cds_text = $_POST['cds_text'];
    $cds_is_active = $_POST['cds_is_active'];

    $sql = "INSERT 
            INTO complaint_document_status (cds_text,cds_is_active)
            VALUES ('$cds_text','$cds_is_active')";
    $query = mysqli_query($con,$sql);

    mysqli_close($con);
  