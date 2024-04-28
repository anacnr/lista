console.log("Script JS")

const input = document.querySelector('input')
const button_submit = document.querySelector('i')

button_submit.addEventListener('click', ()=>{
    if(input.value.length < 1){
            console.log("Input vazio!");
    }
    else{
            console.log(input.value)
            const form = new FormData()
            form.append('input' , input.value)    
            $.ajax({
                url:'../php/pesquisa.php', type: 'POST', data: form, processData: false, contentType: false
            }).done(function(request){
                /*O body remove a div das frases*/
                const div_mess = document.getElementById("message")              
                document.querySelector('body').removeChild(div_mess)

                request.forEach(element => {
                    console.log(element)

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
                        dates.className = 'phrase'
                        dates.id = `${element.id}`
                        dates.innerHTML = `Email: ${element.email} <br> Telefone-fixo: ${element.tel_fixo} <br> Telefone-móvel: ${element.celular}`
    
                        card.appendChild(dates)
                    }
                });
            })           
    }
});//Botão