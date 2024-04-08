/**
 * A tabela poderá ter uma linha editada ou apagada e também o usuário poderá acrescentar mais linhas.
 */
document.addEventListener("DOMContentLoaded", function () {
  let table_body = document.querySelector("tbody");

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

    //Parte de salvar os setores

    let button_save = document.querySelector("#sav");

    const save = function toSave() {
      //Verifica se os inputs não receberam valores
      let datas = []
        document.querySelectorAll(".input").forEach( input => {
            datas.push(input.value);
        })

      if (datas.length == 0) {
        console.log("Por favor preencha os campos!");
      } else {
        //É aqui que vai rolar a adição dos produtos

        console.log("Botão salvar clicado!");
      }
    }; //Função para salvar os dados do propriedade

    button_save.addEventListener("click", save);
  }; //Função para adicionar.

  button_add.addEventListener("click", add);
}); //Carregamento

$.ajax({
    url: "../../php/produtos-salvos.php",
    type: "POST",
    processData: false,
    contentType: false,
  }).done(function (request){
    request.forEach(function (data , index) {
        const table = document.querySelector("form > table")

        let name = data.nome 
        let code = data.codigo

        table_row = document.createElement("tr")
        table.appendChild(table_row)

    });
  });