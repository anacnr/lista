/*O chat me aconselhou a criar uma outra função para criar os elementos um de cada vez, somente quando o botão salvar for clicado que deixa criar mais input do setor. CRUD*/

console.log("Script carregado!");

document.addEventListener("DOMContentLoaded", function () {
  const save = function toSave() {
    let setor = document.querySelector(".setor").value;

    if (setor.length < 2) {
      alert("Por favor coloque um nome acima de 2 letras");
    } else {
      let nome = new FormData();

      nome.append("setor", setor);

      //Requisição principal ajax solicitada para exibir os resultados do banco. Porém o PHP só me retorna a última ocorrência.
      $.ajax({
        url: "../php/setor.php",
        type: "POST",
        data: nome,
        processData: false,
        contentType: false,
      })
        .done(function () {
          alert(`Cadastro do setor ${setor} realizado com sucesso!`);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
          console.log(" ERRO ", jqXHR, textStatus, errorThrown);
        });
    }
  };

  document.querySelector(".save").addEventListener("click", save);

  /*Menu para ver  o perfil, ajuda e os setores cadastrados*/
  let menu_open = document.querySelector("#menu");
  menu_open.addEventListener("click", function () {
    let board = document.createElement("div");
    board.id = "conta";

    let godfather = document.querySelector("body");
    godfather.appendChild(board);

    let link_user = document.createElement("a");
    link_user.className = "link";
    link_user.href = "../supermercado/conta.html";
    link_user.textContent = "Conta";

    let link_help = document.createElement("a");
    link_help.className = "link";
    link_help.href = "#";
    link_help.textContent = "Ajuda";

    let link_other = document.createElement("a");
    link_other.className = "link";
    link_other.href = "../supermercado/setores.html";
    link_other.textContent = "Setores";

    board.appendChild(link_user);
    board.appendChild(link_help);
    board.appendChild(link_other);

    let menu_close = document.createElement("img");
    menu_close.id = "menu";
    menu_close.src = "buttons/close_FILL0_wght400_GRAD0_opsz24.svg";

    let sister = menu_open.parentNode;
    sister.appendChild(menu_close);

    menu_open.style.opacity = "0";

    let bell = document.getElementById("noti");
    bell.style.transform = "translate(85vw,30vh)";

    /*Botão para fechar a div*/
    menu_close.addEventListener("click", function () {
      board.style.display = "none";
      let young_sister = menu_close.parentNode;
      young_sister.appendChild(menu_open);
      menu_close.style.opacity = 0;
      menu_open.style.opacity = "1";

      bell.style.transform = "translate(85vw,10vh)";
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
