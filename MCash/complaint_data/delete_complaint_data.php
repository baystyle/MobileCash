<?php
    include('../config.ini.php');
    
    $cda_id = $_POST['cda_id'];

    $sql = "DELETE FROM complaint_data
            WHERE cda_id = '$cda_id'";
    $query = mysqli_query($con,$sql);

    mysqli_close($con);
  