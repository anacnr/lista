<?php

$local = '127.0.0.1';
$user = 'root';
$pass = "";
$bank = 'supermercado';

$mysql = new mysqli($local, $user, $pass, $bank);

//Recebimento do email e da senha
$gmail =  $_POST['end'];
$passw =  $_POST['passw'];

if ($mysql->connect_error != null) {
    die("Conexão não realizada");
} else {
   
    //Faz a pesquisa dentro das tabelas para encontrar o gmail correspondente
    $search = $mysql->prepare("SELECT gmail, senha FROM comprador WHERE gmail = ? AND senha = ? UNION SELECT gmail, senha FROM vendedor WHERE gmail = ? AND senha = ? UNION SELECT gmail,senha FROM suporte WHERE gmail = ? AND senha = ?");
    $search->bind_param("ssssss", $gmail,$passw, $gmail,$passw, $gmail,$passw);
    $search->execute();
    $datas = $search->get_result();

    $request = array("status" => "NaoEncontrado", "message" => "Não encontrado!");

    while ($row = mysqli_fetch_array($datas, MYSQLI_ASSOC)) {
        // Verifica se o gmail corresponde no banco de dados
        if ($gmail == $row["gmail"]) {            
            //Verifica se o hash e a senha são os mesmos do banco  
            if(password_verify($passw, $row["senha"]) == true){
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
