document.addEventListener("DOMContentLoaded" , ()=>{
  /*Adicionar os campos*/
  const button_add = document.getElementById("add")
  
  button_add.addEventListener("click", ()=>{
   console.log("Clique add");

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
  });
  //Função para salvar

  const button_save = document.getElementById("sav")
  button_save.addEventListener("click" , ()=>{
    document.querySelectorAll('input').forEach(function(iten, index){
      if(iten.value.length <=3){
        document.querySelector('form').addEventListener("submit", (event)=>{
          event.preventDefault();
          console.log("Form não enviaado");
        })
        //console.log("Campos vazios!");
      }
      else{
        console.log("Produtos salvos");
      }
    })
  });//Cadastra os produtos

  /*Emissão dos produtos salvos //Requisição ajax*/
  $.ajax({
    url: '/l/lista/php/produtos-salvos.php' , type: 'POST', processData: false, contentType: false
  }).done(function(request){
    console.log(typeof(request));
    request.forEach(function(element, index){
      const tbody = document.querySelector('tbody')
      let tr = document.createElement("tr")
      tbody.appendChild(tr)
      const fields = element.campos - 2 
      let id = element.id
      for(let count=0;count<fields;count++){
        let td = document.createElement("td")
        tr.appendChild(td)
      }
    })
  })
  
  console.log("Script!");
  /*const table = document.querySelector("table")
  let disponible_rows = table.rows.length
  console.log(disponible_rows);
  if(disponible_rows > 1){
  }*/
});//Carregamento da página 