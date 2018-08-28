<?php
    header('Access-Control-Allow-Origin: http://localhost:4200');
    header('Access-Control-Allow-Methods: GET, POST');
    header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin , authorization, access-control-allow-methods, access-control-allow-headers');
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Credentials: true');

    require('./../_connection/dbCon.php');
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $email = $request->email;
    $password = $request->password;
    $data = [];

    if(isset($email) && isset($password)){
        $sql = "SELECT * FROM admin WHERE `email` = '$email' AND `password` = md5(md5('$password'))";
        $result = mysqli_query($con, $sql);
        $num_row = mysqli_num_rows($result); // Count the number of rows
        if($num_row == 1){
            while ($dataObj=mysqli_fetch_object($result)){
                $object = new stdClass();
                $object->username = $dataObj->username;
                $object->email = $dataObj->email;
                array_push($data, array('loggedData' => $object, 'result' => 0, 'status' => true));
            }
        }else{
            array_push($data, array('result' => -1, 'status' => false));
        }
    }else{
        array_push($data, array('Result' => 2, 'status' => false));
    }

    echo json_encode($data);
    mysqli_close($con);
?>