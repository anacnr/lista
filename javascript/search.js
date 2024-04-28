console.log("Script JS")

const input = document.querySelector('input')
const button_submit = document.querySelector('i')

button_submit.addEventListener('click', ()=>{
    if(input.value.length < 1){
            console.log("Input vazio!");
    }
    else{
            console.log(input.value)
            const form = new FormData()
            form.append('input' , input.value)    
            $.ajax({
                url:'../php/pesquisa.php', type: 'POST', data: form, processData: false, contentType: false
            }).done(function(request){
                //console.log(request)
                request.forEach(element => {
                    console.log(element)
                });
            })           
    }
});//Botão

      
                    
                    /*
                    const form = new FormData()
                    form.append('input' , input)    
                    $.ajax({
                        url:'../php/search.php', type: 'POST', data: form, processData: false, contentType: false
                    }).done(function(request){
                        console.log(typeof(request))
                    })*/
                
