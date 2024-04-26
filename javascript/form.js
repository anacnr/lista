
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
                    request.forEach(element => {
                    //Email e senha encontrados na tabela comprador
                    if(element.senha == 'Comprador-autorizado' && element.tabela == 'comprador'){
                        setTimeout(()=>{
                            location.href = '../lista/cliente/index.html'
                        },2500)
                    }//Primeira condicional
                    //Email e senha encontrados na tabela comprador
                    else if(element.senha == 'Vendedor-autorizado' && element.tabela == 'vendedor'){
                        setTimeout(()=>{
                            location.href = '../lista/supermercado/index.html'
                        },2500)
                    }//Segunda condicional
                    //Email e senha encontrados na tabela comprador
                    else if(element.senha == 'Suporte-autorizado' && element.tabela == 'suporte'){
                        setTimeout(()=>{
                            location.href = '../lista/suporte/teste.html'
                        },2500)
                    }//Terceira condicional
                    //Senha incorreta
                    else if(element.senha == 'desautorizado'){

                        //Esconde o formulário
                        const hide_form = document.querySelector('form')
                        hide_form.style.display = 'none'
                        password.value = ''//Limpa o campo

                        //Quadro do aviso
                        const box = document.createElement("div")
                        box.className = 'advice'
                        box.innerHTML = 'Senha incorreta. <br> Tente novamente!'

                        document.querySelector('body').appendChild(box)

                        setTimeout(()=>{
                            hide_form.style.display = 'block'

                            //Remove o quadro para que não sejam criados mais quadros
                            document.querySelector('body').removeChild(box)
                        },2000)
                    }//Quarta condicional
                    //Se não encontrar nenhum registro com email e senha
                    else if(element.login == 'desconhecido'){
                        console.log(element)
                        //Esconde o formulário
                        const hide_form = document.querySelector('form')
                        hide_form.style.display = 'none'

                        //Quadro do aviso
                        const box = document.createElement("div")
                        box.className = 'advice'
                        box.innerHTML = 'Dados inválidos. <br> Se cadastre!'

                        document.querySelector('body').appendChild(box)
                        setTimeout(()=>{
                            location.href = '../lista/login.html'
                        },2000)
                    }//Quinta condicional
                    
                })//Loop for                    
            }).fail(function (jqXHR, textStatus, errorThrown) {
                console.log(" ERRO ", jqXHR, textStatus, errorThrown);
              });//ajax
        }//Else
    });//Evento do formulário
});//Carregamento

function Register() {
/*Essa função redireciona para a tela de escolha entre supermercado e comprador*/
setTimeout(()=>{
    location.href = 'choose.html'
}); 
}