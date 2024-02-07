/*O chat me aconselhou a criar uma outra função para criar os elementos um de cada vez, somente quando o botão salvar for clicado que deixa criar mais input do setor. CRUD*/

console.log("Script carregado!");

/*Criação dos elementos: input, botão de salvar,o botão para deletar e a quebra de linha*/
let input = document.createElement("input");
let button_save = document.createElement("button");
let button_del = document.createElement("img");
let godfather = document.querySelector("body"); //Elemento pai(padrinho)
let line = document.createElement("br");

input.className = "setor";
input.maxLength = "15";
input.name = "setor"; //Utilizar para salvar no php
godfather.appendChild(input);

button_save.className = "save";
button_save.textContent = "salvar";
button_save.type = "submit";
godfather.appendChild(button_save);

button_del.className = "del";
button_del.src = "imgs-cad/cancel.svg"; //ícone retirado do GoogIcons
godfather.appendChild(button_del);

godfather.appendChild(line);

//Cria a função para adicionar

const addition = function toAdd() {
  /*Criação dos elementos: input, botão de salvar,o botão para deletar e a quebra de linha*/
  let input = document.createElement("input");
  let button_save = document.createElement("button");
  let button_del = document.createElement("img");
  let godfather = document.querySelector("body"); //Elemento pai(padrinho)
  let line = document.createElement("br");

  input.className = "setor";
  input.maxLength = "15";
  input.name = "setor"; //Utilizar para salvar no php
  godfather.appendChild(input);

  button_save.className = "save";
  button_save.textContent = "salvar";
  button_save.type = "submit";
  godfather.appendChild(button_save);

  button_del.className = "del";
  button_del.src = "imgs-cad/cancel.svg"; //ícone retirado do GoogIcons
  godfather.appendChild(button_del);

  godfather.appendChild(line);

};//Função addition

/*LocalStorage dos setores para criar o CRUD*/

//Nomeação do setor(variável global)
const nameSection = {
  //let name_setor = input.value
  name: "setora",
  id: "3",
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

//function readSection(){ getItem(); } Não pegou

//Atualização do setor em JSON

function upSetor(setor, index) {
  const up_sector = readSection();
  up_sector[index] = setor;
  setItem(up_sector);
}

//Exclusão do setor em JSON
function delSetor(index){
    const del_sector = readSection()
    del_sector.splice(index,1)
    setItem(del_sector)
}