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
input_company.style.color = 'black'
input_company.style.textShadow = 'none'
input_company.style.letterSpacing = '3px'
input_company.style.textAlign = 'center'

company.style.display = 'none'

document.querySelector("#company-dates > ul > #name").style.backgroundColor = 'transparent'

let span_company = company.parentNode
span_company.insertBefore(input_company,company.nextSibling)
span_company.removeChild(company)

let input_manager = document.createElement('input')
input_manager.className = 'par'
input_manager.id = 'span-manager'
input_manager.name = 'span-manager'
input_manager.style.color = 'black'
input_manager.style.textShadow = 'none'
input_manager.style.letterSpacing = '3px'
input_manager.style.textAlign = 'center'

company.style.display = 'none'

document.querySelector("#company-dates > ul > #manager").style.backgroundColor = 'transparent'

let span_manager = manager.parentNode
span_manager.insertBefore(input_manager,manager.nextSibling)
span_manager.removeChild(manager)

let input_cnpj = document.createElement('input')
input_cnpj.className = 'par'
input_cnpj.id = 'span-cnpj'
input_cnpj.name = 'span-cnpj'
input_cnpj.style.color = 'black'
input_cnpj.style.textShadow = 'none'
input_cnpj.style.letterSpacing = '3px'
input_cnpj.style.textAlign = 'center'

cnpj.style.display = 'none'

document.querySelector("#company-dates > ul > #cnpj").style.backgroundColor = 'transparent'

let span_cnpj = cnpj.parentNode
span_cnpj.insertBefore(input_cnpj,cnpj.nextSibling)
span_cnpj.removeChild(cnpj)

let input_local = document.createElement('input')
input_local.className = 'par'
input_local.id = 'span-local'
input_local.name = 'span-local'
input_local.style.color = 'black'
input_local.style.textShadow = 'none'
input_local.style.letterSpacing = '3px'
input_local.style.textAlign = 'center'

local.style.display = 'none'

document.querySelector("#company-dates > ul > #local").style.backgroundColor = 'transparent'

let span_local = local.parentNode
span_local.insertBefore(input_local,local.nextSibling)
span_local.removeChild(local)

let input_tel_fix = document.createElement('input')
input_tel_fix.className = 'par'
input_tel_fix.id = 'span-local'
input_tel_fix.name = 'span-local'
input_tel_fix.style.color = 'black'
input_tel_fix.style.textShadow = 'none'
input_tel_fix.style.letterSpacing = '3px'
input_tel_fix.style.textAlign = 'center'

tel_fix.style.display = 'none'

document.querySelector("#company-dates > ul > #tel").style.backgroundColor = 'transparent'

let span_tel_fix = local.parentNode
span_tel_fix.insertBefore(input_tel_fix,tel_fix.nextSibling)
span_tel_fix.removeChild(tel_fix)


});//Função de editar

});//Carregamento da página