<?php

require ('bank.php');

if($mysql->connect_error != null){
    die("Erro na conexão");
}
else{
    $select = "SELECT nome, marca, codigo FROM produto";

    $query = mysqli_query($mysql,$select);

    $request = [];//Amostrar todos os dados salvos

    if (mysqli_num_rows($query) > 0) {
        /*
        while ($row = mysqli_fetch_assoc($query)) { 
          $request []= (00); //Listar todos os nomes
        }
        header('Content-Type: application/json');
        echo  json_encode($request);
        exit;
        */
    }       
    else {
        echo "Nenhum resultado encontrado.";
        $request ["vazio"];
    }
    //Encerra a conexão com o banco de dados
    mysqli_close($mysql);
}
?>