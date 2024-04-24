
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

                        //Esconde a dib
                        const form = document.querySelector('form')
                        form.style.display = 'none'

                        //Cria a div para emitir a mensagem
                        const box = document.createElement("div")
                        box.className = 'advice'

                        document.querySelector('body').appendChild(box)

                        //Botão para corrigir a senha
                        const button = document.createElement("button")
                        button.id = 'back'
                        button.type = 'reset'
                        button.textContent = 'Voltar'
                        
                    }
                    //Email encontrado senha correta
                    else if(element.answer == "Correta"){
                        console.log("Senha ", element)
                    }
                    //Dados não encontrado
                    else{
                        console.log("Dados inválidos ", element)
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
   window.location.href = 'choose.html'
    
}
