<?php
$local = '127.0.0.1';
$user = 'root';
$pass = "";
$bank = 'supermercado';

//Cria uma instância da classe mysqli
$mysql = new mysqli("$local", "$user", "$pass", "$bank");
?>