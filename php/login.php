<?php
$local = '127.0.0.1';
$user = 'root';
$pass = "";
$bank = 'supermercado';

$mysql = new mysqli($local, $user, $pass, $bank);

//Recebimento do email e da senha
$email =  $_POST['end'];
$passw =  $_POST['passw'];

if ($mysql->connect_error != null) {
    die("Conexão não realizada");
} else {
   
    // Faz a pesquisa dentro das tabelas para encontrar o gmail e senha correspondente de maneira mais segura.
    $search = $mysql->prepare("
        SELECT email, senha FROM comprador WHERE email = ? 
        UNION
        SELECT email, senha FROM vendedor WHERE email = ? 
        UNION
        SELECT email, senha FROM suporte WHERE email = ? 
    ");
    
    $search->bind_param("sss", $email, $email, $email);
    $search->execute();
    $datas = $search->get_result();
    
    $found = false; // Flag para verificar se encontrou o gmail
    
    while ($row = $datas->fetch_assoc()) {
        // Verifica se o email corresponde no banco de dados
        if ($email == $row["email"]) {
            $found = true; 
            // Verifica se a senha está correta
            if (password_verify($passw, $row["senha"])) {
                // O problema está na maneira que o hash é tratado
                $request = array("status" => "Encontrado", "message" => "Encontrado!");
            } else {
                $request = array("status" => "SenhaErrada", "message" => "Senha Incorreta!");
            }
            break; //Não é necessário continuar o loop após encontrar o gmail
        }
    }
    
    if (!$found) {
        $request = array("status" => "NaoEncontrado", "message" => "Não encontrado!");
    }
    
    //Retorna a resposta como JSON
    header('Content-Type: application/json');
    echo json_encode($request);
    
}

// Encerra a conexão com o banco de dados
$mysql->close();
?>