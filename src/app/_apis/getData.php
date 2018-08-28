<?php
    header('Access-Control-Allow-Origin: http://localhost:4200');
    header('Access-Control-Allow-Methods: GET, POST');
    header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin , authorization, access-control-allow-methods, access-control-allow-headers');
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Credentials: true');

    require('./_connection/dbCon.php');
    $data = [];

    if(isset($_GET['id'])){
        $id = $_GET['id'];
        $sql = "SELECT * FROM example_list WHERE ex_id = '$id'";
    }else{
        $sql = "SELECT * FROM example_list";
    }
    
    $result = mysqli_query($con, $sql);
    $num_row = mysqli_num_rows($result); // Count the number of rows
    if($num_row > 0){
        while ($dataObj=mysqli_fetch_object($result)){
            $object = new stdClass();
            $object->id = $dataObj->ex_id;
            $object->userId = $dataObj->user_id;
            $object->qId = $dataObj->q_id;
            $object->title = $dataObj->ex_title;
            $object->category = $dataObj->ex_category;
            $object->subCategory = $dataObj->ex_sub_category;
            $object->image = $dataObj->ex_image;
            $object->video = $dataObj->ex_video;
            $object->created = $dataObj->ex_created;
            $object->views = $dataObj->ex_views;
            $object->downloads = $dataObj->ex_download;
            $object->likes = $dataObj->ex_like;
            $object->details = $dataObj->ex_small_details;
            $object->longDetails = $dataObj->ex_long_details;
            $object->html = $dataObj->ex_html;
            $object->css = $dataObj->ex_css;
            $object->js = $dataObj->ex_js;
            $object->zipName = $dataObj->ex_zip_name;
            $object->zipSize = $dataObj->ex_zip_size;
            $object->status = $dataObj->status;
            array_push($data, $object);
        }
    }else{
        array_push($data, array('result' => -1, 'status' => false));
    }

    echo json_encode($data);
    mysqli_close($con);
?>