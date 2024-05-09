console.log("Script JS")

const input = document.querySelector('input')
const button_submit = document.getElementById('icon-butt')

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
                    }
                    else if(element.tabela == 'produto'){
                        console.log("setor: " + element.setor)

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

                        // Adiciona o ouvinte de evento para o button
                        let name_prod = element.nome// Produto escolhido
                        let peso_prod = element.peso
                        let value_prod = element.valor
                        let brand_prod = element.marca
                        //let quant_prod =
                        //let image = element.img 
                        
                        const form = document.createElement("form")
                        form.action = 'json.php'
                        form.method = 'POST'
                        form.style.opacity = '0'

                        document.querySelector('body').appendChild(form)

                        for(let count=0;count<=3; count++){
                            const input = document.createElement("input")
                            input.id = count
                            input.type = 'text'
                            if(input.id == 0){
                                input.name = 'nome'
                                input.value = name_prod
                            }
                            else if(input.id == 1){
                                input.name = 'peso'
                                input.value = peso_prod
                            }
                            else if(input.id == 2){
                                input.name = 'valor'
                                input.value = value_prod
                            }
                            else{
                                input.name = 'marca'
                                input.value = brand_prod
                            }
                            form.appendChild(input)
                        }

                        form.appendChild(button)
                        
                        button.addEventListener("click", () => {
                            setTimeout(() => {
                                    
                                    let price = `${element.valor}`;
                                    let calcu = (price * 1000) / 1000;
                                    alert("Produto " + name_prod + " adicionado na lista " + "Preço: " + parseFloat(`${calcu}`).toFixed(2).replace('.', ','));


                                    const dates = new FormData()
                                    dates.append('nome' , name_prod)
                                    dates.append('peso' , peso_prod)
                                    dates.append('valor' , value_prod)
                                    dates.append('marca' , brand_prod)

                                    $.ajax({
                                        //url:'../php/lista.php', type: 'POST', data: dates, processData: false, contentType:false
                                    }).done(function(request){
                                        console.log(request)
                                    })
                            }, 0);
                        });          
                        // Anexa o button ao card
                        card.appendChild(button);
                    }
                });
            })           
    }
});//Botão