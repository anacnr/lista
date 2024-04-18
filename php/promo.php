<?php
require('bank.php');

if($mysql->connect_error != null){
    die("Erro na conexão");
}
else{
  
        $input = $_POST['product'];
    
        if ($input) {
            $select = "SELECT nome FROM produto WHERE ID = 1";
            $query = mysqli_query($mysql, $select);

            $request = [];
    
            if (mysqli_num_rows($query) > 0) {
                while ($row = mysqli_fetch_assoc($query)) {
                    $request[] = array('nome' => $row['nome'], 'code' => $row['codigo'], 'marca' => $row['marca']);
                }
                header('Content-Type: application/json');
                echo json_encode($request);
            } else {
                echo "Nenhum resultado encontrado.";
            }
        } 
        else {
            echo "Nenhum input recebido.";
        }
    
    mysqli_close($mysql);   
}
?>