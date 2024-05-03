<?php
require ('bank.php');
 
if($mysql->connect_error != null){
    die("Erro na conexão");
}
else{

//Pesquisa e imprime na página
$select = "SELECT * FROM setor";

$query = mysqli_query($mysql, $select);

$request = [];

if (mysqli_num_rows($query) > 0) {

    while($row = mysqli_fetch_assoc($query)) { 
      $request []= array('nome' => $row['nome'], 'id' => $row['id']); //Listar todos os nomes
    }
    header('Content-Type: application/json');
    echo  json_encode($request);
    exit;
}       
else {
    echo "Nenhum resultado encontrado.";
}

//Encerra a conexão com o banco de dados
mysqli_close($mysql);
}

?>