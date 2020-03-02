<?php
    include('../config.ini.php');
    
    $cmdd_cda_id = $_POST['cmdd_cda_id'];
    $cmdd_cdoc_id = $_POST['cmdd_cdoc_id'];
    $cmdd_cdoc_id ++;
    $sql = "INSERT 
            INTO complaint_mapping_document_data (cmdd_cda_id,cmdd_cdoc_id)
            VALUES ('$cmdd_cda_id','$cmdd_cdoc_id')";
    $query = mysqli_query($con,$sql);

    mysqli_close($con);
  