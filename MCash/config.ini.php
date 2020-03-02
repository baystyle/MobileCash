<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    $host = "localhost";
    $user = "root";
    $password = "";
    $dbname = "MCash";

    $con = mysqli_connect($host,$user,$password,$dbname);
    mysqli_set_charset($con,"utf8");

    // if($con)
    //     echo "database connected";
    // else
    //     echo "database disconnect";
