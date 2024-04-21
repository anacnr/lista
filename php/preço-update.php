<?php

require('bank.php');

if($mysql->connect_error != null){
    die("Erro na conexão" . $mysql->error);
}
else{
    if($_SERVER["REQUEST_METHOD"] == "POST"){

        $input = $_POST['new-price'];
        $code = $_POST['code'];

        $request = false;

        $update = "UPDATE produto SET valor = '$input' WHERE codigo = '$code'";

        if(!empty($input)){

            $query = mysqli_query($mysql, $update);

            if($query){
                $request = true;
            }
            else{
                $request = false;
            }
        }
        else{
            echo "Input vazio";
            exit; 
        }
        header('Content-Type: application/json');
        echo json_encode($request);
}
}
mysqli_close($mysql);
?>