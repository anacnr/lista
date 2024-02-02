/*O chat me aconselhou a criar uma outra função para criar os elementos um de cada vez, somente quando o botão salvar for clicado que deixa criar mais input do setor. CRUD*/

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


/*Função para adicionar o setor*/
    const add = function Addition(){
    console.log("Setor adicionado!")

    let input = document.createElement("input")
    let button_save = document.createElement('button')
    let button_del = document.createElement('img')
    let godfather = document.querySelector("body")//Elemento pai(padrinho)
    let line = document.createElement('br')

    input.className = 'setor'
    input.maxLength = '15'
    godfather.appendChild(input)
                
    button_save.className = 'save'
    button_save.textContent = 'salvar'
    button_save.type = 'submit'
    godfather.appendChild(button_save)
                
    button_del.className = 'del'
    button_del.src = 'imgs-cad/cancel.svg'//ícone retirado do GoogIcons
    godfather.appendChild(button_del)
                
    godfather.appendChild(line)

    let button_add = document.getElementById("add")
    button_add.style.transform = 'translateY(62vh)'
}

/*Função para salvar o setor*/
const save = function toSave(){
let values = input.value
//Cria condicional para verificar se o input foi preenchido para salvar
if(values.length <= 3){
    console.log("Nome inválido para guardar")
}
else{
    console.log("Setor guardado!")

    let name = input.value

    let sector = document.createElement('span')
    sector.textContent = `${name}`
    sector.className = 'name'

    let brother = input.parentNode
    brother.appendChild(sector)

    input.style.display = 'none'

    //Função para editar
        sector.addEventListener("click", function(){
        sector.style.display = 'none'

        input.style.display = 'block'
        input.style.transform = 'translate(-10vw,5vh);'

        button_save.style.transform = 'translate(56vw, 29vh)'
        button_del.style.transform = 'translate(77vw,29vh)'
    });

    //Função para acessar a tabela com 2 cliques
        /**
         * É possível criar um elemento html no js
         * let html = document.createElement('html')
           let body = document.createElement('body')
         */
       
    //Configurações dos botões de salvar e de deletar
    button_save.style.transform = 'translate(57vw,38vh)'
    button_save.style.marginTop = '1%'

    button_del.style.zIndex = '1'
    button_del.style.transform = 'translate(78vw,38vh)'


    //Chama a função Addition para ser executada.
    let button_add = document.querySelector('#add')
    button_add.addEventListener('click', add)
}
}

//Chama a função toSave para ser executada
button_save.addEventListener('click', save)
