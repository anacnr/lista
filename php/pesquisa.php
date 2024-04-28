<?php
require('bank.php');

if($mysql->connect_error != null) {
    die("Conexão não realizada");
}

else{
    if($_SERVER['REQUEST_METHOD'] == 'POST'){

        $input = $_POST['input'];

        $sel_superm = "SELECT * FROM vendedor WHERE empresa LIKE '%$input%'";
        $query_superm = mysqli_query($mysql, $sel_superm);

        $sel_brand_prod = "SELECT * FROM produto WHERE marca LIKE '%$input%' OR nome LIKE '%$input%'";
        $query_brand_prod = mysqli_query($mysql, $sel_brand_prod);

        if(!empty($input)){

            if(mysqli_num_rows($query_superm) > 0){

                while($row1 = mysqli_fetch_assoc($query_superm)){
                    $request[] = array("empresa" => $row1['empresa'] , "responsavel" => $row1['responsavel'] , "cnpj" => $row1['cnpj'] , "local" => $row1['localizacao'] , "tel_fixo" => $row1['telfixo'] , "celular" => $row1['celular'] , "email" => $row1['email'] , "senha" => $row1['senha'] , "imagem" => $row1['imagem'], "linhas" => mysqli_num_rows($query_superm) ,"id" => $row1['id'] ,"tabela" => "empresa");
                }
            }
            else{
                $request[] = array("vazio" => "vazio", "tabela" => "empresa");
            }

            if(mysqli_num_rows($query_brand_prod) > 0){

                while($row2 = mysqli_fetch_assoc($query_brand_prod)){
                    $request[]= array('id' => $row2['id'] , 'nome' => $row2['nome'] , 'codigo' => $row2['codigo'] ,'peso' => $row2['peso'] ,'valor' => $row2['valor'],'marca' => $row2['marca'],'quantidade' => $row2['quantidade'],'img' => $row2['imagem'], "tabela" => "produto");
                }
            }
            else{
                $request[] = array("vazio" => "vazio" , "tabela" => "produto");
            }
            

            header('Content-Type: application/json');
            echo json_encode($request);
        }
    }
}
?>