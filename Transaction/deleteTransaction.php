<?php
    include('../config.ini.php');
    
    $tst_id = $_POST['tst_id'];

    $sql = "DELETE FROM transaction
            WHERE tst_id = '$tst_id'";
    $query = mysqli_query($con,$sql);

    mysqli_close($con);
  