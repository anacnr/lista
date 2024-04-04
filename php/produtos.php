<?php
require ('bank.php');

if($mysql->connect_error != null){
    die("Erro na conexão" . $mysql->error);
    }
else{

  $request = false;
      
    $product = $_POST['name'];
    $code = $_POST['name'];
    $measure = $_POST['name'];
    $price = $_POST['name'];
    $brand = $_POST['name'];
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

        //Cria o prepared statements para prevenir a injeção SQL

        $start = mysqli_stmt_init($mysql);

       //Inserção dos valores de forma prevenida
       mysqli_stmt_prepare($start, "INSERT INTO produto (nome,codigo,peso,valor,marca,quantidade,imagem) VALUES(?,?,?,?,?,?,?)");

      //Tratamento dos valores

      mysqli_stmt_bind_param($start, 'sssssss' , $product, $code, $measure, $price, $brand, $quantity, $img_datas);

      mysqli_stmt_execute($start);

      $request = true;
      }
      else{
        die("Erro na inserção. Imagem muito grande");
      }
    }

    //Comunicação com ajax
    header('Content-Type: application/json');
    echo json_encode($request);

}
//Fecha as validações
mysqli_stmt_errno($start);

mysqli_close($mysql);
?>