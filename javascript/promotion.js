document.addEventListener("DOMContentLoaded" , function(){

    let input = document.getElementById("product")

    console.log(input)

    let form = new FormData()
    form.append(input, product)

    const bloom = document.getElementById("bloom")//Ìcone de lupa
    bloom.addEventListener("click", function(){
        /*
        $.ajax({
            url: '../php/promo.php', type: "POST", processData: false, contentType: false
        }).done(function(request){
            console.log(request)
        });//Ajax*/
        if(input.value.length == 0){
            alert("Por favor digite pelo menos uma letra!")
        }
        else{
            console.log(" Letra digitada " , input.value)
        }
    })
});//Carregamento