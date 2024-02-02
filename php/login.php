<?php

///Inicia a sessão para o usuário

session_start();

$local = '127.0.0.1';
$user = 'root';
$pass = "";
$bank = 'supermercado';

$mysql = new mysqli($local, $user, $pass, $bank);

// Recebimento do email e da senha
$gmail =  $_POST['end'];
$passw =  $_POST['passw'];

if ($mysql->connect_error != null) {
    die("Conexão não realizada");
} else {
   
    // Faz a pesquisa dentro das tabelas para encontrar o gmail e senha correspondente de maneira mais segura.
    $search = $mysql->prepare("
        SELECT gmail, senha FROM comprador WHERE gmail = ? 
        UNION
        SELECT gmail, senha FROM vendedor WHERE gmail = ? 
        UNION
        SELECT gmail, senha FROM suporte WHERE gmail = ? 
    ");

//Uso do prepared statements para evitar injeção sql.
    $search->bind_param("sss", $gmail, $gmail, $gmail);
    $search->execute();
    $datas = $search->get_result();

    $found = false;// Flag para verificar se encontrou o gmail

    while ($row = mysqli_fetch_array($datas, MYSQLI_ASSOC)) {
        // Verifica se o gmail corresponde no banco de dados
        if ($gmail == $row["gmail"]) {
            $found = true;  //Marca que encontrou o gmail
            // Verifica se a senha está correta
            if (password_verify($passw, $row["senha"])) {
                //O probelma está na maneira que o hash é tratadado
                $request = array("status" => "Encontrado", "message" => "Encontrado!");
            } else {
                $request = array("status" => "SenhaErrada", "message" => "Senha Incorreta!");
            }
            break; // Não é necessário continuar o loop após encontrar o gmail
        }
    }
    
    if($found != true){
        $request = array("status" => "NaoEncontrado", "message" => "Não encontrado!");
    }

    // Retorna a resposta como JSON
    header('Content-Type: application/json');
    echo json_encode($request);
}

// Encerra a conexão com o banco de dados
$mysql->close();
?>