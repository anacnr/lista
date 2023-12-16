<?php
//Criação do cadastro para suporte . Este script cria para que a senha do suporte receba o tratamento de hash e seja inserido no banco criptografado
$local = '127.0.0.1';
$user = 'root';
$pass = "";
$bank = 'supermercado';

//Cria uma instância da classe mysqli
$mysql = new mysqli("$local", "$user", "$pass", "$bank");

$gmail = $_POST["gmail"];
$passw = $_POST["senha"];

if($bank->connect_error != null){
    die("Erro na conexão");
}
else{

    //Chama uma outra classe para iniciar a classe mysqli e ter acesso a outros métodos
    $start = mysqli_stmt_init($mysql);

    //Coloca mais segurança na hora de inserir os dados
    mysqli_stmt_prepare($start, "INSERT INTO suporte (gmail, senha) VALUES (?,?)");

    //Organiza os dados na coluna determinada. A quantidade de 's' é a quantidade dos dados
    mysqli_stmt_bind_param($start, "ss", $gmail, $passw);

    //Faz os comandos serem executados
    mysqli_stmt_execute($start);

    //Fecha as validações
    mysqli_stmt_close($start);
}

//Encerra a conexão com o banco de dados
mysqli_close($mysql);
?>