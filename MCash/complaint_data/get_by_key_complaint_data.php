<?php
    include('../config.ini.php');
    $cda_id = $_POST['cda_id'];
    $sql = "SELECT * 
            FROM complaint_data
            WHERE cda_id = '$cda_id'";
    $query = mysqli_query($con,$sql);
    $numrow = mysqli_num_rows($query);

    $arr = array();
    while($row = mysqli_fetch_assoc($query)){
        $arr[] = $row;
    }
    mysqli_close($con);
    echo json_encode($arr);
  