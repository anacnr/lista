/*O chat me aconselhou a criar uma outra função para criar os elementos um de cada vez, somente quando o botão salvar for clicado que deixa criar mais input do setor*/

function Addition(){

/*Criação dos elementos: input, botão de salvar,o botão para deletar e a quebra de linha*/
let input = document.createElement("input")
let button_save = document.createElement('button')
let button_del = document.createElement('img')
let godfather = document.querySelector("body")//Elemento pai(padrinho)
let line = document.createElement('br')

input.className = 'setor'
godfather.appendChild(input)

button_save.className = 'save'
button_save.textContent = 'salvar'
button_save.type = 'submit'
godfather.appendChild(button_save)

button_del.className = 'del'
button_del.src = 'imgs-cad/cancel.svg'//ícone retirado do Google Icons
godfather.appendChild(button_del)

godfather.appendChild(line)

/*Funções do botão*/
button_save.addEventListener("click", function(){

    console.log("Salvo!")//Teste

//Nome do setor vai ser o valor recebdio no input
    let name = input.value;
//Caixa onde vai ficar o setor
    let setor = document.createElement("span")
    setor.className = 'name'
    setor.innerHTML = `${name}`
/*O Chat me explicou que o input não pose apadrinhar outro elemento então ele tem que ser como um irmão para que esse irmão herde suas propriedades*/
    let brother = input.parentNode
    brother.appendChild(setor)

//Escondo o input para a caixa não ficar aberta para digitação
    input.style.display = 'none'

/*Essa parte iria deixar o tamanho dos botões conforme a largura da janela. Porém não funciona quando adapto as telas
if(window.innerWidth <= 600){
    button_save.style.transform ='translate(58vw,38vh)'
    button_save.style.marginTop = '0.6%'
    button_del.style.transform = 'translate(76vw,38vh)'
    button_del.style.left = '2%'
    }//Condiiconal <=600 */
});//Botão salvar
button_del.addEventListener("click" , function(){
console.log("Excluído")//Teste
});//Botão deletar
}//Função princial