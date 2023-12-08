<?php

// Cria a conexão com o banco
$local = '127.0.0.1';
$user = 'root';
$pass = "";
$bank = 'supermercado';

//Cria uma instância da classe mysqli
$bank = new mysqli("$local", "$user", "$pass", "$bank");

//Recupera dados do formulário
$name = $_POST['nome'];
$cpf = $_POST['cpf'];
$end = $_POST['gmail'];
$house = $_POST['moradia'];
$tel = $_POST['telefone'];
$passw = $_POST['senha']; //Preciso usar a função para criptografar a senha

function protectPass($passw){
    return password_hash($passw, PASSWORD_BCRYPT); //Senha que recebeu o hash
}

if($bank->connect_error != null){
    die("Erro na conexão");
}
else{

    //Chama uma outra classe para iniciar a classe mysqli e ter acesso a outros métodos
    $start = mysqli_stmt_init($bank);

    //Coloca mais segurança na hora de inserir os dados
    mysqli_stmt_prepare($start, "INSERT INTO comprador(nome,cpf, gmail,moradia,telefone,senha) VALUES(?, ?, ?, ?, ?, ?)");

    //Organiza os dados na coluna determinada. A quantidade de 's' é a quantidade dos dados
    mysqli_stmt_bind_param($start, 'ssssss', $name, $cpf, $end, $house, $tel, $security);

    //Faz os comandos serem executados
    mysqli_stmt_execute($start);

    //Fecha as validações
    mysqli_stmt_close($start);
}

//Encerra a conexão com o banco de dados
mysqli_close($bank);
?>