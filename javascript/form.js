
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
                    if(element.tabela == "comprador"){
                        if(element.senha == "Comprador-autorizado"){
                            console.log("Status: ", element , "Tabela: ", element.tabela);

                            setTimeout(()=>{
                                location.href = '../lista/cliente/index.html'
                            },1000)
                        }
                        else if(element.senha == "Comprador-autorizado"){
                            console.log("Status: ", element , "Tabela: ", element.tabela);
                            setTimeout(()=>{
                                location.href = '../lista/supermercado/index.html'
                            },1000)
                        }
                        else{
                            console.log("Status: ", element , "Tabela: ", element.tabela);
                        }              
                    }
                    else if(element.tabela == "vendedor"){
                        if(element.senha == "Vendedor-autorizado"){
                            console.log("Status: ", element , "Tabela: ", element.tabela);
                            setTimeout(()=>{
                                location.href = '../lista/supermercado/index.html'
                            },1000)
                        }
                        else if(element.senha == "Vendedor-autorizado"){
                            console.log("Status: ", element , "Tabela: ", element.tabela);
                            setTimeout(()=>{
                                location.href = '../lista/supermercado/index.html'
                            },1000)
                        }
                        else{
                            console.log("Status: ", element , "Tabela: ", element.tabela);
                        }   
                    }
                    else if(element.tabela == "suporte"){
                        if(element.senha == "Suporte-autorizado"){
                            console.log("Status: ", element , "Tabela: ", element.tabela);
                            setTimeout(()=>{
                                location.href = '../lista/index.html'
                            },1000)
                        }
                        else if(element.senha == "Suporte-autorizado"){
                            console.log("Status: ", element , "Tabela: ", element.tabela);
                        }
                        else{
                            console.log("Status: ", element , "Tabela: ", element.tabela);
                        }   
                    }
                    
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