<?php
include ('bank.php');

if($mysql->connect_error != null){
    die("Erro na conexão" . $mysql->error);
}
else{

    if ($_SERVER["REQUEST_METHOD"] == "POST"){
        $input = $_POST['novo-valor'];

        $request = false;//flag
    
        if(isset($input)){
    
            $id_edit = $_POST['id'];
            var_dump($id_edit);
    
            $update = "UPDATE setor SET nome = '$input' WHERE  id = $id_edit"; 
    
            if(!empty($input)){
                $query = mysqli_query($mysql,$update);
    
                if($query){
                    $request = true;
                    echo $input;
                }
                else{
                    $request = false;
                }
            }
            else{
                echo "Input vazio";
                exit;
            }
        }
    
        header('Content-Type: application/json');
        echo json_encode($request);
    }

}
mysqli_close($mysql);
?>
