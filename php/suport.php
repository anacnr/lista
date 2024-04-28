<?php
//Criação do cadastro para suporte . Este script cria para que a senha do suporte receba o tratamento de hash e seja inserido no banco criptografado
require('bank.php');

$email = $_POST["email"];
$passw = $_POST["senha"];

//Essa variável vai ser inserida na coluna da senha
$hash_passw = password_hash($passw, PASSWORD_DEFAULT,);

if($mysql->connect_error != null){
    die("Erro na conexão");
}
else{

    //Chama uma outra classe para iniciar a classe mysqli e ter acesso a outros métodos do prepared statements
    $start = mysqli_stmt_init($mysql);

    //Coloca mais segurança na hora de inserir os dados
    mysqli_stmt_prepare($start, "INSERT INTO suporte (email, senha, senha_hash) VALUES (?,?,?)");

    //Organiza os dados na coluna determinada. A quantidade de 's' é a quantidade dos dados
    mysqli_stmt_bind_param($start, "sss", $email, $passw ,$hash_passw);

    //Faz os comandos serem executados
    mysqli_stmt_execute($start);

    //Fecha as validações
    mysqli_stmt_close($start);
}

//Encerra a conexão com o banco de dados
mysqli_close($mysql);
?>