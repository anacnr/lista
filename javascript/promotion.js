document.addEventListener("DOMContentLoaded" , function(){

    let input = document.getElementById("product")

    console.log(input.value)

    let form = new FormData()
    form.append(input, product)


});//Carregamento