/*Criar a lista com js*/
document.addEventListener("DOMContentLoaded" , ()=>{
fetch("../javascript/lista.json").then(function(response){
    response.json().then(function(produto){

// Obtém o tbody onde queremos adicionar as linhas
let tbody = document.querySelector('tbody');

// Itera sobre cada ponto do produto e adiciona uma nova linha para cada um
produto.forEach((ponto) => {
    // Cria uma nova linha
    let create_row = document.createElement('tr');
    
    for(let count=0;count<5;count++){
        let create_td = document.createElement("td")
        create_td.id = `${count}`
        create_row.appendChild(create_td)

        if(create_td.id == 0){
            create_td.innerHTML = `${ponto.nome}`
        }
        else if(create_td.id == 1){
            create_td.innerHTML = `${ponto.peso}`
        }
        else if(create_td.id == 2){
            create_td.innerHTML = `${ponto.valor}`
        }
        else if(create_td.id == 3){
            create_td.innerHTML = `${ponto.marca}`
        }
        else{
            let create_img = document.createElement("img")
            create_img.src = `../php/${ponto.imagem}`
            create_td.appendChild(create_img)
        }
    }
    
    // Adiciona a nova linha ao tbody
    tbody.appendChild(create_row);
});   
    //console.log("TD: " + iten.id + "INDEX: " + index);
      })
    })
});//then