<?php

//Criação da validação do login
$local = '127.0.0.1';
$user = 'root';
$pass = "";
$bank = 'supermercado';

//Cria uma instância da classe mysqli
$mysql = new mysqli("$local", "$user", "$pass", "$bank");

$gmail = $_POST['end'];
$passw = $_POST['passw'];

if($mysql->connect_error != null){
    die("Conexão não realizada");
}
else{
   
    //Faz a pesquisa no banco
    $search = ('SELECT gmail,senha FROM comprador WHERE gmail = $gmail and senha = $passw');

    

    while($result_query = mysqli_query($mysql, $search)){
    $row = mysqli_fetch_array($result_query, MYSQLI_ASSOC );


    //Verifica se o gmail e senha correspondem no banco de dados
    if ($gmail == $row["gmail"] and $passw == $row["senha"]) {
        $resposta = array("status" => "Encontrado", "message" => "Encontrado!");
    }
     else {
        $resposta = array("status" => "NaoEncontrado", "message" => "Não encontrado!");
    }
    }

    // Retorna a resposta como JSON
    header('Content-Type: application/json');
    echo json_encode($resposta);

}

//Encerra a conexão com o banco de dados
mysqli_close($mysql);

?>

