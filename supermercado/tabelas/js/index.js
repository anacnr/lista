/**
 * A tabela poderá ter uma linha editada ou apagada e também o usuário poderá acrescentar mais linhas.
 */
document.addEventListener("DOMContentLoaded", function(){

//Criar as funções para adionar, salvar, editar e deletar
let button_add = document.querySelector("#add")
const add = function toAdd(){
    
    //Faz com que outra linha da tabela seja criada.
    let table_row = document.createElement('tr')

    let table_body = document.querySelector('tbody')
    table_body.appendChild(table_row)
    //Este laço serve para criar tds com a quantidade de ths
    for(let count = 0; count < 6; count++){
            let table_data = document.createElement('td')
            table_row.appendChild(table_data)

            let input = document.createElement("input")
            input.type = 'text'
            input.className = 'input'
            input.required = true

            table_data.appendChild(input)
    }

    //Input file para receber a imagem
    let table_data = document.createElement('td')
    table_row.appendChild(table_data)

    let input = document.createElement("input")
        input.type = 'file'
        input.id = 'input-id'
        input.className = 'input'
        input.required = true

        table_data.appendChild(input)

     //Label do input file
     let label = document.createElement("label")
     label.className = 'label-input'
     label.htmlFor = `input-id`

}//Função para adicionar.

button_add.addEventListener("click", add)

});//Carregamento