<?php
    include('../config.ini.php');
    
    $cdt_text = $_POST['cdt_text'];
    $cdt_is_active = $_POST['cdt_is_active'];

    $sql = "INSERT 
            INTO complaint_data_type (cdt_text,cdt_is_active)
            VALUES ('$cdt_text','$cdt_is_active')";
    $query = mysqli_query($con,$sql);

    mysqli_close($con);
  