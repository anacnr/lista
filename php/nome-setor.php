<?php
include ('bank.php');

if($mysql->connect_error != null){
    die("Erro na conexão" . $mysql->error);
}
else{

    $input = $_POST['novo-valor'];

    $reuest = false; //flag

    if(isset($input)){

        $id_edit = $_POST['id'];

        $alter_date = "UPDATE setor SET nome = $input WHERE  id = $id_edit";

        $query = mysqli_query($mysql,$alter_date);

        if(isset($query)){
            $reuest = true;
        }
        else{
            $reuest = false;
        }
    }

    header('Content-Type: application/json');
    echo json_encode($reuest);
}
?>