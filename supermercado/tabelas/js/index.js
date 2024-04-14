/**
 * A tabela poderá ter uma linha editada ou apagada e também o usuário poderá acrescentar mais linhas.
 */
document.addEventListener("DOMContentLoaded", function () {

  const button_save = document.querySelector("#sav")
  /*Não permite que o botão salvar envie o formulário sem editar ou criar*/
   button_save.addEventListener("click" , function(){
    this.disabled = true
  })

  const save = function toSave() {
    
    let datas = []
      document.querySelectorAll(".input").forEach( input => {
          datas.push(input.value);
      })
    //Verifica se os inputs não receberam valores. Envio do formulário desautorizado
    if (datas.length == 0) {
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
 
  const add = function toAdd() {
    //Faz com que outra linha da tabela seja criada.
    let table_row = document.createElement("tr");

    //O formulário está apadrinhando a linha
    table_body.appendChild(table_row);

      let table_data_product = document.createElement("td");
      table_row.appendChild(table_data_product);

      let input_product = document.createElement("input");
      input_product.type = "text";
      input_product.className = "input";
      input_product.name = "product";
      input_product.required = true;
      
      table_data_product.appendChild(input_product)

      let table_data_code = document.createElement("td");
      table_row.appendChild(table_data_code);

      let input_code = document.createElement("input");
      input_code.type = "text";
      input_code.className = "input";
      input_code.name = "code";
      input_code.required = true;
      
      table_data_code.appendChild(input_code)

      let table_data_measure = document.createElement("td");
      table_row.appendChild(table_data_measure);

      let input_measure = document.createElement("input");
      input_measure.type = "text";
      input_measure.className = "input";
      input_measure.name = "measure";
      input_measure.required = true;
      
      table_data_measure.appendChild(input_measure)
      

      let table_data_price = document.createElement("td");
      table_row.appendChild(table_data_price);

      let input_price = document.createElement("input");
      input_price.type = "text";
      input_price.className = "input";
      input_price.name = "price";
      input_price.required = true;
      
      table_data_price.appendChild(input_price)


      let table_data_brand = document.createElement("td");
      table_row.appendChild(table_data_brand);

      let input_brand = document.createElement("input");
      input_brand.type = "text";
      input_brand.className = "input";
      input_brand.name = "brand";
      input_brand.required = true;
      
      table_data_brand.appendChild(input_brand)

    //Input de números
    let table_data_number = document.createElement("td");
    table_row.appendChild(table_data_number);

    let input_numbers = document.createElement("input");
    input_numbers.type = "number";
    input_numbers.className = "input";
    input_numbers.name = "quantity";
    input_numbers.required = true;

    table_data_number.appendChild(input_numbers);

    //Input file para receber a imagem
    let table_data_img = document.createElement("td");
    table_row.appendChild(table_data_img);

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
    }); //Função da imagem

      button_save.addEventListener("click", save);
    
  };//Função para adicionar.

  button_add.addEventListener("click", add);
  }//Condicional.
else{

  /*Esconde o botão de adiciona*/
  let hide_butt_add = document.getElementById("add")
  hide_butt_add.style.display = 'none'

  /*Mostra o botão de edição*/
  let button_edit = document.getElementById("edi")
  button_edit.style.display = 'block'

  $.ajax({
    url: "../../php/produtos-salvos.php",
    type: "POST",
    processData: false,
    contentType: false,
  }).done(function (request){
    request.forEach(function (data, index) {
        const table_body = document.querySelector("table > #body-tab")

        //Dados do produto
        let name = data.nome 
        let code = data.codigo
        let weight = data.peso
        let price = data.valor
        let brand = data.marca
        let quantity = data.quantidade
        let image = data.img 

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
              
                const edit = function toEdit(){

                let table_datas = document.getElementsByTagName('td')

                Array.from(table_datas).forEach(function(td){
                  td.addEventListener("click", function(){

                    console.log(td.textContent)
                  
                    if(td.textContent === ''){
                    let new_input_td = document.createElement('input')
                    new_input_td.type = 'image'
                    new_input_td.name = 'new-img'
                    new_input_td.id = 'new-img'
                    new_input_td.required = true
                    new_input_td.className = ''                
            
                    td.appendChild(new_input_td)

                      new_input_td.addEventListener("click", function(click){
                        click.stopPropagation()//Para input não sumir
                      })

                      let label = document.createElement('label')
                      label.htmlFor = 'new-img'
                      label.className = 'label-input'
                      console.log("Vazio!")
                    }
                    else{
                    let new_input_td = document.createElement('input')
                    new_input_td.type = 'text'
                    new_input_td.name = 'new-name'
                    new_input_td.required = true
                    new_input_td.className = 'new-name'
                        
                      td.textContent = null
  
                      td.appendChild(new_input_td)

                      new_input_td.addEventListener("click", function(click){
                        click.stopPropagation()//Para input não sumir
                      })

                    }
                  })
                })
                
                  button_edit.style.display = 'none'
                  //Botão de adição
                  let button_add = document.getElementById("add")
                  button_add.style.display = 'block'
              }//Função para editar

              button_edit.addEventListener("click" , edit)
    });//Forreach
  });//Ajax //Done
}//Condicional else

});//Carregamento