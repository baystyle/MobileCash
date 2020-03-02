<?php
    include('../config.ini.php');
    
    $cdc_text = $_POST['cdc_text'];
    $cdc_is_active = $_POST['cdc_is_active'];

    $sql = "INSERT 
            INTO complaint_document_case (cdc_text,cdc_is_active)
            VALUES ('$cdc_text','$cdc_is_active')";
    $query = mysqli_query($con,$sql);

    mysqli_close($con);
  