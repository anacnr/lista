<?php
require('bank.php');

if($mysql->connect_error != null){
    die("Eroo na conexão" . $mysql->error);
}
else{

    if($_SERVER["REQUEST_METHOD"] == "POST"){
     $bloom  = $_POST['product'];

     if($bloom){

        $select = "SELECT nome, codigo, marca FROM produto LIKE [a-z]% ORDER BY ASC"; //Pega o resultado conforme a letra digitada encontrada em ordem crescente 

        $query = mysqli_query($mysql,$select);

        $request = [];//Amostrar todos os dados salvos

        if(mysqli_num_rows($query)>0){
            while($row = mysqli_fetch_assoc($query)){ 
                $request = ["nome" => $row['nome'] , "code" => $row['codigo'], "marca" => $row['marca']];
              }
              header('Content-Type: application/json');
              echo  json_encode($request);
        }
        else {
            echo "Nenhum resultado encontrado.";
        }
     }
     else{
        echo "Erro.
        ";
     }
    }
//Encerra a conexão com o banco de dados
mysqli_close($mysql);
}
?>