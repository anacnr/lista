<?php
//Recebe os dados do formulário
$inputname = $_POST['nome'];
$inputpeso = $_POST['peso'];
$inputvalue = $_POST['valor'];
$inputbrand = $_POST['marca'];

if(isset($inputname)){
        //Lê os dados existentes do arquivo JSON, se houver
        $existingData = file_get_contents('../javascript/lista.json');
        $existingArray = json_decode($existingData, true);
        
        // Adiciona os novos dados ao array existente
        $newData = array(
            'nome' => $inputname, 'peso' => $inputpeso ,'valor' => $inputvalue, 'marca' => $inputbrand
        );
        $existingArray[] = $newData;
        
        // Converte o array para JSON
        $newJsonData = json_encode($existingArray);
        
        // Escreve os dados de volta no arquivo JSON
        file_put_contents('../javascript/lista.json', $newJsonData);
        
        // Retorna uma resposta de sucesso (ou qualquer outra coisa que você queira retornar)
        echo json_encode(array('success' => true));
}
?>