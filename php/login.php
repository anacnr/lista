<?php

$local = '127.0.0.1';
$user = 'root';
$pass = "";
$bank = 'supermercado';

$mysql = new mysqli($local, $user, $pass, $bank);

if($mysql->connect_error != null) {
    die("Conexão não realizada");
} 
else {
   
if ($_SERVER['REQUEST_METHOD'] == 'POST'){

    $email = $_POST['email'];
    $passw = $_POST['senha'];

    if(!empty($email) && !empty($passw)){

        $select = "SELECT email, senha_hash FROM comprador WHERE email = '$email'";

        $query = mysqli_query($mysql, $select);

        $flag = false;

        while ($row = mysqli_fetch_assoc($query)){

            if($email == $row['email']){
                
                $flag = true;

                if(password_verify($passw, $row["senha_hash"])){
                    $request[] = array('answer' => 'Correta');
                }
                else{
                    $request[] = array('answer' => 'Incorreta');
                }
            }
        }

        if($flag != true){
            $request[] = array('answer' => 'Invalida');
        }
        header('Content-Type: application/json');
        echo json_encode($request);
    }
   
}}

// Encerra a conexão com o banco de dados
$mysql->close();
?>