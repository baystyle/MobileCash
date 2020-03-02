<?php
    include('../config.ini.php');
    
    $sql = "SELECT *
            FROM complaint_document as cdoc
            LEFT JOIN complaint_mapping_document_data as cmmd
            ON cmmd.cmdd_cdoc_id = cdoc.cdoc_id
            LEFT JOIN complaint_data as cda
            ON cmmd.cmdd_cda_id = cda.cda_id
            LEFT JOIN hr_person as per
            ON cdoc.cdoc_update_ps_id = per.ps_id
            LEFT JOIN complaint_data_type as cdt
            ON cda.cda_cdt_id = cdt.cdt_id
            LEFT JOIN document_approve_flow as daf
            ON daf.daf_cdoc_id = cdoc.cdoc_id
            LEFT JOIN department as dept
            ON daf.daf_dept_id = dept.dept_id
            ";
    $query = mysqli_query($con,$sql);

    $arr = array();
    while($row = mysqli_fetch_assoc($query)){
        $arr[] = $row;
    }

    mysqli_close($con);
    echo json_encode($arr);
  