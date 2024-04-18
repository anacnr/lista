document.addEventListener("DOMContentLoaded", function () {
  console.log("Script carregado!");

  $.ajax({
    url: "../php/setores-salvos.php",
    type: "POST",
    processData: false,
    contentType: false
  })
    .done(function (request) {
      request.forEach(function (data, index) {
        let name_setor = data.nome;
        let id_setor = data.id; //Esse vai mandar lá para o formulário quando quiser ser manipulado

        let span = document.createElement("span");
        span.className = "setor";

        let span_icons = document.createElement("span");
        span_icons.className = "span_icons";

        let icon_edit = document.createElement("img");
        icon_edit.className = "icon-edit";
        icon_edit.src = "buttons/pencil-square.svg";

        let icon_delete = document.createElement("img");
        icon_delete.className = "icon-delete";
        icon_delete.src = "buttons/trash3-fill.svg";

        let icon_save = document.createElement("img");
        icon_save.className = "icon-save";
        icon_save.src = "buttons/floppy-fill.svg";

        /*Link para o setor*/

        let link = document.createElement('a')
        link.href = '../supermercado/tabelas/setor1.html'
        link.className = 'link'
        link.rel = ''
        link.textContent = name_setor

        let body = document.querySelector("body");
        body.appendChild(span)
        body.appendChild(span_icons);
        span_icons.appendChild(icon_edit);
        span_icons.appendChild(icon_delete);
        span_icons.appendChild(icon_save);
        span.appendChild(link)
        /*Função para editar o nome*/
        let controll_button = false;

        const edit = function toEdit() {
          let index_nome = `${index}`;
          let index_edit = `${index}`;

          if (index_nome == index_edit) {
            if (!controll_button) {
              controll_button = true;
              span.style.cursor = "pointer";
              
              let input = document.createElement("input");
              input.className = "setor";
              input.style.border = "none";
              input.name = "novo-valor";

              span.style.display = "none";
              let brother = span.parentNode;
              brother.insertBefore(input, span.nextSibling);
              brother.removeChild(span);
              //Transformei o span em input, como eu já vi em outras aplicações.

              /*Função que salva o nome novo*/
              icon_save.addEventListener("click", function () {
                let novo_nome = input.value;

                let sent_dates = new FormData();
                sent_dates.append("novo-valor", novo_nome);
                sent_dates.append("id", id_setor);

                if (novo_nome.length == 0 || novo_nome.length < 2) {
                  alert("Por favor preencha o campo!");
                } else {
                  $.ajax({
                    url: "../php/nome-setor.php",
                    type: "POST",
                    data: sent_dates,
                    processData: false,
                    contentType: false,
                  }).done(function (request) {
                    if (request == true) {
                      let father = input.parentNode;
                      father.appendChild(span);
                      span.textContent = `${novo_nome}`;
                    } else {
                      console.log(request);
                    }
                  });
                }
              }); //Função de salvar nome novo
            } else {
              controll_button = false;
              span.style.cursor = "";//Vi essa técnica em outros exercícios de outras pessoas.
            }
          }
        };
        icon_edit.addEventListener("click", edit);//Função de editar

        const exclude = function toDel() {
          let index_nome = `${index}`;
          let index_del = `${index}`;

          if (index_nome == index_del) {

            if (confirm(`Deletar o setor ${name_setor}?`)) {

                let id = data.id
                let sent_id = new FormData()
                sent_id.append('id' , id)

                $.ajax({
                    url: '../php/del-setor.php', type: "POST", data: sent_id , processData : false, contentType: false
                }).done(function(request){
                    console.log(request)
                    console.log("Setor deletado com sucesso");
                })
            } else {
              console.log("Setor não deletado");
            }
          }
        };

        icon_delete.addEventListener("click", exclude);
      }); //forEach
    }).fail(function (jqXHR, textStatus, errorThrown) {
      console.log(" ERRO ", jqXHR, textStatus, errorThrown);
    }); //ajax
}); //Onload
