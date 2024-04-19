<?php
require('bank.php');

if($mysql->connect_error != null){
    die("Erro na conexão" . $mysql->error);
}
else{

    $input = $_POST['product'];

    if(!empty($input)){
        //Se o valor do input não estiver vazio vai realizar a pesquisa
        $select = "SELECT * FROM produto WHERE nome LIKE '%$input%'";

        $query = mysqli_query($mysql, $select);

        $request = [];

        if (mysqli_num_rows($query) > 0) {

            $rows = mysqli_num_rows($query);

            while ($row = mysqli_fetch_assoc($query)) {
                $request[] = array('nome' => $row['nome'], 'codigo' => $row['codigo'], 'marca' => $row['marca'], 'linhas' => $rows);
            }
            header('Content-Type: application/json');
            echo json_encode($request);
            exit;
        } else {
            echo "Nenhum resultado encontrado.";
        }
    }
    else{
        echo "Input vazio!";
    }
    mysqli_close($mysql);   
}
?>