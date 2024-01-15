
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
button_save.type = 'submit'
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
});
}//Condicional se existei input

for(let count = 0; count < 1; count++){
/*Funções do botão*/
button_save.addEventListener("click", function(){
input.style.cursor = 'pointer'

    let name = input.value;

    let setor = document.createElement("span")
    setor.className = 'name'
    setor.innerHTML = `${name}`
    
    let brother = input.parentNode
    brother.appendChild(setor)
    
    input.style.display = 'none'

    if(window.innerWidth <= 600){
    button_save.style.transform ='translate(58vw,38vh)'
    button_save.style.marginTop = '0.6%'
    button_del.style.transform = 'translate(76vw,38vh)'
    button_del.style.left = '2%'
    }
    else if(window.innerWidth >= 600 && window.innerWidth <=768){
    button_save.style.transform ='translate(68vw,20vh)'
    button_save.style.marginTop = '0'
    button_del.style.transform = 'translate(59vw,28vh)'
    button_del.style.left = '2%'
    }

});//Botão salvar
}//Loop for
button_del.addEventListener("click" , function(){
console.log("Excluído")
});//Botão deletar
}//Funhção