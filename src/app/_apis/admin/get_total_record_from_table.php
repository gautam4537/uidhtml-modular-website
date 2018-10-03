<?php
    header('Access-Control-Allow-Origin: http://localhost:4200');
    header('Access-Control-Allow-Methods: GET, POST');
    header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin , authorization, access-control-allow-methods, access-control-allow-headers');
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Credentials: true');

    $data = [];
    if($_GET){
        $table_name = $_GET['tableName'];
        require('./../_connection/dbCon.php');
        $sql = "SELECT * FROM `$table_name`";
        $query = $con->prepare($sql);
        $query->execute();
        $result = $query -> get_result();
        $rows = $result->num_rows;
        $query->close();
        $con->close();
        array_push($data, array("row_num" => $rows ));
   }else{
       array_push($data, array("error" => "Some error occord in fetching records." ));
   }
    echo json_encode($data);
?>