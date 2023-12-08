<?php
// Inserção dos produtos. Vai fazer a conexão com o bando de dados

$local = '127.0.0.1';
$user = 'root';
$passw = "";
$bank = 'supermercado';

$conectall = mysqli_connect($local, $user, $passw);
$bank_supermaket = mysqli_select_db($conectall, $bank);

?>