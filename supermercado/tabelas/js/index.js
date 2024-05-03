/*
 * A tabela poderá ter uma linha editada ou apagada e também o usuário poderá acrescentar mais linhas.
 */
document.addEventListener("DOMContentLoaded", function () {

  const button_save = document.querySelector("#sav")
  /*Não permite que o botão salvar envie o formulário sem editar ou criar*/
   button_save.addEventListener("click" , function(){
    this.disabled = true
  })

/*Ação para salvar os dados*/
const save = function toSave() {    
    let datas = []
      document.querySelectorAll(".input").forEach( input => {
          datas.push(input.value);
      })
    //Verifica se os inputs não receberam valores.
    if (datas.length == 0) {
      //Envio do formulário desautorizado
      console.log("Por favor preencha os campos!");
    } else {
      console.log("Botão salvar clicado!");
      //Envio do formulário autorizado
      button_save.addEventListener("click" , function(){
        this.disabled = false
      })
    }
  };//Função para salvar

/*Se não houver nenhum conteúdo na tabela*/
  let table_body = document.querySelector("tbody");

  if(table_body.rows == 0){
      //Criar as funções para adionar, salvar, editar e deletar
  let button_add = document.querySelector("#add");
 
/*Ação para adicionar mais linhas*/
const add = function toAdd() {
  //Faz com que a linha da tabela seja criada.
  let table_row = document.createElement("tr");

  //O formulário está apadrinhando a linha
  table_body.appendChild(table_row);

for(let count = 0;count <= 4;count++){  
    let table_data_product = document.createElement("td");
    table_row.appendChild(table_data_product);

    let input = document.createElement("input")
    input.type = 'text'
    input.className = 'input'
    input.name = `name${count}`//Forma que vi pela internet
    input.required = true
    
    console.log(input.name )
    table_data_product.appendChild(input)
}//Laço for

  let table_data_number = document.createElement("td");
  table_row.appendChild(table_data_number);

  //Criação do input do tipo número
  let input = document.createElement("input")
  input.type = 'number'
  input.className = 'input'
  input.name = 'quantity'//Forma que vi pela internet
  input.required = true

  table_data_number.appendChild(input)

  let table_data_img = document.createElement("td");
  table_row.appendChild(table_data_img);

  //Criação do input do tipo imagem
  let input_img = document.createElement("input");
  input_img.type = "file";
  input_img.id = "input-img";
  input_img.className = "input";
  input_img.name = "image";
  input_img.accept = "image/*";
  input_img.required = true;

  table_data_img.appendChild(input_img);

  //Label do input file
  let label = document.createElement("label");
  label.className = "label-input";
  label.htmlFor = `input-img`;

  table_data_img.appendChild(label);

  //Ìcone de upload
  let icon = document.createElement("img");
  icon.id = "icon-upload";
  icon.className = "icon-upload";
  icon.src = "buttons/upload.svg";

  label.appendChild(icon);

//Parte para mostrar a imagem inserida
let img_uploaded = document.getElementById("input-img");
img_uploaded.addEventListener("change", function () {
  let label_icon = document.getElementById("icon-upload");
  label_icon.classList.remove("icon-upload");

  let eyes = new FileReader();

  eyes.onload = function toRead() {
    label_icon.src = `${eyes.result}`;
    label_icon.classList.add("img-uploaded");
  };
  eyes.readAsDataURL(img_uploaded.files[0]);
});//Função da imagem

   //Chamada da função no botão de salvar 
button_save.addEventListener("click", save);
    
  };//Função para adicionar.

  //Chamada da função no botão de adicionar
button_add.addEventListener("click", add);
  }//Condicional if.

else{
  /*Esconde o botão de adiciona*/
  let hide_butt_add = document.getElementById("add")
  hide_butt_add.style.display = 'none'

  /*Mostra o botão de edição*/
  let button_edit = document.getElementById("edi")
  button_edit.style.display = 'block'

  /*Requisição para buscar os produtos cadastrados*/
  $.ajax({
    url: "../../php/produtos-salvos.php",
    type: "POST",
    processData: false,
    contentType: false,
  }).done(function (request){
    request.forEach(function (data) {
        const table_body = document.querySelector("table > #body-tab")

        //Dados do produto
        let name = data.nome 
        let code = data.codigo
        let weight = data.peso
        let price = data.valor
        let brand = data.marca
        let quantity = data.quantidade
        let image = data.img 

        /*Criação de mais uma linha para exibir os dados*/
        let table_row = document.createElement("tr")
        table_body.appendChild(table_row)

      /*Laço de interação para criar quantas tds com texto necessárias*/
      for(let count = 0; count <= 4; count++){

          let table_datas = document.createElement('td')
          let index = table_datas.ariaColIndex + count

          if(index == 0){
            table_datas.textContent = `${name}`
          }
          else if (index == 1){            
            table_datas.textContent = `${code}`
          }
          else if (index == 2){
          
            table_datas.textContent = `${weight}`
          }
          else if (index == 3){
          
            table_datas.textContent = `${price}`
          }
          else if (index == 4){
            table_datas.textContent = `${brand}`
          }
          else{
            console.log("Não há mais células")
          }
          
          table_row.appendChild(table_datas)
        }//Laço for

        /*Esta td recebe só números*/
        let table_datas_quant = document.createElement('td')
        table_datas_quant.textContent = `${quantity}`
 
        table_row.appendChild(table_datas_quant)

        /*Esta td recebe a imagem*/
        let table_data_img = document.createElement('td')
        let img = document.createElement('img')
        //Vou fazer igual o cadastro da imagem
        img.src = `../../php/${image}`
        img.style.width = '25px'
        img.style.height = '25px'
        img.className = 'img-uploaded'        

        table_row.appendChild(table_data_img)
        table_data_img.appendChild(img)       
    });//ForEach

  //Parte para editar os campos
const edit = function toEdit() {
  /*Pega todas as tds*/
    let table_datas = document.getElementsByTagName("td")

    Array.from(table_datas).forEach(function(td ,index){

      if(td.textContent.trim() !== ''){
        td.addEventListener("click", function(){
        td.textContent = ''

         //Novo input criado
         let input = document.createElement("input")
         input.type = 'text'
         input.name = `name${index}`//Técnica vista na internet
         input.className = 'new-input'
         input.required = true
                       
         td.appendChild(input)
        });//Evento do click
      }
      else{
        function toClick() {
          //Remove o event listener para evitar que a ação seja executada novamente
          td.removeEventListener("click", toClick);
        
          //Remove a imagem da célula clicada
          let img_change = td.querySelector('.img-uploaded');
          if (img_change) {
            td.removeChild(img_change);

                                    // Criação do input do tipo imagem
            let input_img = document.createElement("input");
            input_img.type = "file";
            input_img.className = "input";
            input_img.id ='input-img'
            input_img.name = "image";
            input_img.accept = "image/*";
            input_img.required = true;
            
            //Adiciona o input à célula
            td.appendChild(input_img);
            
            //Label do input file
            let label = document.createElement("label");
            label.className = "label-input";
            label.htmlFor = "input-img";
            
            //Adiciona o label à célula
            td.appendChild(label);
            
            // Ícone de upload
            let icon = document.createElement("img");
            icon.className = "icon-upload";
            icon.src = "buttons/upload.svg";
            
            //Adiciona o ícone ao label
            label.appendChild(icon);
            
            //Parte para mostrar a imagem inserida
            input_img.addEventListener("change", function() {
              let label_icon = document.createElement("img");
              label_icon.classList.remove("icon-upload");

              let eyes = new FileReader();
            
              eyes.onload = function toRead() {
                label_icon.src = `${eyes.result}`;
                label_icon.classList.add("img-uploaded");
              };
              eyes.readAsDataURL(input_img.files[0]);
            });            
          } else {
            console.log('Nenhuma imagem encontrada nesta célula.');
          }
        }
        
        // Adiciona o event listener para o clique na célula
        td.addEventListener("click", toClick);
                             
}//Condicional else

})//forEach 

  /*Mostra o botão de adiciona*/
  let button_add = document.getElementById("add")
  button_add.style.display = 'block'
  /*Esconde o botão de editar*/
  button_edit.style.display = 'none'

  //Função para adicionar mais linha
button_add.addEventListener("click", function(){
  //Faz com que outra linha da tabela seja criada.
  let table_row = document.createElement("tr");

  //O formulário está apadrinhando a linha
  table_body.appendChild(table_row);

for(let count = 0;count <= 4;count++){  
    let table_data_product = document.createElement("td");
    table_row.appendChild(table_data_product);

    let input = document.createElement("input")
    input.type = 'text'
    input.className = 'input'
    input.name = `name${count}`//Forma que vi pela internet
    input.required = true
    
    table_data_product.appendChild(input)
}//Laço for

  let table_data_number = document.createElement("td");
  table_row.appendChild(table_data_number);

  //Criação do input do tipo número
  let input = document.createElement("input")
  input.type = 'number'
  input.className = 'input'
  input.name = 'quantity'//Forma que vi pela internet
  input.required = true

  table_data_number.appendChild(input)

  input.addEventListener("click", function(click){
    click.stopPropagation()
  })

  let table_data_img = document.createElement("td");
  table_row.appendChild(table_data_img);

  //Criação do input do tipo imagem
  let input_img = document.createElement("input");
  input_img.type = "file";
  input_img.id = "input-img";
  input_img.className = "input";
  input_img.name = "image";
  input_img.accept = "image/*";
  input_img.required = true;

  table_data_img.appendChild(input_img);

  //Label do input file
  let label = document.createElement("label");
  label.className = "label-input";
  label.htmlFor = `input-img`;

  table_data_img.appendChild(label);

  //Ìcone de upload
  let icon = document.createElement("img");
  icon.id = "icon-upload";
  icon.className = "icon-upload";
  icon.src = "buttons/upload.svg";

  label.appendChild(icon);

//Parte para mostrar a imagem inserida
let img_uploaded = document.getElementById("input-img");
img_uploaded.addEventListener("change", function () {
  let label_icon = document.getElementById("icon-upload");
  label_icon.classList.remove("icon-upload");

  let eyes = new FileReader();

  eyes.onload = function toRead() {
    label_icon.src = `${eyes.result}`;
    label_icon.classList.add("img-uploaded");
  };
  eyes.readAsDataURL(img_uploaded.files[0]);
    });//Função da imagem

    //Faz o processo de envio do formulário.
    button_save.addEventListener("click" , function(){
      this.disabled = false
    })
  })
};//Função para editar
  //Chama a função no botão de editar
button_edit.addEventListener("click" , edit)
  });//Ajax //Done
}//Condicional else
});//Carregamento