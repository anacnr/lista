/*Criar a lista com js*/
document.addEventListener("DOMContentLoaded" , ()=>{
    fetch("../javascript/lista.json").then(function(response){
        response.json().then(function(produto){
            /*Aqui deve fazer a lógica de criação da lista*/
            //console.log(produto)
            produto.produtos.map((ponto)=>{
                console.log(ponto)
                let li = document.createElement("li")
                li.innerHTML += `${ponto.nome}`
                document.querySelector('ul').appendChild(li)
            })
        })
    }) 
});
       
