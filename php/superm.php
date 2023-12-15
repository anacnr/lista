<?php

// Criar a conexão com o banco

$local = '127.0.0.1';
$user = 'root';
$pass = '';
$bank = 'supermercado';

//Cria uma instância da classe mysqli
$bank = new mysqli("$local", "$user", "$pass", "$bank");

//Pega os dados do formulário
$company = $_POST['empresa'];
$name = $_POST['nome'];
$cnpj = $_POST['cnpj'];
$end = $_POST['endereco'];
$fixo = $_POST['contato-fixo'];
$celular = $_POST['contato-cel'];
$gmail = $_POST['gmail'];
$passw = $_POST['senha'];
//Preciso usar a função random para criptografar a senha
$hash_pass = password_hash($passw, PASSWORD_DEFAULT);
$image = $_FILES['img']; 

if($bank->connect_error != null){
    die("Erro na conexão");
}
else{

//Amostra as configurações da imagem
$img_dates = $image['name']; //Tentei colocar a posição [0] mas não fucinonou

//Verificar se alguma imagem foi escolhida
if(isset($image)){
    
    if($image['size'] < 2000500){

    //Gera um valor aleatório para o nome da iamgem
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

    //Chama uma outra classe para iniciar a classe mysqli e ter acesso a outros métodos
    $start = mysqli_stmt_init($bank);

    //Coloca mais segurança na hora de inserir os dados
    mysqli_stmt_prepare($start, "INSERT INTO vendedor(empresa,responsavel,cnpj,localizacao,telfixo,celular,gmail,senha,imagem) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)");

    //Organiza os dados na coluna determinada
    mysqli_stmt_bind_param($start, 'sssssssss', $company, $name, $cnpj, $end, $fixo, $celular, $gmail, $hash_pass,$name_ext);

    //Faz os comandos serem executados
    mysqli_stmt_execute($start);        
    }
    else{
        die;
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
mysqli_close($bank);

?>