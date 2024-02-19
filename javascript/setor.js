/*O chat me aconselhou a criar uma outra função para criar os elementos um de cada vez, somente quando o botão salvar for clicado que deixa criar mais input do setor. CRUD*/

//const { count } = require("console");

console.log("Script carregado!");

document.addEventListener("DOMContentLoaded", function () {

  let setor = document.querySelector('.setor').value

  let nome = new FormData();
  
  nome.append('setor' , setor)
//Requisição ajax solicitada para exibir os resultados do banco
  $.ajax({
    url : '../php/setor.php', type: 'POST', data: nome, processData: false, contentType: false
  }).done(function(request) {
    let id = request.id //Pega o id do banco
    id.name
    let nome = request.nome //Pega o nome do banco
    let line = request.linha // Pega a quantidade de linhas da tabela

    // Faça algo com as variáveis recebidas
    console.log(' ID :', id, " NOME: " , nome, " LINHA " , line);

    /*O for é responsável por gerar os elementos na tela*/
for(let count = 0; count < 1; count++){
  let body = document.querySelector('body')

  let span = document.createElement('span')
  span.className = 'name'
  span.textContent = nome

  body.appendChild(span)

  document.querySelector("#but-save").style.transform = 'translate(28vw, 44vh)' //Ajuste da posição do botão inicial de salvar
  //document.querySelector("#but-del").style.transform = 'translate(50vw, 40vh)' //Ajuste da posição do botão inicial de deletar

  let new_button_save = document.createElement('button')
  new_button_save.className = 'save'
  new_button_save.type = 'submit'
  new_button_save.textContent = 'Salvar'
  new_button_save.addEventListener("click", function(){
    console.log("Setor Salvado")
  });//Função do botão de deletar

  let new_button_del = document.createElement('img')
  new_button_del.className = 'del'
  new_button_del.src = './buttons/cancel.svg'
  body.appendChild(new_button_save);
  body.appendChild(new_button_del)
}

/*Parte que executa a exclusão do setor*/
document.querySelector('.del').addEventListener("click", function(){
  
/*Segunda requisição para apagar um setor*/
let sent_id = new FormData();
sent_id.append('id-deletado', id)//o id-deletado vai servir como o nome da variável do meu id
sent_id.append('botao-deleta', document.querySelector('.del'))
$.ajax({
  url: '../php/del-setor.php', type: 'POST', data: sent_id, processData: false, contentType: false
}).done(function(request){
  console.log(request)
  if(request === "true"){
  document.querySelector('.name').innerHTML = " " //Se funcionar o span fica vazio
}
else{
  console.log("Tá parando aqui!")
}
}).fail(function(jqXHR, textStatus, errorThrown){
  console.log(" ERRO " , jqXHR, textStatus, errorThrown)
});

});//Função do botão de deletar

}).fail(function(jqXHR, textStatus, errorThrown) {
  console.log(" ERRO " , jqXHR, textStatus, errorThrown)
});


  /*Menu para ver perfil*/
  let menu_open = document.querySelector("#menu");
  menu_open.addEventListener("click", function () {
    let board = document.createElement("div");
    board.id = "conta";

    let godfather = document.querySelector("body");
    godfather.appendChild(board);

    let link_user = document.createElement("a");
    link_user.className = "link";
    link_user.href = "#";
    link_user.textContent = "Conta";

    let link_help = document.createElement("a");
    link_help.className = "link";
    link_help.href = "#";
    link_help.textContent = "Ajuda";

    let link_other = document.createElement("a");
    link_other.className = "link";
    link_other.href = "#";
    link_other.textContent = "Link";

    board.appendChild(link_user);
    board.appendChild(link_help);
    board.appendChild(link_other);

    let menu_close = document.createElement("img");
    menu_close.id = "menu";
    menu_close.src = "buttons/close_FILL0_wght400_GRAD0_opsz24.svg";

    let sister = menu_open.parentNode;
    sister.appendChild(menu_close);

    menu_open.style.opacity = "0";

    menu_close.addEventListener("click", function () {
      board.style.display = "none";
      let young_sister = menu_close.parentNode;
      young_sister.appendChild(menu_open);
      menu_close.style.opacity = 0;
      menu_open.style.opacity = "1";
    }); //menu_close
  }); //menu_open

  /*Notificações*/
  let notification = document.getElementById("noti");
  notification.addEventListener("click", function () {
    setTimeout(() => {
      location.href = "#";
      console.log("Redirecionado");
    }, 500);
  }); //notificação
  
}); //domloaded