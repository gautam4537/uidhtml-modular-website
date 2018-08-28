<?php
    header('Access-Control-Allow-Origin: http://localhost:4200');
    header('Access-Control-Allow-Methods: GET, POST');
    header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin , authorization, access-control-allow-methods, access-control-allow-headers');
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Credentials: true');
    // print_r($_FILES);
    // print_r($_POST);
    $data = [];
    if($_POST){
        require('./../_connection/dbCon.php');
        $sql = "INSERT INTO posts (title,sub_title,category,sub_category,small_desc,meta_title,meta_keywords,meta_desc,youtube_id,image,created,stat) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)";
        $query = $con->prepare($sql);
        $query->bind_param('sssssssssssi', $title,$subTitle,$category,$subCategory,$smallDetails,$metaTitle,$metaKey,$metaDescription,$youtubeVideoId,$image,$created,$status);

        $title = $_POST["title"];
        $subTitle = $_POST["subTitle"];
        $category = $_POST["category"];
        $subCategory = $_POST["subCategory"];
        $smallDetails = $_POST["smallDetails"];
        $details = $_POST["details"];
        $metaTitle = $_POST["metaTitle"];
        $metaKey = $_POST["metaKey"];
        $metaDescription = $_POST["metaDescription"];
        $youtubeVideoId = $_POST["youtubeVideoId"];
        $image = "image3";
        $created = $_POST["created"];
        $status = $_POST["status"];
        $query->execute();

        $query->close();
        $con->close();
        array_push($data, array("Result" => "Data Inserted." ));
   }else{
       array_push($data, array("error" => "Some error occord in posting data." ));
   }
    echo json_encode($data);
?>