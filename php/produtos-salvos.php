<?php
require('bank.php');


if($mysql->connect_error != null){
    die("Erro na conexão" . $mysql->error);
}

else{

    $select = "SELECT * FROM produto";

    $query = mysqli_query($mysql,$select);

    if($query)
}
?>