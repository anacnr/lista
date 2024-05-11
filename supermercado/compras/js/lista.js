/*Cria a lista com js atarvés do json e do php*/
document.addEventListener("DOMContentLoaded" , ()=>{
fetch("js/lista.json").then(function(response){
    response.json().then(function(produto){

let tbody = document.querySelector('tbody');

//Passado um forEach para que pegue cada ponto da resposta do json
produto.forEach((ponto) => {
    //A linha vai ser criada conforme cada iteração do array associativo
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
            create_img.src = `php/${ponto.imagem}`
            create_td.appendChild(create_img)
        }
    }    
    // Adiciona a nova linha ao tbody
    tbody.appendChild(create_row);
});   
      })
    })//json
});//onload