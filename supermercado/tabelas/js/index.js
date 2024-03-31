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
    for(let count = 0; count < 5; count++){
            let table_data = document.createElement('td')
            table_row.appendChild(table_data)

            let input = document.createElement("input")
            input.type = 'text'
            input.className = 'input'
            input.required = true

            table_data.appendChild(input)
    }

    //Input file para receber a imagem
    let table_data_number = document.createElement('td')
    table_row.appendChild(table_data_number)

    let input_numbers = document.createElement("input")
    input_numbers.type = 'number'
    input_numbers.className = 'input'
    input_numbers.required = true

    table_data_number.appendChild(input_numbers)

    //Input file para receber a imagem
    let table_data_img = document.createElement('td')
    table_row.appendChild(table_data_img)

    let input = document.createElement("input")
        input.type = 'file'
        input.id = 'input-img'
        input.className = 'input'
        input.accept = 'image/*'
        input.required = true

        table_data_img.appendChild(input)

     //Label do input file
     let label = document.createElement("label")
     label.className = 'label-input'
     label.htmlFor = `input-img`

     table_data_img.appendChild(label)

     //Ìcone de upload
     let icon = document.createElement("img")
     icon.id = 'icon-upload'
     icon.className = 'icon-upload'
     icon.src = 'buttons/upload.svg'
    
     label.appendChild(icon)

    //Parte para mostrar a imagem inserida
    let img_uploaded = document.getElementById("input-img")

    img_uploaded.addEventListener("change" , function(){
    let label_icon = document.getElementById("icon-upload")
    label_icon.classList.remove('icon-upload')

    let eyes = new FileReader()

    eyes.onload = function toRead(){

        label_icon.src = `${eyes.result}`
        label_icon.classList.add('img-uploaded')
    }
    eyes.readAsDataURL(img_uploaded.files[0]);
});//Função da imagem

    //Parte de salvar os setores

    let button_save = document.querySelector("#sav")

    const save = function toSave(){
    
        //Verifica se os inputs não receberam valores
        let datas = document.querySelectorAll('.input')[0,1,2,3,4,5,6].value

        if(datas.length == 0){
            console.log("Por favor preencha os campos!")
        }
        else{
            //É aqui que vai rolar a adição dos produtos
            console.log("Salvo")

            const form = new FormData();
            form.append('product' , datas[0])
            form.append('code' , datas[1])
            form.append('measure' , datas[2])
            form.append('price' , datas[3])
            form.append ('brand' , datas[4])
            form.append('quantity' , datas[5])
            form.append('image' , datas[6])

            $.ajax({
                url : '' , type: 'POST' ,data: form, processData: false ,contentType: false
            })
        }
        
        //console.log("Salvo")
    }

    button_save.addEventListener("click" , save)

}//Função para adicionar.

button_add.addEventListener("click", add)

});//Carregamento