/**
 * A tabela poderá ter uma linha editada ou apagada e também o usyário poder acrescentar mais linhas.
 */
document.addEventListener("DOMContentLoaded", function(){

/*Criação de nova linha na tabela*/    
function toAdd(){
    let table_row = document.createElement('tr')
    let godfather = document.querySelector('tbody')
    godfather.appendChild(table_row)
    for(let count = 0; count < 8; count++){
            let table_data = document.createElement('td')
            table_row.appendChild(table_data)
    }
}//Função toAdd


const delet = function toDelete(){
    document.getElementById("exc").addEventListener("click", function(){
        console.log("Deletado!")
    });
}//Função toDelete


const save = function toSave(){
    document.getElementById("sav").addEventListener("click",function(){
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

                
            },500)//setTimeout

        }
    });
}//Função toSave


const edit = function toEdit(){
    let button_edi = document.getElementById("edi")
   button_edi.addEventListener("click", function(){
    console.log("Editado!")

    //Transformar o botão de editar em adicionar
    setTimeout(()=>{
    
    button_edi.style.display = 'none'
    
    let button_add = document.getElementById("add")
    button_add.style.display = 'block'
    button_add.style.position = 'relative'

    function Recise(){
        if(window.innerWidth <=600){
            button_add.style.right = '15vw' 
        }
        else if (window.innerWidth > 600 && window.innerWidth <= 768) {
            button_add.style.right = '15vw'
        }
        else if (window.innerWidth > 768 && window.innerWidth <= 830) {
            button_add.style.right = '15vw'
        }
        else if (window.innerWidth > 830 && window.innerWidth <= 1000) {
            button_add.style.right = '13vw'
        }
        else if (window.innerWidth > 1000 && window.innerWidth <= 1200) {
            button_add.style.right = '10vw'
        }
         else {
            button_add.style.right = '9vw'
        }
    }
  
    window.addEventListener('resize', Recise)
    Recise()

    button_add.addEventListener("click" , toAdd)

    //Posiciona os botões de excluir e salvar

    let button_exc = document.getElementById("exc")
    button_exc.style.position = 'relative'
    button_exc.style.right = '8vw'

    let button_sav = document.getElementById("sav")
    button_sav.style.position = 'relative'
    button_sav.style.left = '8vw'

    },1000);//setTimeout

    });//click para editar

save()

}//Função toEdit

edit()

});//Carregamento