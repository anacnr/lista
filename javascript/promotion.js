document.addEventListener("DOMContentLoaded" , function(){

    let input = document.getElementById("product")

    let value_inp = input.value

    const bloom = document.getElementById("bloom")//Ìcone de lupa
    bloom.addEventListener("click", function(){
        /**/
        if(input.value.length == 0){
            alert("Por favor digite pelo menos uma letra!")
        }
        else{
            console.log(" Letra digitada " , input.value)

            const form = new FormData()
            form.append('product' , value_inp)
            $.ajax({
                url: '../php/promo.php',
                type: "POST",
                data: form,
                processData: false,
                contentType: false
            }).done(function(request) {
                    console.log(request)
            });
            
        }
    })
});//Carregamento