<?php
    include('../config.ini.php');
    
    $cda_text = $_POST['cda_text'];
    $cda_is_active = $_POST['cda_is_active'];
    $cda_cdt_id = $_POST['cda_cdt_id'];
    $cda_is_queue = $_POST['cda_is_queue'];
    $cda_use_form_calendar = $_POST['cda_use_form_calendar'];
    $cda_id = $_POST['cda_id'];

    $sql = "UPDATE complaint_data 
            SET cda_text='$cda_text',cda_is_active='$cda_is_active',cda_cdt_id='$cda_cdt_id',cda_is_queue='$cda_is_queue',cda_use_form_calendar='$cda_use_form_calendar'
            WHERE cda_id = '$cda_id' ";
    $query = mysqli_query($con,$sql);

    mysqli_close($con);
  