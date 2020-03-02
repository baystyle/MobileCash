<?php
    include('../config.ini.php');
    
    $daf_dept_id = $_POST['daf_dept_id'];
    $daf_cdoc_id = $_POST['daf_cdoc_id'];
    $daf_status = $_POST['daf_status'];
    $daf_reason = $_POST['daf_reason'];
    $daf_ps_id = $_POST['daf_ps_id'];
    $daf_update_date = $_POST['daf_update_date'];

    $sql = "INSERT 
            INTO document_approve_flow (daf_dept_id,daf_cdoc_id,daf_status,daf_reason,daf_ps_id,daf_update_date)
            VALUES ('$daf_dept_id','$daf_cdoc_id','$daf_status','$daf_reason','$daf_ps_id','$daf_update_date' )";
    $query = mysqli_query($con,$sql);

    mysqli_close($con);
  