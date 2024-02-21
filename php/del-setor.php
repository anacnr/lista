<?php
include ('bank.php');

if($mysql->connect_error != null){
    die("Erro na conexão" . $mysql->error);
}
else{

    if($_SERVER['REQUEST_METHOD'] == "POST"){

           $request = false;//flag

           if(isset($_POST['id'])){

            $del_id = $_POST['id'];
    
            $del_date = "DELETE FROM setor WHERE id = $del_id";
    
            $query  = mysqli_query($mysql, $del_date);
    
            if($query){
                $request = true;
            }
            else{
                $request = false;
            }
           }           
           header('Content-Type: application/json');
           echo json_encode($request);
    }

}

mysqli_close($mysql);
?>