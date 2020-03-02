<?php
    include('../config.ini.php');

    function uploading(){
        $postdata = file_get_contents("php://input");
        if(isset($postdata)){
            $request = json_decode($postdata);
            $postData['image_base64'] = $request->image_base64;
            $postData['imageName'] = 'imgname';
            if(!empty($postData['image_base64'])){
                $img = str_replace('data:image/jpg;base64,','',$postData['image_base64']);
                $img = str_replace(' ','+',$img);
                $data = base64_decode(preg_replace('#^data:image/\w+;base64,#i','',$img));
                $target_file = $_SERVER['DOCUMENT_ROOT'].'/upload_img/mobile_pic/pic_'.$postData['imageName'].'.jpg';
                if(file_put_contents($target_file,$data))
                    echo json_encode(array('msg'=>'success'));
                else
                echo json_encode(array('msg'=>'fail'));
            }
        }
    }
    uploading();
  