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

            $select = "SELECT * FROM vendedor";

            $query = mysqli_query($mysql, $select);

            $flag = false;// Inicializa $flag como falso

            $request = [];
            
            while($row = mysqli_fetch_assoc($query)){

                if($email == $row['email']){
                    if(password_verify($passw, $row['senha_hash'])){
                        $flag = true;
                        $request[] = array("answer" => "Correta"); 
                    }
                    else{
                        $flag = false;
                        $request[] = array("answer" => "Incorreta"); 
                    }
                }
                else{
                    $request[] = array("answer" => "Erro");
                }
            }

            
            header('Content-Type: application/json');
            echo json_encode($request);
        }
        else{
            die("Erro");
        }
    }
}
mysqli_close($mysql);
?>