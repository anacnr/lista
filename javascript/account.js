document.addEventListener("DOMContentLoaded", function(){

    console.log("Script carregado!")

/*Dados do usuário para emitir inicialmente*/
let image = document.getElementById("company-img")//Pega o id da imagem
let company = document.getElementById("span-name")//Pega o id do span
let manager = document.getElementById("span-manager")
let cnpj = document.getElementById("span-cnpj")
let local = document.getElementById("span-local")
let tel_fix = document.getElementById("span-tel")
let tel_priv = document.getElementById("span-private")
let email = document.getElementById("span-email")
let password = document.getElementById("span-password")

/*Criação do novo formulário para passar os campos para o PHP*/

let dates = new FormData()

dates.append('company-img' , image)
dates.append('span-name' , company)
dates.append('span-manager' , manager)
dates.append('span-cnpj' , cnpj)
dates.append('span-local' , local)
dates.append('span-tel' , tel_fix)
dates.append('span-private' , tel_priv)
dates.append('span-email' , email)
dates.append('span-password' , password)
/*
/*Exibe os dados do usuário. Requisição dos dados*/
$.ajax({
    url: '../php/account-super.php' , type: 'POST', data: dates, processData: false, contentType: false
}).done(function(request){
    console.log(request);

    manager.textContent = `${request.empresa}`
})

/*Caso o usuário edite os dados*/

let button_edit = document.getElementById("edit")
button_edit.addEventListener("click", function(){

/*Transformação dos campos em inputs*/


let input_company = document.createElement('input')
input_company.className = 'par'
input_company.id = 'span-name'
input_company.name = 'span-name'

document.querySelector("#company-dates > ul > #name").style.backgroundColor = 'transparent'
document.querySelector("#company-dates > ul > #name").style.boxShadow = 'none';

company.style.display = 'none'

let brother = company.parentNode
brother.insertBefore(input_company,company.nextSibling)
brother.removeChild(company)
});//Função de editar

});//Carregamento da página