<?php
require ('bank.php');

if($mysql->connect_error != null){
    die("Erro na conexão");
}
else{

// Pesquisar e imprimir na página
$select = "SELECT * FROM produto";

$query = mysqli_query($mysql, $select);

$request = [];

if (mysqli_num_rows($query) > 0) {

    while ($row = mysqli_fetch_assoc($query)) { 
      $request []= array('id'=> $row['id'] ,'nome' => $row['nome'], 'codigo'  => $row['codigo'], 'peso' => $row['peso'], 'valor' => $row['valor'], 'quantidade' => $row['quantidade'], 'marca' => $row['marca'], 'imagem' => $row['imagem']); //Lista tudo
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