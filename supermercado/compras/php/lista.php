<?php
//Recebe os dados do formulário
$inputname = $_POST['nome'];
$inputpeso = $_POST['peso'];
$inputvalue = $_POST['valor'];
$inputbrand = $_POST['marca'];
$inputimg = $_POST['img'];
//$inputquantity = $_POST['quantidade'];

if(isset($inputname)){
        //Capta o que o php leu através deste arquivo passado
        $existingData = file_get_contents('../javascript/lista.json');
        $existingArray = json_decode($existingData, true);//Recebe a leitura e coloca true para dizer que está tratando um array associativo
        
        //Passa a chave e o valor dos produtos selecionados
        $newData = array('nome' => $inputname, 'peso' => $inputpeso ,'valor' => $inputvalue, 'marca' => $inputbrand, 'imagem' => $inputimg);
        $existingArray[] = $newData;
        
        //Converte o array para JSON
        $newJsonData = json_encode($existingArray);
        
        //Escreve os dados de volta no arquivo JSON
        file_put_contents('../javascript/lista.json', $newJsonData);
        
        //Retorna uma resposta de sucesso (ou qualquer outra coisa que você queira retornar)
        echo json_encode(array('success' => true));
}
?>