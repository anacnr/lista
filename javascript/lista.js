/*Criar a lista com js*/
//Segundo arquivo
  //Fazer uma requisição Ajax para obter o conteúdo do arquivo
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const response = xhr.responseText;
                //Aqui você pode manipular a resposta da requisição
                document.addEventListener("DOMContentLoaded" , () =>{
                    const tag = document.createElement("script")
                    tag.src = 'search.js'
                    document.addEventListener('choose' , function(event){
                        const name_prod = event.detail;
                        console.log("Conteúdo do arquivo:", name_prod);
                    })
                });               
            } else {
                console.error('Erro ao obter conteúdo do arquivo:', xhr.statusText);
            }
        }
    };
    xhr.open('GET', '../javascript/search.js');
    xhr.send();
