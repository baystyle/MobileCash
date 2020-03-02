<?php
    include('../config.ini.php');
    
    $cdoc_inform_date= $_POST['cdoc_inform_date'];
    $cdoc_saraban_number = $_POST['cdoc_saraban_number'];
    $cdoc_reserve_start_date = $_POST['cdoc_reserve_start_date'];
    $cdoc_reserve_end_date = $_POST['cdoc_reserve_end_date'];
    $cdoc_detail = $_POST['cdoc_detail'];
    $cdoc_cdc_id = $_POST['cdoc_cdc_id'];
    $cdoc_cds_id = $_POST['cdoc_cds_id'];
    $cdoc_is_center = $_POST['cdoc_is_center'];
    $cdoc_update_date = $_POST['cdoc_update_date'];
    $cdoc_update_ps_id = $_POST['cdoc_update_ps_id'];

    $sql = "INSERT 
            INTO complaint_document (cdoc_inform_date,cdoc_saraban_number,cdoc_reserve_start_date,cdoc_reserve_end_date,cdoc_detail,cdoc_cdc_id,cdoc_cds_id,cdoc_is_center,cdoc_update_date,cdoc_update_ps_id)
            VALUES ('$cdoc_inform_date','$cdoc_saraban_number','$cdoc_reserve_start_date','$cdoc_reserve_end_date','$cdoc_detail','$cdoc_cdc_id','$cdoc_cds_id','$cdoc_is_center','$cdoc_update_date','$cdoc_update_ps_id')";
    $query = mysqli_query($con,$sql);

        

    mysqli_close($con);
  