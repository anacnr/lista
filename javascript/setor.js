/*O chat me aconselhou a criar uma outra função para criar os elementos um de cada vez, somente quando o botão salvar for clicado que deixa criar mais input do setor. CRUD*/

document.addEventListener("DOMContentLoaded", function(){

console.log("Script")

    /*Criação dos elementos: input, botão de salvar,o botão para deletar e a quebra de linha*/
    let input = document.createElement("input")
    let button_save = document.createElement('button')
    let button_del = document.createElement('img')
    let godfather = document.querySelector("form")//Elemento pai(padrinho)
    let line = document.createElement('br')

    input.className = 'setor'
    input.maxLength = '15'
    input.name = 'setor' //Utilizar para salvar no php
    godfather.appendChild(input)
                
    button_save.className = 'save'
    button_save.textContent = 'salvar'
    button_save.type = 'submit'
    godfather.appendChild(button_save)
                
    button_del.className = 'del'
    button_del.src = 'imgs-cad/cancel.svg'//ícone retirado do GoogIcons
    godfather.appendChild(button_del)
                
    godfather.appendChild(line)

document.querySelector('form').addEventListener("submit", function(e){

            e.preventDefault();

            const form = new FormData()
            form.append('setor' , input.value);

            //ajax
            $.ajax({
                url: '../php/setor.php',
                type: 'POST',
                data: form,
                processData: false, contentType: false
            }).done(function(result){
                /*O result vai valer como o $request*/
                if(result == "true"){
                    console.log("Teste 1: " , result)
                }
                else{
                    console.log("Teste 2: " , result)
                }
            }).fail(function (jqXHR, textStatus, errorThrown) {
                /*O .fail() serve para mostrar o erro caso exista*/
                console.log("Erro na requisição AJAX:", textStatus, errorThrown);
            });//ajax //done //fail          
        });//submit
});//DOMContentLoaded