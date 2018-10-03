<?php
class uploadFile {
    public $status = array();
    public $uploadOk = 0;
    public $tempfileName;
    public $fileExtension;
    public $newFileName ='';
    public $fileSize = 0;
    public $errorMsg = '';
    public $target_dir;

    public function upload($files, $dir){

        $this->target_dir = '../../../assets/uploads/'.$dir;
        // Set new file name, which will be uploaded
        $tempName = explode('.',$files['name']);
        $this->newFileName = round(microtime(true)) . '.' . end($tempName);

        if($this->getFileMimeType($files) == 'image/jpeg' || $this->getFileMimeType($files) == 'image/jpg' 
        || $this->getFileMimeType($files) == 'image/png' || $this->getFileMimeType($files) == 'image/gif'){
            $this->uploadOk = 1;
            if($this->checkFileSizeLimit($files,204800)){
                $this->uploadOk = 0;
                array_push($this->status, array("result" => -1, "msg" => "Sorry, your file is too large in size (max 200kb)." ));
            }
        }
        if($this->getFileMimeType($files) == 'application/zip'){
            $this->uploadOk = 1;
        }

        if($this->getFileMimeType($files) == 'image/jpeg' || $this->getFileMimeType($files) == 'image/jpg' 
        || $this->getFileMimeType($files) == 'image/png' || $this->getFileMimeType($files) == 'image/gif'
        || $this->getFileMimeType($files) == 'application/zip'){
            if($this->checkForFileExists($this->newFileName)){
                $this->uploadOk = 0;
                array_push($this->status, array("result" => -1, "msg" => "Sorry, file already exists." ));
            }
            // call upload function finally
            if($this->uploadOk !== 0){
                if($this->uploadFinally($files)){
                    $this->status = array();
                    array_push($this->status, array("result" => 1, "msg" => "uploaded","fileName" => $this->newFileName ));
                }
            }else{
                array_push($this->status, array("result" => -1, "msg" => "Sorry, your file was not uploaded." ));
            }
        }else{
            $this->uploadOk = 0;
            array_push($this->status, array("result" => -1, "msg" => "This type of file can not be uploaded." ));
        }
        return $this->status;
    }

    // Get file extension
    public function getFileMimeType($files){
        return mime_content_type($files['tmp_name']);
    }
    // Get file size in bytes
    public function getFileSize($files){
        return filesize($files["tmp_name"]);
    }

    // check for file size limit
    public function checkFileSizeLimit($files,$limit){
        if ($this->getFileSize($files) > $limit) {
            return true;
        }
    }
    // Check for already existing file
    public function checkForFileExists($newFileName){
        if(file_exists($this->target_dir.''.$newFileName)){
            return true;
        }
    }

    // Upload file finally
    public function uploadFinally($files){
        if (move_uploaded_file($files["tmp_name"], $this->target_dir.''.$this->newFileName)) {
            return true;
        }else{
            return false;
        }
    }
}
?>