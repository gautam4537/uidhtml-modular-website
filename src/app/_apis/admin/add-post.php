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
        $sql = "INSERT INTO posts (postBodyId,title,description,langUsed,typeOfPost,image,youtubeVideoId,created,views,downloads,likes,metaTitle,metaDescription,keywords,zipName,zipSize,status) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        $query = $con->prepare($sql);
        $query->bind_param('isssssssiiisssssi', $postBodyId,$title,$description,$langUsed,$typeOfPost,$image,$youtubeVideoId,$created,$views,$downloads,$likes,$metaTitle,$metaDescription,$keywords,$zipName,$zipSize,$status);

        $postBodyId = $_POST["postBodyId"];
        $title = $_POST["title"];
        $description = $_POST["description"];
        $langUsed = $_POST["langUsed"];
        $typeOfPost = $_POST["typeOfPost"];
        $image = $_POST["image"];
        $youtubeVideoId = $_POST["youtubeVideoId"];
        $created = $_POST["created"];
        $views = $_POST["views"];
        $downloads = $_POST["downloads"];
        $likes = $_POST["likes"];
        $metaTitle = $_POST["metaTitle"];
        $metaDescription = $_POST["metaDescription"];
        $keywords = $_POST["keywords"];
        $zipName = $_POST["zipName"];
        $zipSize = $_POST["zipSize"];
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