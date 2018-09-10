<?php
    header('Access-Control-Allow-Origin: http://localhost:4200');
    header('Access-Control-Allow-Methods: GET, POST');
    header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin , authorization, access-control-allow-methods, access-control-allow-headers');
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Credentials: true');

    $data = [];
    if($_POST){
        require('./../_connection/dbCon.php');
        $email = $_POST['email'];
        $password = $_POST['password'];
        if(isset($email) && isset($password)){
            $sql = "SELECT * FROM admin WHERE `email` = '$email' AND `password` = md5(md5('$password'))";
            $result = $con->query($sql);
            if($result->num_rows > 0){
                while ($dataObj=mysqli_fetch_object($result)){
                    $object = new stdClass();
                    $object->username = $dataObj->username;
                    $object->email = $dataObj->email;
                    array_push($data, array('loggedData' => $object, 'result' => 1, 'status' => true));
                }
            }else{
                array_push($data, array('result' => 0, 'status' => false, 'query' => $sql));
            }
        }else{
            array_push($data, array('result' => -1, 'status' => false));
        }
        echo json_encode($data);
        mysqli_close($con);
    } else {
        array_push($data, array('result' => -2, 'status' => false));
        echo json_encode($data);
    }
    
?>