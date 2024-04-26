<?php
require('bank.php');

if($mysql->connect_error != null) {
    die("Conexão não realizada");
} 
else {
    if ($_SERVER['REQUEST_METHOD'] == 'POST'){

        $email = $_POST['email'];
        $passw = $_POST['senha'];

        if(!empty($email) && !empty($passw)){

            $select_client = "SELECT email, senha, senha_hash FROM comprador";
            $query_client = mysqli_query($mysql, $select_client);

            $select_super = "SELECT email, senha, senha_hash FROM vendedor";
            $query_super = mysqli_query($mysql, $select_super);

            $select_suport = "SELECT email, senha, senha_hash FROM suporte";
            $query_suport = mysqli_query($mysql, $select_suport);

            $flag = false;//Variável de controle

            $request = array();//Variável que vai receber os dados

            while($row1 = mysqli_fetch_assoc($query_client)){
                if($email == $row1['email']){
                    $flag = true;
                    if(password_verify($passw, $row1['senha_hash'])){
                        $request[] = array('senha' => 'Comprador-autorizado' , 'tabela' =>  'comprador');
                    }
                    else{
                        $request[] = array('senha' => 'desautorizado' , 'tabela' =>  'comprador');
                    }
                }
                else{
                    $request[] = array('login' => 'desconhecido', 'tabela' =>  'comprador');
                }
            }

            while($row2 = mysqli_fetch_assoc($query_super)){
                if($email == $row2['email']){
                    $flag = true;
                    if(password_verify($passw, $row2['senha_hash'])){
                        $request[] = array('senha' => 'Vendedor-autorizado' , 'tabela' =>  'vendedor');
                    }
                    else{
                        $request[] = array('senha' => 'desautorizado' , 'tabela' =>  'vendedor');
                    }
                }
                else{
                    $request[] = array('login' => 'desconhecido' , 'tabela' =>  'vendedor');
                }
            }

            while($row3 = mysqli_fetch_assoc($query_suport)){
                if($email == $row3['email']){
                    $flag = true;
                    if(password_verify($passw, $row3['senha_hash'])){
                        $request[] = array('senha' => 'Suporte-autorizado' , 'tabela' =>  'suporte');
                    }
                    else{
                        $request[] = array('senha' => 'desautorizado' , 'tabela' =>  'suporte');
                    }
                }
                else{
                    $request[] = array('login' => 'desconhecido' , 'tabela' =>  'suporte');
                }
            }
           
            $query_client->free();
            $query_super->free();
            $query_suport->free();

            header('Content-Type: application/json');
            echo json_encode($request);
        }
    }

 }
mysqli_close($mysql);

?>