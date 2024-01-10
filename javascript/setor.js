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
    let button = document.querySelector('#add')
    button.style.transform = 'translateY(50vh)'
});
}

/*Funções do botão*/
button_save.addEventListener("click", function(){
input.style.cursor = 'pointer'
let name = input.value;

let setor = document.createElement("span")
setor.className = 'name'
setor.innerHTML = `${name}`

let brother = input.parentNode
brother.appendChild(setor)

let times = false

let click =  function Clicked(){
if(!times){
    times = true
    setTimeout(()=>{
        times = false
        window.location.href = '../teste.html'   
    },1000);
}  
else{
   times = false
}
}
setor.addEventListener("click", click);

var ondbclick = function clickedTwice(){
    console.log("Clicado duas vezes")
    setor.removeEventListener("click", click)
}
setor.addEventListener("dblclick", ondbclick);

input.style.display = 'none'
button_save.style.transform = 'translate(55vw,35vh)'
button_del.style.transform = 'translate(75vw,35vh)'
});

button_del.addEventListener("click" , function(){
console.log("Excluído")
});
}