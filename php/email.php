<?php
  //Variáveis
  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $mensagem = $_POST['mensagem'];
  $data_envio = date('d/m/Y');
  $hora_envio = date('H:i:s');

  //Compo E-mail
  $arquivo = "
    <html>
      <p><b>Nome: </b>$nome</p>
      <p><b>E-mail: </b>$email</p>
      <p><b>Mensagem: </b>$mensagem</p>
      <p>Este e-mail foi enviado em <b>$data_envio</b> às <b>$hora_envio</b></p>
    </html>
  ";
  
  //Emails para quem será enviado o formulário
  $destino = "athyrsonxaviers.s@gmail.com";
  $assunto = "Contato pelo Site";

  //Este sempre deverá existir para garantir a exibição correta dos caracteres
  $headers  = "MIME-Version: 1.0\n";
  $headers .= "Content-type: text/html; charset=utf 8 \n";
  $headers .= "From: $nome <$email>";

  //Enviar
  $enviaremail = mail($destino, $assunto, $arquivo, $headers);
  if($enviaremail){
    $mgm = "<h1>email enviado</h1>";
  }else {
    $mgm = "erro";
  }
  
  echo "<meta http-equiv='refresh' content='3;URL=telas.html'>";
?>