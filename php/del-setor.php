<?php
include ('bank.php');

if($mysql->connect_error != null){
    die("Erro na conexão" . $mysql->error);
}
else{

    $button_del = $_POST['botao-deleta'];

    $request = false;//flag

    if($button_del){

        $del_id = $_POST['id-deletado'];

        $del_date = "DELETE FROM setor WHERE id = $del_id";

        $query  = mysqli_query($mysql, $del_date);

        if(isset($query)){
            $request = true;
        }
        else{
            $request = false;
        }

    }
    header('Content-Type: application/json');
    echo json_encode($request);
}
?>