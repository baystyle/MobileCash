<?php
    include('../config.ini.php');
    
    $cdoc_cds_id = $_POST['cdoc_cds_id'];
    $cdoc_id = $_POST['cdoc_id'];


    $sql = "UPDATE complaint_document
            SET cdoc_cds_id='$cdoc_cds_id'
            WHERE cdoc_id = '$cdoc_id' ";
    $query = mysqli_query($con,$sql);

    mysqli_close($con);
  