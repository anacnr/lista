<!DOCTYPE html>
<html lang="pt-Br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Setores</title>
    <!--Tela maior-->
    <link rel="stylesheet" href="../css/set-vendedor/desktop.css">
    <!--Tela menor-->
    <link rel="stylesheet" href="../css/set-vendedor/mobile.css">
</head>

<body>

    <h1>Cadastro dos Setores</h1>

    <span><h2>supermercado</h2></span>

    <form action="" method="post">

    <input type="text" name="setor" class="setor" required>

    <button type="submit" class="save">Salvar</button>

    <img src="buttons/cancel.svg" alt="Botão-deleta" class="del">

    <br>
  </form> 
  <!--ícone retirado do Google Icons-->
    <img src="imgs-cad/add.svg" alt="Botão-adiciona" id="add">

    <img src="buttons\menu_FILL0_wght400_GRAD0_opsz24.svg" alt="menu-abrir" id="menu">

    <img src="imgs/bell-4924849_1280-min.png" alt="notificação" id="noti">

<!--<script src="../javascript/jquery-3.7.1.min.js"></script>
 <script src="../javascript/setor.js"></script>-->
</body>
</html>

<?php

// Cria a conexão com o banco
$local = '127.0.0.1';
$user = 'root';
$pass = "";
$bank = 'supermercado';

//Cria uma instância da classe mysqli
$mysql = new mysqli("$local", "$user", "$pass", "$bank");

 ?>