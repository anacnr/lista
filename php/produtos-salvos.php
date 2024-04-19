<?php
require('bank.php');

if($mysql->connect_error != null){
    die("Erro na conexão" . $mysql->error);
}

else{

    $select = "SELECT * FROM produto";

    $query = mysqli_query($mysql,$select);

    $request = [];

    if(mysqli_num_rows($query) > 0){

        $fields = mysqli_num_fields($query);

        while($row = mysqli_fetch_assoc($query)){
            $request[]= array('campos' => $fields,'id' => $row['id'] , 'nome' => $row['nome'] , 'codigo' => $row['codigo'] ,'peso' => $row['peso'] ,'valor' => $row['valor'],'marca' => $row['marca'],'quantidade' => $row['quantidade'],'img' => $row['imagem']);
        }

        header('Content-Type: application/json');
        echo json_encode($request);
        exit;
    }           
    else {
    echo "Nenhum resultado encontrado.";
    }

//Encerra a conexão com o banco de dados
mysqli_close($mysql);

}
?>