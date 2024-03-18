<?php
require ('bank.php');

if($mysql->connect_error != null){
    die("Erro na conexão" . $mysql->error);
    }
else{
    
    if($_SERVER["REQUEST_METHOD"] == "POST"){
    
      $request = false;
      
    //$button_edit = $_POST['editar'];
    
      if(isset($button_edit)){
    
            //Chama uma outra classe para iniciar a classe mysqli e ter acesso a outros métodos prepared statements
            $start = mysqli_stmt_init($mysql);
    
            //Coloca mais segurança na hora de inserir os dados
            mysqli_stmt_prepare($start, "INSERT INTO produto(nome , codigo, peso,valor,quantidade,marca,imagem) VALUE(?,?,?,?,?,?,?)");
        
            //Organiza os dados na coluna determinada. A quantidade de 's' é a quantidade dos dados
            mysqli_stmt_bind_param($start, 'sssssss', $button_edit);
        
            //Faz os comandos serem executados
            mysqli_stmt_execute($start);
        
            //Fecha as validações
            mysqli_stmt_close($start);
    
            sleep(3);
            header('Location: /lista/supermercado/arquivo.html');//O endereço deve ser completo. Tive que por o redirecionamento aqui.
    
            $request = true;
      }
      header('Content-Type: application/json');
      echo json_encode($request);
    }
    }
mysqli_close($mysql);
?>