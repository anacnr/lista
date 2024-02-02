<?php

$local = '127.0.0.1';
$user = 'root';
$passw = "";
$bank = 'supermercado';

$mysql = new mysqli("$local", "$user", "$pass", "$bank");

$setor_name = $_POST['setor'];

if($mysql->connect_error != null){
    die("Erro na conexão." . $connect->connect_error);
}
else{

    $insert = "INSERT INTO setor ('nome') VALUES ('$setor_name')";

    mysqli_query($mysql,$insert);
}

?>