document.addEventListener("DOMContentLoaded", function(){

    console.log('Script carregado!')

    $.ajax({
        url: '../php/setores-salvos.php' , type: 'POST' , processData: false ,contentType: false  
    }).done(function(request){
       request.forEach(function(data) {
        
        let name_setor = data.nome
        let id_setor = data.id

        let span = document.createElement('span')
        span.textContent = name_setor
        span.id = `nome${id_setor}` //Essa técnina eu vi em um vídeo no Youtube, o span terá como id a palavra nome + o número do seu id do banco
        span.className = 'setor'

        let span_icons = document.createElement('span')
        span_icons.className = 'span_icons'

        let icon_edit = document.createElement('img')
        icon_edit.className = 'icon-edit'
        icon_edit.src = './buttons/edit_square_FILL0_wght400_GRAD0_opsz24.svg'

        let icon_delete = document.createElement('img')
        icon_edit.className = 'icon-delete'
        icon_edit.src = './buttons/delete_FILL0_wght400_GRAD0_opsz24.svg'

        let body = document.querySelector('body')
        body.appendChild(span)
        body.appendChild(span_icons)
        body.appendChild(icon_edit)
       
        
        });

    }).fail(function(jqXHR, textStatus, errorThrown){
        console.log(" ERRO " , jqXHR, textStatus, errorThrown)
    })//ajax

});//Onload