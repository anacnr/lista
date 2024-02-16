<?php
// Estabelece a conexão com o banco de dados
include 'bank.php';

if (!$mysql) {
    die("Conexão falhou: " . mysqli_connect_error());
}

// Pesquisar e imprimir na página
$select = "SELECT id,nome FROM setor";
$query = mysqli_query($mysql, $select);

if (mysqli_num_rows($query) > 0) {
    while ($row = mysqli_fetch_assoc($query)) {
        //Imprime no console do navegador com o js
        echo "\n"." ID: " . $row['id']. "NOME: " . $row['nome'] . "<br>";

        echo $lenghts = mysqli_num_rows($query);//Número de linhas resultadas
    }
} else {
    echo "Nenhum resultado encontrado.";
}

// Encerra a conexão com o banco de dados
mysqli_close($mysql);
?>
