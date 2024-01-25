/*O chat me aconselhou a criar uma outra função para criar os elementos um de cada vez, somente quando o botão salvar for clicado que deixa criar mais input do setor*/

/*Criação dos elementos: input, botão de salvar,o botão para deletar e a quebra de linha*/
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


/*Função para adicionar o setor*/
    const add = function Addition(){
    console.log("Setor adicionado!")
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

    //Configurações dos botões de salvar e de deletar
    button_save.style.transform = 'translate(57vw,38vh)'
    button_save.style.marginTop = '1%'

    button_del.style.zIndex = '1'
    button_del.style.transform = 'translate(78vw,38vh)'


    //Chama a função Addition para ser executada
    let button_add = document.querySelector('#add')
    button_add.addEventListener('click', add)
}
}

//Chama a função toSave para ser executada
button_save.addEventListener('click', save)