<?php
    include('../config.ini.php');
    
    $cdt_id = $_POST['cdt_id'];

    $sql = "DELETE FROM complaint_data_type
            WHERE cdt_id = $cdt_id";
    $query = mysqli_query($con,$sql);

    mysqli_close($con);
  