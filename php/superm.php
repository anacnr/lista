<?php
// Criar a conexão com o banco
require('bank.php');

//Pega os dados do formulário
$company = $_POST['empresa'];
$name = $_POST['responsavel'];
$cnpj = $_POST['cnpj'];
$end = $_POST['localizacao'];
$fixo = $_POST['telfixo'];
$celular = $_POST['celular'];
$email = $_POST['email'];
$passw = $_POST['senha'];
$hash_pass = password_hash($passw, PASSWORD_DEFAULT);
$image = $_FILES['img']; 

if($mysql->connect_error != null){
    die("Erro na conexão");
}
else{

//Amostra as configurações da imagem
$img_dates = $image['name'];

//Verifica se alguma imagem foi escolhida
if(isset($image)){
    
    if($image['size'] < 2000500){

    //Gera um valor aleatório para o nome da imagem
    $random_name = uniqid();

    //Pega a extensão da imagem. E Converte a extensaão para minúscula
    $low_ext = strtolower(pathinfo($img_dates, PATHINFO_EXTENSION));

    //Pasta que vai receber os arquivos
    $imgs_saved = 'enviadas/';

    //Essa variável vai receber o valor embaralhado, a sua extensão e a pasta
    $name_ext = $imgs_saved . $random_name . "." . $low_ext;

    $img_sent = move_uploaded_file($image['tmp_name'], $name_ext);

    //Valida se a imagem foi salva na pasta enviadas
    if($img_sent == true){

    //Chama uma outra classe para iniciar a classe mysqli e ter acesso a outros métodos prepared statements
    $start = mysqli_stmt_init($mysql);

    //Coloca mais segurança na hora de inserir os dados
    mysqli_stmt_prepare($start, "INSERT INTO vendedor(empresa,responsavel,cnpj,localizacao,telfixo,celular,email,senha,senha_hash,imagem) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

    //Organiza os dados na coluna determinada
    mysqli_stmt_bind_param($start, 'ssssssssss', $company, $name, $cnpj, $end, $fixo, $celular, $email, $passw,$hash_pass,$name_ext);

    //Faz os comandos serem executados
    mysqli_stmt_execute($start);
    sleep(3);
    header('Location: ../supermercado/index.html');//Precisa ser redirecionado para o index na pasta supermercado
    }
    else{
        die("Erro");
    }
} 
    else{
    echo "Imagem com tamanho incompatível";
}
}
else{
    echo "Nenhuma imagem escolhida";
}
}

//Fecha as validações
mysqli_stmt_close($start); 

//Fecha a conexão com o banco de dados
mysqli_close($mysql);

?>