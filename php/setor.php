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

    //Inserção de dados
    $insert = "INSERT INTO setor (nome) VALUES ('$setor_name')";

    $query =  mysqli_query($mysql,$insert);

    //Se a query não for nula vai emitir o echo
    if(!$query == null){
        echo "Setor " . $setor_name . " inserido";
        $request = true;
    }
    else{
        echo "Erro na inserção";
    }

    echo json_encode($request);//Se comunicar com o js
}

?>