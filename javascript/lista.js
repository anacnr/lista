/*Criar a lista com js*/
document.addEventListener("DOMContentLoaded" , ()=>{
    fetch("../javascript/lista.json").then(function(response){
        response.json().then(function(produto){
            /*Aqui deve fazer a lógica de criação da lista*/
            let quanti_row = Array(produto).length
            let tablerow = document.createElement("tr")
            for(let count=0;count<=quanti_row;count++){
                document.querySelector('tbody').appendChild(tablerow)
            }
            for(let count=0;count<6;count++){
                let tabledata = document.createElement("td")
                tabledata.id = `td${count}`
                tablerow.appendChild(tabledata)
            }
            produto.produtos.map((ponto)=>{
                console.log(ponto)
                document.querySelectorAll('td').forEach((element =>{
                    if(element.id == 'td0'){
                        element.textContent = `${ponto.nome}`
                    }
                    else if(element.id == 'td1'){
                        element.textContent = `${ponto.peso}`
                    }
                    else if(element.id == 'td2'){
                        element.textContent = parseFloat(`${ponto.valor}`).toFixed(2).replace('.', ',')
                    }
                    else if(element.id == 'td3'){
                        element.textContent = `${ponto.marca}`
                    }
                    else if(element.id == 'td4'){
                        element.textContent = 0
                    }
                    else{
                        let img = document.createElement("img")
                        img.src = 'produtos/frutas/pears-min.jpg'
                        img.className = 'image'
                        element.appendChild(img)
                    }
                }))
                document.getElementById("total-span").innerHTML += parseFloat(`${ponto.valor}`).toFixed(2).replace('.', ',')
            })
        })
    })
    document.getElementById("sav").addEventListener("click", ()=>{
        setTimeout(()=>{
            location.href = '../cliente/compra/Pagamento/Pagamento.html'
        },1000)
    })
});