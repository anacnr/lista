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

if ($mysql->connect_error != null) {
    die("Conexão não realizada");
} else {
   
    //Faz a pesquisa no banco
    $search = "SELECT * FROM comprador WHERE gmail = '$gmail'";
    $datas = mysqli_query($mysql, $search);

   $request = array("status" => "NaoEncontrado", "message" => "Não encontrado!");

    while ($row = mysqli_fetch_array($datas, MYSQLI_ASSOC)) {
        // Verifica se o gmail corresponde no banco de dados
        if ($gmail == $row["gmail"]) {
            // Usuário encontrado, verifica a senha
            if ($passw == $row["senha"]) {
                $request = array("status" => "Encontrado", "message" => "Encontrado!");
            } else {
                $request = array("status" => "SenhaErrada", "message" => "Senha incorreta!");
            }
            // Não é necessário continuar o loop, pois o gmail foi encontrado
            break;
        }    
        else{
            if ($passw == $row["senha"]){
                $request = array("status" => "EmailErrado", "message" => "Email incorreto!");
            }
            break;
        }
    }

    // Retorna a resposta como JSON
    header('Content-Type: application/json');
    echo json_encode($request);
}

//Encerra a conexão com o banco de dados
mysqli_close($mysql);

?>


