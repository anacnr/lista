
/*
 *O Ajax permite que o JavaScript se comunique com o PHP para validar as condicionais de acesso.
 */

// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", function () {
    console.log("Script carregado!")//Teste

    const email = document.querySelector("#email")
    const password = document.querySelector("#senha")

    document.querySelector('form').addEventListener("submit", (event)=>{

        event.preventDefault()

        if(email.value.length == 0 && password.value.length == 0){
            console.log("Inputs vazios")
        }
        else{
            /*Requisição Ajax*/
            const form = new FormData()
            form.append('email', email.value)
            form.append('senha', password.value)
            $.ajax({
                url: './php/login.php', type: 'POST', data: form, processData: false, contentType: false
            }).done(function(request){
                //console.log(request)
                request.forEach(element => {
                    //Email encontrado porém senha errada
                    if(element.answer == "Incorreta"){
                        console.log("Senha ", element)

                        //Esconde o formulário
                        const form_hide = document.querySelector('form')
                        form_hide.style.display = 'none'

                        //Cria a div para emitir a mensagem
                        const box = document.createElement("div")
                        box.className = 'advice'
                        box.textContent = 'Senha incorreta. Tente novamente!'

                        document.querySelector('body').appendChild(box)

                        //Botão para corrigir a senha
                        const button = document.createElement("button")
                        button.id = 'back'
                        button.type = 'reset'
                        button.textContent = 'Voltar'
                        
                        document.querySelector('body').appendChild(button)

                        //Ìcone de retorno do botão
                        const i = document.createElement("i")
                        i.className = 'bi bi-arrow-counterclockwise'

                        button.appendChild(i)

                        console.log(box.textContent)

                        //Evento para chamar o form novamente
                        button.addEventListener("click", ()=>{
                            setInterval(()=>{
                                form_hide.style.display = 'block'

                                box.style.display = 'none'
                            },2000)
                        });//Evento do botão reset
                    }
                    //Email encontrado senha correta
                    else if(element.answer == "Correta"){
                        console.log("Senha ", element)
                        setTimeout(()=>{
                            location.href = '../index.html'
                        },2000)
                    }
                    //Dados não encontrados
                    else{
                        console.log("Dados inválidos ", element)
                        
                        //Esconde a div
                        const form_hide = document.querySelector('form')
                        form_hide.style.display = 'none'

                        //Cria a div para emitir a mensagem
                        const box = document.createElement("div")
                        box.className = 'advice'
                        box.textContent = 'Dados inválidos. Faça o seu cadastro!'

                        document.querySelector('body').appendChild(box)

                        //Botão para corrigir a senha
                        const button = document.createElement("button")
                        button.id = 'back'
                        button.type = 'reset'
                        button.textContent = 'Voltar'
                        
                        document.querySelector('body').appendChild(button)

                        //Ìcone de retorno do botão
                        const i = document.createElement("i")
                        i.className = 'bi bi-arrow-counterclockwise'

                        button.appendChild(i)

                        console.log(box.textContent)

                        //Evento para chamar o form novamente
                        button.addEventListener("click", ()=>{
                            setInterval(()=>{
                                form_hide.style.display = 'block'

                                box.style.display = 'none'
                            },2000)
                        });//Evento do botão reset
                    }                    
                });
            }).fail(function (jqXHR, textStatus, errorThrown) {
                console.log(" ERRO ", jqXHR, textStatus, errorThrown);
              });
        }
    });//Evento do formulário
});//Carregamento

function Register() {
/*Essa função redireciona para a tela de escolha entre supermercado e comprador*/
setTimeout(()=>{
    location.href = 'choose.html'
}); 
}