document.addEventListener("DOMContentLoaded" , function(){

    const input = document.getElementById("product")

    const button = document.querySelector('.bi-search')

    const search = function toSearch(){
        
        if(input.value.length == 0 ){
            console.log("Valor:" , input)
        }
        else{
            console.log("Pesquisando...")

            const select = document.getElementById("field-sel")
            select.style.display = 'block'

            const edit = () =>{
                let box = document.createElement('div')
                box.className = 'price-box'

                let body = document.querySelector('body')
                body.appendChild(box)
                
                let input = document.createElement('input')
                input.id = 'new-price'
                input.type = 'text'
                input.minLength = '4'
                input.placeholder = "Novo-preço"

                box.appendChild(input)

                this.removeEventListener("click", edit)
            }

            const form = new FormData()
            form.append('product', input.value)
            
            $.ajax({
                url: '../php/promo.php',
                type: "POST",
                data: form,
                processData: false,
                contentType: false
            }).done(function(request) {
                select.innerHTML = "" //Previne a duplicação            
                
                request.forEach(iten => {
                    //Dados puxado do banco
                    let name = iten.nome
                    let code = iten.codigo
                    let brand = iten.marca
                    let id = iten.id

                        let option = document.createElement('option')                        
                        option.className = 'data'
                        option.textContent = name
                        select.appendChild(option)                    
                        option.id = `id${id}`
                        option.value = `val${id}`

                        option.addEventListener("click", edit)

                        const box = document.querySelector('.price-box')
                        /*Criação do parágrafo para pegar o código*/
                         let phrase = document.createElement('p')
                         phrase.id = 'price-prod'
                         box.appendChild(phrase)    

                        phrase.innerHTML = `Código: ${code}`            
                });
            });            
        }
    }
    button.addEventListener("click", search)
    
});
