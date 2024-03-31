<?php
require ('bank.php');

if($mysql->connect_error != null){
    die("Erro na conexão" . $mysql->error);
    }
else{
    
      
    $product = $_POST['product'];
    $code = $_POST['code'];
    $measure = $_POST['measure'];
    $price = $_POST['price'];
    $brand = $_POST['brand'];
    $quantity = $_POST['quantity'];
    $image = $_FILES['image'];

    $image_name = $image['name'];

    if(isset($image)){
      if($image['size'] < 2000500){

        //Inserção da imagem

        $random_name = uniqid();

        //Extensão da imagem.
        $extension_img = pathinfo($image_name,PATHINFO_EXTENSION);

        //Transformação para letra minúscula da extensão
        $low_ext = strtolower($extension_img);

        //Pasta para receber as imagens
        $imgs_saved = 'produtos/';

        //Nome aleatório, extensão e pasta
        $img_datas = $imgs_saved . $random_name . "." . $low_ext;

        //Move as imagens para a pasta
        $img_sent = move_uploaded_file($image['tmp_name'], $img_datas);
      }

    }
    
    

}
mysqli_close($mysql);
?>