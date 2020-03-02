<?php
    include('../config.ini.php');
    
    $cda_text = $_POST['cda_text'];
    $cda_is_active = $_POST['cda_is_active'];
    $cda_cdt_id = $_POST['cda_cdt_id'];
    $cda_is_queue = $_POST['cda_is_queue'];
    $cda_use_form_calendar = $_POST['cda_use_form_calendar'];

    $sql = "INSERT 
            INTO complaint_data (cda_text,cda_is_active,cda_cdt_id,cda_is_queue,cda_use_form_calendar)
            VALUES ('$cda_text','$cda_is_active','$cda_cdt_id','$cda_is_queue','$cda_use_form_calendar')";
    $query = mysqli_query($con,$sql);

    mysqli_close($con);