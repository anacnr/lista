<?php
require('bank.php');

//Recupera dados do formulário
$name = $_POST['nome'];
$cpf = $_POST['cpf'];
$end = $_POST['email'];
$house = $_POST['moradia'];
$tel = $_POST['telefone'];
$passw = $_POST['senha']; 

//Essa variável vai ser inserida na coluna da senha
$hash_passw = password_hash($passw, PASSWORD_DEFAULT);

if($mysql->connect_error != null){
    die("Erro na conexão");
}
else{

    //Chama uma outra classe para iniciar a classe mysqli e ter acesso a outros métodos prepared statements
    $start = mysqli_stmt_init($mysql);

    //Coloca mais segurança na hora de inserir os dados
    mysqli_stmt_prepare($start, "INSERT INTO comprador(nome,cpf, email,moradia,telefone,senha,senha_hash) VALUES(?, ?, ?, ?, ?, ?, ?)");

    //Organiza os dados na coluna determinada. A quantidade de 's' é a quantidade dos dados
    mysqli_stmt_bind_param($start, 'sssssss', $name, $cpf, $end, $house, $tel,$passw,$hash_passw);

    //Faz os comandos serem executados
    mysqli_stmt_execute($start);

    sleep(3);
    header('Location: ../cliente/index.html');//Precisa ser redirecionado para o index dentro da pasta cliente
      
    //Fecha as validações
    mysqli_stmt_close($start);
}

//Encerra a conexão com o banco de dados
mysqli_close($mysql);
?>