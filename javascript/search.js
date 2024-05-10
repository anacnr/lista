console.log("Script JS")

prompt("Qual supermercado você deseja fazer compras?")

const input = document.querySelector('input')
const button_submit = document.getElementById('icon-butt')

button_submit.addEventListener('click', ()=>{
    if(input.value.length < 1){
            console.log("Input vazio!");
    }
    else{
            /*O body remove a div das frases*/
            const div_mess = document.getElementById("message")              
            document.querySelector('body').removeChild(div_mess)

            const form = new FormData()
            form.append('input' , input.value)    
            $.ajax({
                url:'../php/pesquisa.php', type: 'POST', data: form, processData: false, contentType: false
            }).done(function(request){

                request.forEach(element => {

                    const body = document.querySelector('body')
                
                     if(element.tabela == 'produto'){

                        const card = document.createElement("div")
                        card.className = 'results'
                        card.id = `${element.id}`
                        card.style.cursor = 'pointer'
    
                        body.appendChild(card)
    
                        const h1 = document.createElement("h1")
                        h1.className = 'title'
                        h1.id = `${element.id}`
                        h1.innerHTML = `${element.nome}`
    
                        card.appendChild(h1)
    
                        const dates = document.createElement("p")
                        dates.className = 'phrase-prod'
                        dates.id = `${element.id}`
                        
                        dates.innerHTML = 'Marca:' + `${element.marca}` + '<br> Preço:' +  parseFloat(`${element.valor}`).toFixed(2).replace('.' ,',') + '<br>' + `Peso: ${element.peso}g.`
    
                        card.appendChild(dates)

                        const image = document.createElement("img")
                        image.src = `../php/${element.img}`
                        image.className = 'img-product'
                        image.id = `img${element.id}`

                        card.appendChild(image)

                        const button = document.createElement("button")
                        button.type = 'button'
                        button.className = 'button-card'
                        button.innerHTML = 'Adicionar'

                        card.appendChild(button)
                        const i = document.createElement("i")
                        i.className = 'bi bi-cart-plus'

                        button.appendChild(i)                      

                        //Empacota os dados para serem salvos no arquivo json e o PHP irá tratar os dados vindos do arquivo json
                        let name_prod = element.nome//Produto escolhido
                        let peso_prod = element.peso
                        let value_prod = element.valor
                        let brand_prod = element.marca
                        let image_prod = element.img                    
                        
                button.addEventListener("click", () => {
                                    
                let price = `${element.valor}`;
                let calcu = (price * peso_prod) / 1000;
                alert("Produto " + name_prod + " adicionado na lista " + "Preço: " + parseFloat(`${calcu}`).toFixed(2).replace('.', ','));
                
                const dates = new FormData()
                dates.append('id' , element.id)
                dates.append('nome' , name_prod)
                dates.append('peso' , peso_prod)
                dates.append('valor' , value_prod)
                dates.append('marca' , brand_prod)
                dates.append('img' , image_prod)
    
                $.ajax({
                url:'../php/lista.php', type: 'POST', data: dates, processData: false, contentType:false
                }).done(function(request){
                    console.log(request)
                })

            });          
            // Anexa o button ao card
            card.appendChild(button);
        }
    });
    })           
  }
});//Botão