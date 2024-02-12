/**
 * A tabela poderá ter uma linha editada ou apagada e também o uusário poder acrescentar mais linhas.
 */
document.addEventListener("DOMContentLoaded", function(){

const delet = function toDelete(){
    document.getElementById("exc").addEventListener("click", function(){
        console.log("Deletado!")
    });
}//Função toDelete
//delet() -> Cahama a função de deletar.

const save = function toSave(){
    document.getElementById("sav").addEventListener("click",function(){
       //console.log("Salvado!")
        /*Fazer o botão de editar aparecer e o de adicionar sumir*/
        let button_edi = document.getElementById("edi")
        let button_add = document.getElementById("add")

        let table_rows = document.querySelectorAll("tr")
        if(table_rows.length > 2){
            console.log("Linha guardada")
        
            setTimeout(()=>{
                button_add.style.display = 'none'
                button_edi.style.opacity = '1'
                button_edi.style.display = 'block'
                button_edi.style.position = 'absolute'
                button_edi.style.left = '210px'

                let button_sav = document.getElementById("sav")
                button_sav.style.position = 'absolute'
                button_sav.style.right = '125px'
                button_sav.style.top = '1px'
            },1000)//setTimeout

        }
    });
}//Função toSave
//save() -> Chama a função de salvar.

const edit = function toEdit(){
    let button_edi = document.getElementById("edi")
   button_edi.addEventListener("click", function(){
    console.log("Editado!")

    //Transformar o botão de editar em adicionar
    setTimeout(()=>{
    button_edi.style.opacity = '0.5'
    
    setTimeout(()=>{
        button_edi.style.display = 'none'
    },500)

    let button_add = document.getElementById("add")
    button_add.style.display = 'block'
    button_add.style.position = 'absolute'
    button_add.style.bottom = "-25px"
    button_add.style.left  =  "50vw"

    /*Criação de nova linha na tabela*/
    button_add.addEventListener("click", function(){
        let table_row = document.createElement('tr')
        let godfather = document.querySelector('tbody')
        godfather.appendChild(table_row)
        for(let count = 0; count < 7; count++){
            let table_data = document.createElement('td')
            table_row.appendChild(table_data)
        }
        save()
    })
    
    //Posicionar os botões de excluir e salvar

    let button_exc = document.getElementById("exc")
    button_exc.style.position = 'absolute'
    button_exc.style.left = '125px'

    let button_sav = document.getElementById("sav")
    button_sav.style.position = 'absolute'
    button_sav.style.right = '125px'

    },1000);//Set timeout

    });//clique para editar
   
}//Função toEdit
//edit() -> Chama a função de editar.
edit()

});//Carregamento