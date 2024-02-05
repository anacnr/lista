<?php

$local = '127.0.0.1';
$user = 'root';
$passw = "";
$bank = 'supermercado';

$mysql = new mysqli("$local", "$user", "$passw", "$bank");

$setor_name = $_POST['setor'];

if($mysql->connect_error != null){
    die("Erro na conexão." . $connect->connect_error);
}
else{

    if(strlen($setor_name) > 3){

    //Inserção de dados
    $insert = "INSERT INTO setor (nome) VALUES ('$setor_name')";

    $query =  mysqli_query($mysql,$insert);

    echo "Setor " . $setor_name . " inserido";
    $request = true;
    
    }
    else{
        $request = false;
        echo " Nome de setor inválido " . $setor_name. strlen($setor_name) . " letras ";
    }
    echo json_encode($request);//Se comunica com o js. É uma string respondendo o valor "true" ou "false" entre aspas
}

mysqli_close($mysql)
?>