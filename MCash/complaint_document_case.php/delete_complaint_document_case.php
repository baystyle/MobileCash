<?php
    include('../config.ini.php');
    
    $cdc_id = $_POST['cdc_id'];

    $sql = "DELETE FROM complaint_document_case
            WHERE cdc_id = $cdc_id";
    $query = mysqli_query($con,$sql);

    mysqli_close($con);
  