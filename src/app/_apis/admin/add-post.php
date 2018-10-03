<?php
    header('Access-Control-Allow-Origin: http://localhost:4200');
    header('Access-Control-Allow-Methods: GET, POST');
    header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin , authorization, access-control-allow-methods, access-control-allow-headers');
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Credentials: true');
    // print_r($_FILES);
    // print_r($_POST);

    require_once('./classes/class.uploadFile.php');

    $data = [];
    if($_POST){
        require('./../_connection/dbCon.php');
        if($_FILES){
            if($_FILES['imageFile']){
                $imageFileObj = new uploadFile();
                $imageUploadStatus = $imageFileObj -> upload($_FILES['imageFile'], 'images/');
                if($imageUploadStatus[0]['result'] == -1){
                    array_push($data, array("imageStatus" => $imageUploadStatus[0]['msg']));
                }else{
                    $imageName = $imageUploadStatus[0]['fileName'];
                }
            }else{
                array_push($data, array("result" => -1, "msg" => "You have missed to upload image file." ));
            }
            if(isset($_FILES['zipFile'])){
                $zipFileObj = new uploadFile();
                $zipUploadStatus = $zipFileObj -> upload($_FILES['zipFile'], 'zips/');
                if($zipUploadStatus[0]['result'] == -1){
                    array_push($data, array("zipStatus" => $zipUploadStatus[0]['msg']));
                }else{
                    $zipName = $zipUploadStatus[0]['fileName'];
                }
            }else{
                $zipName = '';
            }

            if($imageUploadStatus[0]['result'] != -1){
                // Set sql query to add record to database
                $sql = "INSERT INTO posts (title,description,langUsed,typeOfPost,image,youtubeVideoId,created,views,downloads,likes,metaTitle,metaDescription,keywords,zipName,status) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
                $query = $con->prepare($sql);
                $query->bind_param('sssssssiiissssi',$title,$description,$langUsed,$typeOfPost,$image,$youtubeVideoId,$created,$views,$downloads,$likes,$metaTitle,$metaDescription,$keywords,$zipName,$status);

                $title = $_POST["title"];
                $description = $_POST["description"];
                $langUsed = $_POST["langUsed"];
                $typeOfPost = $_POST["postType"];
                $image = $imageName;
                $youtubeVideoId = $_POST["youtubeVideoId"];
                $created = $_POST["createdDate"];
                $views = $_POST["views"];
                $downloads = $_POST["downloads"];
                $likes = $_POST["likes"];
                $metaTitle = $_POST["metaTitle"];
                $metaDescription = $_POST["metaDesc"];
                $keywords = $_POST["keywords"];
                $zipName = $zipName;
                $status = $_POST["status"];
                $query->execute();
                $query->close();
                array_push($data, array("result" => 1, "msg" => "Record added and uploading done." ));
            }
        }else{
            array_push($data, array("result" => -1, "msg" => "You have missed to upload image or zip file." ));
        }
        $con->close();
   }else{
       array_push($data, array("error" => "Some error occord in posting data." ));
   }
    echo json_encode($data);
?>