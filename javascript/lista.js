/*Cria a lista com js atarvés do json e do php*/
document.addEventListener("DOMContentLoaded" , ()=>{
fetch("../javascript/lista.json").then(function(response){
    response.json().then(function(produto){

let tbody = document.querySelector('tbody');

//Passado um forEach para que pegue cada ponto da resposta do json
produto.forEach((ponto) => {
    //A linha vai ser criada conforme cada iteração do array associativo
    let create_row = document.createElement('tr');
    
    for(let count=0;count<5;count++){
        let create_td = document.createElement("td")
        create_td.id = `td${count}`
        create_row.appendChild(create_td)

        if(create_td.id == 'td0'){
            create_td.innerHTML = ponto.nome
        }
        else if(create_td.id == 'td1'){
            create_td.innerHTML = ponto.peso
        }
        else if(create_td.id == 'td2'){
            let price = parseFloat(`${ponto.valor}`).toFixed(2).replace('.', ',')
            create_td.textContent = price
        }
        else if(create_td.id == 'td3'){
            create_td.innerHTML = ponto.marca
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

let total = 0;
document.querySelectorAll("#td2").forEach((item) => {
    //Aqui vai converter novamente os valores para números flutuantes a cada vez que estiver procurando pelas tds com id td2
    let td_value = parseFloat(item.innerHTML.replace(',', '.'));
    
    //O contadot total está incrementando o valor a cada soma
    total += td_value;
});
//Este elemento vai receber o total da lista
document.querySelector("#total-span").textContent += total.toFixed(2).replace('.', ',');
    })
    })

    document.querySelectorAll('.span-supermarkets').forEach(iten =>{
        iten.addEventListener("click" , ()=>{
            window.confirm("As marcas podem ter sido mudadas, mas os produtos são os mesmos. Deseja alterar o supermercado?")
        })
    })

    document.querySelectorAll('button')[1].addEventListener("click" , ()=>{
       let advice = window.confirm("Você deseja cancelar a encomenda? A lista será perdida caso clique em 'OK'.")

        if(advice){
            document.querySelector('table').style.display = 'none'
            document.querySelectorAll('span').forEach(iten =>{
                iten.style.display = 'none'
            })
            document.querySelectorAll('button').forEach(iten =>{
                iten.style.display = 'none'
            })

            document.querySelector('h1').innerHTML = 'Lista vazia'
        }
        else{

        }
    })

    document.querySelectorAll('button')[0].addEventListener("click", ()=>{
        setTimeout(()=>{
            location.href = '../cliente/compra/Pagamento/Pagamento.html'
        },1500)
    })

    document.querySelector("#supermarket").addEventListener("click", ()=>{
        setTimeout(()=>{
            location.href = '../cliente/index.html'
        },1500)
    })

    document.querySelector("#product").addEventListener("click", ()=>{
        setTimeout(()=>{
            location.href = '../cliente/pesquisa.html'
        },1500)
    })
});//onlodad