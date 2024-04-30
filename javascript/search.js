console.log("Script JS")

const input = document.querySelector('input')
const button_submit = document.querySelector('i')

button_submit.addEventListener('click', ()=>{
    if(input.value.length < 1){
            console.log("Input vazio!");
    }
    else{
            const form = new FormData()
            form.append('input' , input.value)    
            $.ajax({
                url:'../php/pesquisa.php', type: 'POST', data: form, processData: false, contentType: false
            }).done(function(request){
                /*O body remove a div das frases*/
                const div_mess = document.getElementById("message")              
                document.querySelector('body').removeChild(div_mess)

                request.forEach(element => {

                    /*Criação dos cards de empresa e produtos*/

                    const body = document.querySelector('body')

                    if(element.tabela == 'empresa'){
                        const card = document.createElement("div")
                        card.className = 'results'
                        card.id = `${element.id}`
                        card.style.backgroundImage = `url(../php/${element.imagem})`
    
                        body.appendChild(card)
    
                        const h1 = document.createElement("h1")
                        h1.className = 'title'
                        h1.id = `${element.id}`
                        h1.innerHTML = `${element.empresa}`
    
                        card.appendChild(h1)
    
                        const dates = document.createElement("p")
                        dates.className = 'phrase-comp'
                        dates.id = `${element.id}`
                        dates.innerHTML = `Email: ${element.email} <br> Telefone-fixo: ${element.tel_fixo} <br> Telefone-móvel: ${element.celular}`
    
                        card.appendChild(dates)

                        if(element.tabela == undefined){
                            card.style.display = 'none'
                        }
                    }
                    else if(element.tabela == 'produto'){
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
                        
                        dates.innerHTML = 'Marca:' + `${element.marca}` + '<br> Preço:' +  parseFloat(`${element.valor}`).toFixed(2).replace('.' ,',') + ' por kg.'
    
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

                        button.addEventListener("click" ,  ()=>{
                            setTimeout(()=>{
                                //location.href = '../cliente/lista.html'
                                /*Cálculo rápido sobre o quilo
                                let price = element.valor;
                               console.log(price *10)
                               */                             
                               let price = `${element.valor}`;
                               let calcu = (price * 500)/1000
  
                               confirm("Produto " + `${element.nome}`+ " adicionado na lista " + "Preço: " + parseFloat((`${calcu}}`)).toFixed(2).replace('.' , ','))

                            })
                        });
                    }
                });
            })           
    }
});//Botão