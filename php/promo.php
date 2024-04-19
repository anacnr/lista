<?php
require('bank.php');

if($mysql->connect_error != null){
    die("Erro na conexão" . $mysql->error);
}
else{
  
    $select = "SELECT * FROM produto WHERE id = 1"; // Seleciona apenas 'nome'
    $query = mysqli_query($mysql, $select);
    
    $request = [];
    
    if ($query) {
        while ($row = mysqli_fetch_assoc($query)) {
            $request[] = array("nome" =>$row['nome']); // Adiciona o resultado ao array $request
        }
        header('Content-Type: application/json');
        echo json_encode($request);
    } else {
        echo "Erro na consulta: " . mysqli_error($mysql);
    }
    
    
    mysqli_close($mysql);   
}
?>