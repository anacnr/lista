
function Addition(){

/*Criação dos elementos: input, botão de salvar e o botão para deletar*/
let input = document.createElement("input")
let button_save = document.createElement('button')
let button_del = document.createElement('img')
let godfather = document.querySelector("body")
//Quebra de linha
let line = document.createElement('br')

input.className = 'setor'
godfather.appendChild(input)

button_save.className = 'save'
button_save.textContent = 'salvar'
godfather.appendChild(button_save)

button_del.className = 'del'
button_del.src = 'imgs-cad/cancel.svg'
godfather.appendChild(button_del)

godfather.appendChild(line)

/*Se o input existir cria mais um*/
if(input){
    document.addEventListener("click", function(){
    let count = 0
    count++
    let button = document.querySelector('#add')
    button.style.transform = 'translateY(50vh)'
    console.log(count)
});
}
}

