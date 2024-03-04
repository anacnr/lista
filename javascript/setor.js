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
    link_help.href = "../supermercado/ajuda.html";
    link_help.textContent = "Ajuda";

    let link_sectors = document.createElement("a");
    link_sectors.className = "link";
    link_sectors.href = "../supermercado/setores.html";
    link_sectors.textContent = "Setores";

    board.appendChild(link_user);
    board.appendChild(link_help);
    board.appendChild(link_sectors);

    let menu_close = document.createElement("img");
    menu_close.id = "menu";
    menu_close.src = "buttons/close_FILL0_wght400_GRAD0_opsz24.svg";

    let sister = menu_open.parentNode;
    sister.appendChild(menu_close);

    menu_open.style.opacity = "0";
    let bell = document.getElementById("noti");
    //Enquanto tiver na media query menor de 600 de largura
    bell.style.transform = "translate(85vw,30vh)";

console.log(window.innerWidth)
    /*Botão para fechar a div*/
    menu_close.addEventListener("click", function () {
      board.style.display = "none";
      let young_sister = menu_close.parentNode;
      young_sister.appendChild(menu_open);
      menu_close.style.opacity = 0;
      menu_open.style.opacity = "1";
      //Enquanto tiver na media query menor de 600 de largura
      bell.style.transform = "translate(85vw,10vh)"

      /*Media query*/
    window.addEventListener("resize", function () {
      if (window.innerWidth > 600 || window.innerWidth.innerWidth <= 768) {
        bell.style.transform = "translate(88vw,10vh)";
      }
      else if(window.innerWidth > 768 || window.innerWidth.innerWidth <= 992){
        bell.style.transform = "translate(88vw,10vh)";
      }
    });//Funçao do resize
    }); //menu_close
  }); //menu_open

  /*Notificações*/
  let notification = document.getElementById("noti");
  notification.addEventListener("click", function () {
    setTimeout(() => {
      location.href = "../supermercado/listas.html";
      console.log("Redirecionado");
    }, 500);
  }); //notificação
}); //domloaded
