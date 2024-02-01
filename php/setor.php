<?php

$local = '127.0.0.1';
$user = 'root';
$passw = "";
$bank = 'supermercado';

$connect = mysqli_connect($local,$user,$passw,$bank);

$setor_name = $_POST['setor'];

if($connect->connect_error != null){
    die("Erro na conexão." . $connect->connect_error);
}
else{

    $insert = "INSERT INTO setor ('nome') VALUES ('$setor_name')";

    mysqli_query($connect,$insert);
}

?>