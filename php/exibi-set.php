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
    
    <span class="name"> <?php while ($row = mysqli_fetch_assoc($query)) { echo $row['nome'];} ?> </span>

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
       // console.log(request)
    }).fail(function(jqXHR, textStatus, errorThrown){
        console.log(" ERRO " , jqXHR, textStatus, errorThrown)
    })//ajax
    });//Onload
</script>
</body>
</html>