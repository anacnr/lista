/*O chat me aconselhou a criar uma outra função para criar os elementos um de cada vez, somente quando o botão salvar for clicado que deixa criar mais input do setor. CRUD*/

console.log("Script carregado!");

document.addEventListener("DOMContentLoaded", function () {

  let setor = document.querySelector('.setor').value

  let nome = new FormData();
  
  nome.append('setor' , setor)
//Requisição ajax solicitada para exibir os resultados do banco
  $.ajax({
    url : '../php/setor.php', type: 'POST', data: nome, processData: false, contentType: false
  }).done(function(request){
    console.log("Registro: " , request) //FUNCIONOOOOOOU!!
  /*Preciso contabilizar o número de linhas resultadas
  Eu posso tentar fazer a lógica lá no php e apenas emitir as colunas atarvés do ajax
  */
  for(let count = 0; count < request; count++){

    console.log(count)

    let phrase = document.createElement('p')
    phrase.class = 'phrase'
    //phrase.textContent = request

    let body = document.querySelector('body')
    body.appendChild(phrase)

  } 

  }).fail(function(jqXHR, textStatus, errorThrown){
    console.log("Erro na requisição AJAX:", "STATUS RESPOSTA: ",jqXHR,textStatus, errorThrown);
  })

  //Previne o padrão de envio do formulário
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
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
