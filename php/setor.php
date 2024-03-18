<?php
//Estabelece a conexão com o banco de dados
include ('bank.php');

if (!$mysql) {
    die("Conexão falhou: " . mysqli_connect_error());
}

//Pesquisa e imprimir na página
$select = "SELECT * FROM setor";

$query = mysqli_query($mysql, $select);

if (mysqli_num_rows($query) > 0) {

    $lines = mysqli_num_rows($query);//Número de linhas contidas na tabela setor

  while ($row = mysqli_fetch_assoc($query)) {
    $id = $row['id']; //Coluna dos ids
    $nome = $row['nome']; //Coluna dos nomes
    $request = ["id" => $id, "nome" => $nome, "linha" => $lines]; //Esse array vai servir para fazer a manipulação para o front-end
}
header('Content-Type: application:json');
echo json_encode($request);

}       
else {
    echo "Nenhum resultado encontrado.";
}

//Encerra a conexão com o banco de dados
mysqli_close($mysql);
?>
