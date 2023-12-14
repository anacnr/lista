<?php

include 'cliente.php';

$local = '127.0.0.1';
$user = 'root';
$pass = "";
$bank = 'supermercado';

$mysql = new mysqli($local, $user, $pass, $bank);

//Recebimento do email e da senha
$gmail =  $_POST['end'];
$passw =  $_POST['passw'];

//Verifica se o hash e a senha são os mesmos do banco
$verif_passw = password_verify($passw,$hash_passw);

if ($mysql->connect_error != null) {
    die("Conexão não realizada");
} else {
   
    // Faz a pesquisa no banco
    $search = $mysql->prepare("SELECT * FROM comprador WHERE gmail = ?");
    $search->bind_param("s", $gmail);
    $search->execute();
    $datas = $search->get_result();

    $request = array("status" => "NaoEncontrado", "message" => "Não encontrado!");

    while ($row = mysqli_fetch_array($datas, MYSQLI_ASSOC)) {
        // Verifica se o gmail corresponde no banco de dados
        if ($gmail == $row["gmail"]) {
            if($passw == $row["senha"]){
                $request = array("status" => "Encontrado", "message" => "Encontrado!");
            }
            else{
                $request = array("status" => "SenhaErrada", "message" => "Senha incorreta!");
            }
            // Não é necessário continuar o loop, pois o gmail foi encontrado
            break;
        }    
    }

    // Retorna a resposta como JSON
    header('Content-Type: application/json');
    echo json_encode($request);
}

// Encerra a conexão com o banco de dados
$mysql->close();

?>
