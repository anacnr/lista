document.addEventListener("DOMContentLoaded" , ()=>{
  /*Adiciona os campos*/
  const button_add = document.getElementById("add")
  
  button_add.addEventListener("click", ()=>{

   const tbody = document.querySelector("tbody")

   const tr = document.createElement("tr")
   tbody.appendChild(tr)

   for(let count =0; count <6; count++){
    const td = document.createElement("td")
    td.id = 'new_td'
    tr.appendChild(td)

    const input = document.createElement("input")
    input.className = 'input'
    input.type = 'text'
    input.name = `name${count}`
    input.required = true

    td.appendChild(input)
   }

   const input = document.createElement("input")
   input.type = 'file'
   input.name = `image`
   input.className = 'input'
   input.id = 'input-img'

   const label = document.createElement("label")
   label.htmlFor = 'input-img'
   label.className = 'label-input'

   const td = document.createElement("td")
   tr.appendChild(td)

   td.appendChild(input)
   td.appendChild(label)

  //Parte para mostrar a imagem inserida
  let img_uploaded = document.getElementById("input-img");
  img_uploaded.addEventListener("change", function () {
    let label_icon = document.querySelector('.label-input')

    let eyes = new FileReader();

    eyes.onload = function toRead() {
      label_icon.style.backgroundImage = `url(${eyes.result})`;
      label_icon.style.backgroundSize = "cover";
      label_icon.style.backgroundPosition = 'center'
    };
    eyes.readAsDataURL(img_uploaded.files[0]);
  });//Função da imagem
  });//Evento do botão de adicionar

  /*Função para salvar*/
  const button_save = document.getElementById("sav")
  button_save.addEventListener("click" , ()=>{
    document.querySelectorAll('input').forEach(function(iten, index){
      if(iten.value.length <=3){
        document.querySelector('form').addEventListener("submit", (event)=>{
          event.preventDefault();
          console.log("Form não enviado");
        })
      }
      else{
        console.log("Produtos salvos");
      }
    })//Loop forEach
  });//Cadastra os produtos.Evento do botão de salvar

  /*Emissão dos produtos salvos //Requisição ajax*/
  $.ajax({
    url: '/lista/php/produtos-salvos.php' , type: 'POST', processData: false, contentType: false
  }).done(function(request){
    const tbody = document.getElementById('body-tab')
    request.forEach(element =>{
      //Variávris que recebem o resultado de cada campo
      let product = element.nome
      let code = element.codigo
      let kilos = element.peso
      let price = element.valor
      let brand = element.marca
      let quantity = element.quantidade
      let image = element.img

      let tr = document.createElement('tr')
      tbody.appendChild(tr)
      let rows =  tbody.rows.length

      for(let controller=0;controller<6;controller++){
        let td = document.createElement("td")
        td.id = `id${controller}`
        tr.appendChild(td)
        //Validação da linha e dos campos para inserir os dados correspondente
        if(rows == rows){
          if(td.id == 'id0'){
            td.textContent = `${product}`
          }
          else if(td.id == 'id1'){
            td.textContent = `${code}`
          }
          else if(td.id == 'id2'){
            td.textContent = `${kilos}`
          }
          else if(td.id == 'id3'){
            td.textContent = `${price}`
          }
          else if(td.id == 'id4'){
            td.textContent = `${brand}`
          }
          else if(td.id == 'id5'){
            td.textContent = `${quantity}`
          }
        }
        else{
          console.log("Erro");
        }
      }//Laço for

      //Campo que recebe a imagem
      let td = document.createElement("td")
      let img_saved = document.createElement("img")
      img_saved.src = `../../php/${image}`
      img_saved.className = 'image'
      tr.appendChild(td)
      td.appendChild(img_saved)

    });//forEach da requisição

    //Validação do número de tabelas para mostrar o botão de edição ou de adição
    const table = document.querySelector('table')
    let table_rows =  table.rows.length
    if(table_rows > 1){
      //Remoção do botão de adicionar
      button_add.style.display = 'none'
      //Cria o botão de editar
      const button_edit = document.createElement("i")
      button_edit.className = 'bi bi-pencil-square'

      document.querySelector('#span-buttons').appendChild(button_edit)

      button_edit.addEventListener("click", ()=>{

      //Esconde o botão de editar
      button_edit.style.display = 'none'
      //Mostra o botão de adição
      button_add.style.display = 'block'

        document.querySelectorAll('td').forEach(function(iten, index){
          iten.addEventListener("click", ()=>{
            if(index == index){
              iten.textContent = ''

              let input = document.createElement("input")
              input.type = 'text'
              input.className = 'new-input'
              iten.appendChild(input)
            }
          })
        })

        button_save.addEventListener("click", ()=>{
          console.log("Botão de salvar");

          //Esconde o botão de editar
          button_edit.style.display = 'block'
          //Mostra o botão de adição
          button_add.style.display = 'none'
        })
      });//Evento do botão de editar

    }

  }).fail(function (jqXHR, textStatus, errorThrown) {
    console.log("Erro ", jqXHR, textStatus, errorThrown);
  });//ajax  
  console.log("Script gerado primeiro!");
});//Carregamento da página 

  /*Parte para deletar(simulação)*/
  document.getElementById("exc").addEventListener("click", ()=>{
    console.log("Apagar!");

    document.querySelectorAll('tbody > tr').forEach(iten =>{
      iten.style.cursor = 'pointer'
      iten.addEventListener("click" , ()=>{
        let advice = window.confirm("O produto será excluído")
        if(advice){
          iten.style.display = 'none'
        }
        else{

        }
      })
    })
  });//Evento do botão de excluir