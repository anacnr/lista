function Addition(){

    let input = document.createElement("input")
    input.className = 'setor'

    let godfather = document.querySelector("body")
    godfather.appendChild(input)

    let inp_val = input.value

    if(inp_val.length > 3){
        let button_save = document.createElement("button")
        button_save.type = 'submit'
        button_save.className = 'save'

        godfather.appendChild(button_save)
        /*Não está aparecendo o botão, tentei por em uma div existente mas não funcionou*/
    }
}