<?php

require('bank.php');

if($mysql->connect_error != null){
    die("Erro na conexão" . $mysql->error);
}
else{
    if($_SERVER["REQUEST_METHOD"] == "POST"){

        $request = false;
}
}
?>