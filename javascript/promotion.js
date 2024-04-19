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

            /*let option = document.createElement('option')
            select.appendChild(option)*/

            const form = new FormData()
            form.append('product', input.value)
            
            $.ajax({
                url: '../php/promo.php',
                type: "POST",
                data: form,
                processData: false,
                contentType: false
            }).done(function(request) {
                //console.log(request)  
                request.forEach(iten => {
                    //console.log(iten.nome)
                    //Dados puxado do banco
                    let name = iten.nome
                    let code = iten.codigo
                    let brand = iten.marca
                    let line = iten.linhas

                    for(let count = 0; count < line; count++){
                        let option = document.createElement('option')
                        option.id = `opt${count}`//Técnica vista na internet
                        option.value = `name${count}`//Técnica vista na internet
                        option.className = 'dates'
                        option.textContent = code
                        select.appendChild(option)
                    }

                });
            });
        }
    }
    button.addEventListener("click", search)
    
});
