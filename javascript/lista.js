/*Criar a lista com js*/
document.addEventListener("DOMContentLoaded" , ()=>{
fetch("../javascript/lista.json").then(function(response){
    response.json().then(function(produto){
        let create_rows = produto.length
        for(let count=1;count<=create_rows;count++){
            let tablerow = document.createElement("tr");
            tablerow.id = `tr${count}`
            document.querySelector('tbody').appendChild(tablerow);
        }
        document.querySelectorAll('tbody > tr').forEach((iten,index)=>{
            for(let count=0;count<5;count++){
                let td = document.createElement("td")
                td.id = `td${count}`
                iten.appendChild(td)
            }
        })

        document.querySelectorAll('tbody > tr').forEach((iten,index)=>{
            let first = document.querySelectorAll('td')[0]
            produto.map(ponto =>{               
                let tr_id = iten.id
    
                if(tr_id == `tr${index}`){
                    first.textContent = `${ponto.nome}`
                    console.log(`${ponto.nome}`);
                }
              })
        })

        
       1})
    })
});//tehn