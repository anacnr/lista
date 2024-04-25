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

            $select = "SELECT * FROM comprador INNER JOIN vendedor ON comprador.email = vendedor.email INNER JOIN suporte ON vendedor.email = suporte.email";

            /*
            $select = "SELECT * FROM vendedor UNION SELECT * FROM comprador UNION SELECT * FROM vendedor"; -> O ajax reclamou alegando que a request não é uma função que recebe o forEach. -> Não vou poder usar pois as tabelas tem o número de colunas diferentes.*/
            
/*            while($row = mysqli_fetch_assoc($query)){

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
            }*/

            $flag = false;//Variável de controle

            $request = [];//Variável que vai receber os dados

            $query = mysqli_query($mysql, $select);

            if ($query) {
                $flag = true;
                $authenticated = false;
            
                while ($row = mysqli_fetch_assoc($query)) {
                    if ($email == $row['email'] && password_verify($passw, $row['senha_hash'])) {
                        $authenticated = true;
                        break; // Não há necessidade de continuar verificando se a senha já foi encontrada
                    }
                }
            
                if ($authenticated == true) {
                    $request[] = array('senha' => 'correta');
                } else {
                    $request[] = array('senha' => 'incorreta');
                }
            } else {
                $request[] = array('erro' => 'Erro');
            }
            
            header('Content-Type: application/json');
            echo json_encode($request);
            
        }
        else{
            die("Campos vazios!");
        }
    }
}
mysqli_close($mysql);
?>