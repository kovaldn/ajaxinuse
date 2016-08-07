<?php 
     
    $data = array();    
    $data['age'] = 26;
    $data['name'] = 'dima';
    $data['email'] = 'kovaldn@gmail.com';
 
    header("Content-Type: application/json");
    echo json_encode($data);
    exit;
 
 ?>