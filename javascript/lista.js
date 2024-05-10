/*Criar a lista com js*/
document.addEventListener("DOMContentLoaded" , ()=>{
fetch("../javascript/lista.json").then(function(response){
    response.json().then(function(produto){
        console.log(produto);
        
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

        //Pecorre o array do json como cada ponto e adiciona o centeúdo das tds
        produto.map((ponto)=>{
            document.querySelectorAll('td').forEach(element=>{
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
                else{
                    console.log("Caminho da minha iamgem " + ponto.imagem);
                    let img = document.createElement("img")
                    img.src = `../php/${ponto.imagem}`
                    img.className = 'image'
                    element.appendChild(img)
                }

            })
        })
    })
});//tehn
});