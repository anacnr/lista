<?php
require ('bank.php');

if($mysql->connect_error != null){
    die("Erro na conexão");
}
else{

    if($_SERVER['REQUEST_METHOD'] == 'POST'){

        #Dados de um dos vendedores com id igual a 11
        $select = "SELECT * FROM vendedor WHERE id = 14";

        $query = mysqli_query($mysql,$select);

        $request = [];

        if(isset($query)){
            $row = mysqli_fetch_assoc($query);

            $request = ["empresa" => $row['empresa'] , "responsavel" => $row['responsavel'] , "cnpj" => $row['cnpj'] , "local" => $row['localizacao'] , "tel_fixo" => $row['telfixo'] , "celular" => $row['celular'] , "email" => $row['email'] , "senha" => $row['senha'] , "imagem" => $row['imagem']];
        }
        else{
            echo "Algo de errado";
        }

        header('Content-Type: application/json');
        echo json_encode($request);
    }
}
?>