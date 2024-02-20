<?php
require ('bank.php');

if($mysql->connect_error != null){
    die("Erro na conexão");
}
else{

// Pesquisar e imprimir na página
$select = "SELECT * FROM setor";

$query = mysqli_query($mysql, $select);

if (mysqli_num_rows($query) > 0) {

    $lines = mysqli_num_rows($query);//Número de linhas contidas na tabela setor
    while ($row = mysqli_fetch_assoc($query)) { 
       echo "<span class = 'name'>" . $row['nome'] . "</span>";
    }
}       
else {
    echo "Nenhum resultado encontrado.";
}

//Encerra a conexão com o banco de dados
mysqli_close($mysql);
}

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Setores cadastrados</title>
    <!--Tela maior-->
    <link rel="stylesheet" href="../css/set-vendedor/desktop.css">
    <!--Tela menor-->
    <link rel="stylesheet" href="../css/set-vendedor/mobile.css">
</head>
<body>
    <img src="../supermercado/buttons/edit_square_FILL0_wght400_GRAD0_opsz24.svg" alt="botao-edita" width="50px">

    <img src="../supermercado/buttons/delete_FILL0_wght400_GRAD0_opsz24.svg" alt="botao-apaga" width="50px
    ">

    <script src="../javascript/jquery-3.7.1.min.js"></script>   
<script>
    document.addEventListener("DOMContentLoaded", function(){
        console.log('Script carregado!')
    let nome = document.querySelector('.name')
    let setor = new FormData();
    setor.append('nome', nome)
    $.ajax({
        url: 'exibi-set.php' , type: 'POST' ,data:setor , processData: false ,contentType: false  
    }).done(function(request){
       
    }).fail(function(jqXHR, textStatus, errorThrown){
        console.log(" ERRO " , jqXHR, textStatus, errorThrown)
    })//ajax
    });//Onload
</script>
</body>
</html>