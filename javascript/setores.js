document.addEventListener("DOMContentLoaded", function(){

    console.log('Script carregado!')

    $.ajax({
        url: '../php/setores-salvos.php' , type: 'POST' , processData: false ,contentType: false  
    }).done(function(request){
       
        request.forEach(function(item) {
            console.log(item.nome);
            console.log(item.id);
        });

    
    }).fail(function(jqXHR, textStatus, errorThrown){
        console.log(" ERRO " , jqXHR, textStatus, errorThrown)
    })//ajax

});//Onload