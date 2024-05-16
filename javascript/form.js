
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
                    //Validação do comprador
                    if(element.tabela == 'comprador'){
                        //Senha correta
                        if(element.senha == 'Comprador-autorizado'){
                            console.log("Email e senha encontrados na tabela " + element.tabela);
                            setTimeout(()=>{
                                location.href = '../lista/cliente/index.html'
                            },500)
                            //Previne que o quadro de aviso apareça
                            document.querySelector('.advice').style.display = 'none'
                        }
                        //Senha incorreta
                        else{
                        console.log("Senha incorreta " + element.senha);
                        //Esconde o formulário
                        const hide_form = document.querySelector('form')
                        hide_form.style.display = 'none'
                        password.value = ''//Limpa o campo

                        const verify_box = document.querySelector('.advice')

                        if(!verify_box){
                                                 //Quadro do aviso
                        const box = document.createElement("div")
                        box.className = 'advice'
                        box.innerHTML = 'Senha incorreta. <br> Tente novamente!'

                        document.querySelector('body').appendChild(box)

                        setTimeout(()=>{
                            hide_form.style.display = 'block'
                            //Remove o quadro para que não sejam criados mais quadros
                            document.querySelector('body').removeChild(box)
                        },4000)   
                        }
                        }
                    }//Primeira condicional
                    
                    //Validação do vendedor
                    else if(element.tabela == 'vendedor'){
                        //Senha correta
                        if(element.senha == 'Vendedor-autorizado'){
                            console.log("Email e senha encontrados na tabela " + element.tabela);
                            setTimeout(()=>{
                                location.href = '../lista/supermercado/index.html'
                            },500)
                            //Previne que o quadro de aviso apareça
                            document.querySelector('.advice').style.display = 'none'
                        }
                        //Senha incorreta
                        else{
                        console.log("Senha incorreta " + element.senha);
                        //Esconde o formulário
                        const hide_form = document.querySelector('form')
                        hide_form.style.display = 'none'
                        password.value = ''//Limpa o campo

                        const verify_box = document.querySelector('.advice')

                        if(!verify_box){
                                                //Quadro do aviso
                        const box = document.createElement("div")
                        box.className = 'advice'
                        box.innerHTML = 'Senha incorreta. <br> Tente novamente!'

                        document.querySelector('body').appendChild(box)

                        setTimeout(()=>{
                            hide_form.style.display = 'block'
                            //Remove o quadro para que não sejam criados mais quadros
                            document.querySelector('body').removeChild(box)
                        },4000)   
                        }
                      }
                    }//Segunda condicional
                    
                    //Validação do suporte
                    else if(element.tabela == 'suporte'){
                        if(element.senha == 'Suporte-autorizado'){
                            console.log("Email e senha encontrados na tabela de suporte "+ element);
                            setTimeout(()=>{
                                location.href = '../lista/suporte/index.html'
                            },500)
                            document.querySelector('.advice').style.display = 'none'
                        }
                        else{
                            console.log("Senha incorreta " + element.senha);
                            //Esconde o formulário
                            const hide_form = document.querySelector('form')
                            hide_form.style.display = 'none'
                            password.value = ''//Limpa o campo
    
                            const verify_box = document.querySelector('.advice')
    
                            if(!verify_box){
                                                    //Quadro do aviso
                            const box = document.createElement("div")
                            box.className = 'advice'
                            box.innerHTML = 'Senha incorreta. <br> Tente novamente!'
    
                            document.querySelector('body').appendChild(box)
    
                            setTimeout(()=>{
                                hide_form.style.display = 'block'
                                //Remove o quadro para que não sejam criados mais quadros
                                document.querySelector('body').removeChild(box)
                            },4000)   
                            }
                        }
                    }//Terceira condicional
                    //Usuário não encontrado
                    else{
                        console.log("Nenhum registro " + element + " encontrado")
                        //Esconde o formulário
                        const hide_form = document.querySelector('form')
                        hide_form.style.display = 'none'

                        const verify_box = document.querySelector('.advice')

                        if(!verify_box){
                       //Quadro do aviso
                       const box = document.createElement("div")
                       box.className = 'advice'
                       box.innerHTML = 'Dados inválidos. <br> Se cadastre!'

                       document.querySelector('body').appendChild(box)
                       setTimeout(()=>{
                           location.href = '../lista/login.html'
                       },4000)
                    }
                }//Quarta condicional
                    
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