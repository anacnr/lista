/*O chat me aconselhou a criar uma outra função para criar os elementos um de cada vez, somente quando o botão salvar for clicado que deixa criar mais input do setor. CRUD*/

console.log("Script carregado!");

document.addEventListener("DOMContentLoaded", function(){

document
  .querySelector("form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
  });

/*Criação dos elementos: input, botão de salvar,o botão para deletar e a quebra de linha*/
let input = document.createElement("input");
let button_save = document.createElement("button");
let button_del = document.createElement("img");
let godfather = document.querySelector("form"); //Elemento pai(padrinho)
let line = document.createElement("br");

input.className = "setor";
input.maxLength = "15";
input.name = "setor";
input.required = true;
godfather.appendChild(input);

button_save.className = "save";
button_save.textContent = "salvar";
button_save.type = "submit";
godfather.appendChild(button_save);

button_del.className = "del";
button_del.src = "imgs-cad/cancel.svg"; //Ìcone retirado do GoogIcons
button_del.type = "button";
godfather.appendChild(button_del);

godfather.appendChild(line);

/*LocalStorage dos setores para criar o CRUD*/

//Nomeação do setor(variável global)
const nameSection = {
  name: input.value,
};

/*Métodos do localStorage*/
const getItem = () => JSON.parse(localStorage.getItem("name")) ?? [];

const setItem = (add_name) =>
  localStorage.setItem("name", JSON.stringify(add_name));

//Criação do setor em JSON
function newSection(sector) {
  let add_name = getItem();
  add_name.push(sector);
  setItem(add_name);
}

//Leitura do setor em JSON
const readSection = () => getItem();

//Atualização do setor em JSON
function upSetor(setor, index) {
  const up_sector = readSection();
  up_sector[index] = setor;
  setItem(up_sector);
}

//Exclusão do setor em JSON
function delSetor(index) {
  const del_sector = readSection();
  del_sector.splice(index, 1);
  setItem(del_sector);
}

//Cria a função para adicionar novo setor
const addition = function toAdd() {
  let input = document.createElement("input");
  let button_save = document.createElement("button");
  let button_del = document.createElement("img");
  let godfather = document.querySelector("form"); //Elemento pai(padrinho)
  let line = document.createElement("br");

  input.className = "setor";
  input.maxLength = "15";
  input.name = "setor";
  godfather.appendChild(input);

  button_save.className = "save";
  button_save.textContent = "salvar";
  button_save.type = "submit";
  godfather.appendChild(button_save);

  button_del.className = "del";
  button_del.src = "imgs-cad/cancel.svg"; //Ìcone retirado do GoogIcons
  button_del.type = "button";
  godfather.appendChild(button_del);

  godfather.appendChild(line);
}; //Função addition

//Função para deletar setor
  const delet = function toExclude(){
  console.log("Setor excluído")
};//Funcão deletar

//Função para salvar o setor
const save = function toSave() {
  let values = input.value;

  if (values.length < 3) {
    console.log(
      values,
      " não é permitido. Por favor digite mais do que ",
      values.length , " letras "
    )
    button_save.disabled = false;
  }
  else {
     //Chamei a variável global
    newSection(nameSection.name)

    console.log(newSection(nameSection.name))

    let button_add = document.getElementById("add");
    button_add.addEventListener("click", addition);

    button_del.addEventListener("click" , delet);
}};

console.log(input.value)

button_save.addEventListener("click",save);

/**Menu para ver perfil */

let menu_open = document.querySelector('#menu')
menu_open.addEventListener("click" , function(){

  let board = document.createElement("div")
  board.id = 'conta'

  let godfather = document.querySelector("body")
  godfather.appendChild(board)

  let menu_close = document.createElement('img')
  menu_close.id = 'menu'
  menu_close.src = 'imgs/close_FILL0_wght400_GRAD0_opsz24.svg'

  let sister = menu_open.parentNode
  sister.appendChild(menu_close)

  menu_open.style.opacity = '0'

  menu_close.addEventListener("click", function(){
    board.style.display = 'none'
    let young_sister = menu_close.parentNode
    young_sister.appendChild(menu_open)
    menu_close.style.opacity = 0
    menu_open.style.opacity = '1'
  })
})

});//domloaded