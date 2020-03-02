<?php
    include('../config.ini.php');
    
    $cds_id = $_POST['cds_id'];

    $sql = "DELETE FROM complaint_document_status
            WHERE cds_id = $cds_id";
    $query = mysqli_query($con,$sql);

    mysqli_close($con);
  